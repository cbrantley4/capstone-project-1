export default st => `
<section id="Boulder">
    <nav>
      <img src = "https://images.unsplash.com/photo-1566479618384-cc9dd638d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" attribute="SameSite">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
          <li>Bear Peak Out and Back</li>
          <li>Boulder Skyline Traverse</li>
          <li>Sunshine Lion's Lair Loop</li>
          <li>Green Mountain via Ranger/Saddle Rock Loop</li>
          <li>Walker Ranch</li>
          <li>Royal Arch Out and Back</li>
          <li>Mount Sanitas Loop</li>
          <li>Betasso Preserve</li>
          <li>Marshall Mesa to Spring Brook Loop</li>
          <li>Sugarloaf Mountain</li>
        </ol>
    </nav>
</section>`;
