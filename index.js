/* eslint-disable no-undef */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { auth, db } from "./firebase";
import "./env";

const coll = db.collection("users");

// axios
//   .get(
//     `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}`
//   )
//   .then(response =>
//     response.data.trails.forEach(trail => state.Boulder.trails.push(trail))
//   )
//   .catch(err => console.log(err));
// axios
//   .get(
//     `https://www.hikingproject.com/data/get-trails?lat=37.775592&lon=-122.417004&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}`
//   )
//   .then(response =>
//     response.data.trails.forEach(trail => state.Sanfran.trails.push(trail))
//   )
//   .catch(err => console.log(err));
// axios
//   .get(
//     `https://www.hikingproject.com/data/get-trails?lat=39.293126&lon=-76.615702&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}`
//   )
//   .then(response =>
//     response.data.trails.forEach(trail => state.Baltimore.trails.push(trail))
//   )
//   .catch(err => console.log(err));

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  listenForBoulderClick(st);
  listenForSanfranClick(st);
  listenForBaltimoreClick(st);
  addSiteListeners(st);
}

function listenForBoulderClick(st) {
  if (st.view === "Newcity") {
    document.querySelector("#boulder-link").addEventListener("click", event => {
      event.preventDefault();
      render(state.Boulder);
    });
  }
}

function listenForSanfranClick(st) {
  if (st.view === "Newcity") {
    document.querySelector("#sanfran-link").addEventListener("click", event => {
      event.preventDefault();
      render(state.Sanfran);
    });
  }
}

function listenForBaltimoreClick(st) {
  if (st.view === "Newcity") {
    document
      .querySelector("#baltimore-link")
      .addEventListener("click", event => {
        event.preventDefault();
        render(state.Baltimore);
      });
  }
}

function addSiteListeners(st) {
  // addLogInAndOutListener(state.User);
  listenForAuthChange();
  addNavEventListeners();
  listenForRegister(st);
  listenForSignIn(st);
  listenForSignOut(st, state.user);
  resetUserInState();
}

// FUNCTIONS & EVENT LISTENERS
// function addLogInAndOutListener(user) {
//   if (state.view === "Home") {
//     // select link in header
//     document.querySelector("header a").addEventListener("click", event => {
//       // if user is logged in,
//       if (user.loggedIn) {
//         event.preventDefault();
//         // log out functionality
//         auth.signOut().then(() => {
//           console.log("user logged out");
//           logOutUserInDb(user.email);
//           resetUserInState();
//           //update user in database
//           coll.get;
//           render(state.Home);
//         });
//         console.log(state.User);
//       }
//       // if user is logged out, clicking the link will render sign in page (handled by <a>'s href)
//     });
//   }
// }

function logOutUserInDb(email) {
  if (state.User.loggedIn) {
    db.collection("users")
      .get()
      .then(snapshot =>
        snapshot.docs.forEach(doc => {
          if (email === doc.data().email) {
            let id = doc.id;
            db.collection("users")
              .doc(id)
              .update({ signedIn: false });
          }
        })
      );
    console.log("user signed out in db");
  }
}
function resetUserInState() {
  state.User.username = "";
  state.User.firstName = "";
  state.User.lastName = "";
  state.User.email = "";
  state.User.loggedIn = false;
}

function listenForAuthChange() {
  // log user object from auth if a user is signed in
  auth.onAuthStateChanged(user => (user ? console.log(user) : ""));
}

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

function listenForRegister(st) {
  if (st.view === "Register") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let firstName = inputs[0];
      let lastName = inputs[1];
      let email = inputs[2];
      let password = inputs[3];

      //create user in Firebase
      auth.createUserWithEmailAndPassword(email, password).then(response => {
        console.log("user registered");
        console.log(response);
        console.log(response.user);
        addUserToStateAndDb(firstName, lastName, email, password);
        render(state.Home);
      });
    });
  }
}
function addUserToStateAndDb(first, last, email, pass) {
  console.log(state);
  state.User.username = first + last;
  state.User.firstName = first;
  state.User.lastName = last;
  state.User.email = email;
  state.User.loggedIn = true;

  coll.add({
    firstName: first,
    lastName: last,
    email: email,
    password: pass,
    signedIn: true
  });
}

function listenForSignIn(st) {
  if (st.view === "Signin") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let email = inputs[0];
      let password = inputs[1];
      auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log("user signed in");
        getUserFromDb(email).then(() => render(state.Home));
      });
      render(state.Home);
    });
  }
}

function listenForSignOut(st, user) {
  if (st.view === "Signout") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      auth.signOut().then(() => {
        //update user in database
        logOutUserInDb(user);
        resetUserInState();
        coll.get;
        console.log("user logged out");
        console.log(state.User);
      });
    });
  }
}

function getUserFromDb(email) {
  return db
    .collection("users")
    .get()
    .then(snapshot =>
      snapshot.docs.forEach(doc => {
        if (email === doc.data().email) {
          let id = doc.id;
          db.collection("users")
            .doc(id)
            .update({ signedIn: true });
          console.log("user signed in in db");
          let user = doc.data();
          state.User.username = user.firstName + user.lastName;
          state.User.firstName = user.firstName;
          state.User.lastName = user.lastName;
          state.User.email = email;
          state.User.loggedIn = true;
          console.log(state.User);
        }
      })
    );
}

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
