export default st => `
<section id="Sanfran">
    <nav>
      <img src = "https://images.unsplash.com/photo-1422226256160-9b266e308ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" attribute="SameSite">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
          <li>Coastal Trail: Lands End</li>
          <li>Hillside Loop</li>
          <li>Muir Beach Loop</li>
          <li>Mount Tamalpais from Muir Woods</li>
          <ii>Panoramic Loop</li>
          <li>Mt. Livermore Summit - North Ridge Trail</li>
          <li>Tennessee Valley Lollipop</li>
          <li>Table Rock 27k</li>
          <li>Richmond Marina Bay Trail</li>
          <li>South Headlands Loop (Coast-Miwok-Alta)
        </ol>
    </nav>
</section>`;
