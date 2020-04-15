export default st => `
<section id="Boulder">
    <nav>
      <img src = "https://images.unsplash.com/photo-1566479618384-cc9dd638d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
        </ol>
    </nav>
</section>`;
