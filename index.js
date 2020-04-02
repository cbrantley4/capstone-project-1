import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import { auth, db } from "./firebase";

axios
  .get(
    "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200694459-1bf8c15cf29b86d2f3fe98cac63412d3"
  )
  .then(response =>
    response.data.trails.forEach(trail => state.Boulder.trails.push(trail))
  )
  .catch(err => console.log(err));

axios
  .get(
    "https://www.hikingproject.com/data/get-trails?lat=37.775592&lon=-122.417004&maxDistance=10&key=200694459-1bf8c15cf29b86d2f3fe98cac63412d3"
  )
  .then(response =>
    response.data.trails.forEach(trail => state.Sanfran.trails.push(trail))
  )
  .catch(err => console.log(err));

axios
  .get(
    "https://www.hikingproject.com/data/get-trails?lat=39.293126&lon=-76.615702&maxDistance=10&key=200694459-1bf8c15cf29b86d2f3fe98cac63412d3"
  )
  .then(response =>
    response.data.trails.forEach(trail => state.Baltimore.trails.push(trail))
  )
  .catch(err => console.log(err));

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  addNavEventListeners();
  listenForBoulderClick(st);
  listenForSanfranClick(st);
  listenForBaltimoreClick(st);
}

render();

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
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
