export default st => `
<section id="Sanfran">
    <nav>
      <h1>San Francisco, CA</h1>
      <img src = "https://images.unsplash.com/photo-1422226256160-9b266e308ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
        </ol>
    </nav>
</section>`;
