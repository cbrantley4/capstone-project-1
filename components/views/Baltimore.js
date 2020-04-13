export default st => `
<section id="Baltimore">
    <nav>
      <img src = "https://images.unsplash.com/photo-1542031630-99647f0f3e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" attribute="SameSite">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
          <li>Soapstone-Santee-Ridge Loop</li>
          <li>Soapstone, Santee Branch, Bull Run Loop</li>
          <li>Morning Choice and Rockburn Branch</li>
          <li>Baltimore Inner Harbor</li>
          <li>Morning Choice Loop</li>
          <li>Milford Mill Trail</li>
          <li>Santee Branch Trail</li>
          <li>Harbor Bridge Walk</li>
          <li>Cascade Falls Trail</li>
          <li>Garrett's Pass</li>
        </ol>
    </nav>
</section>`;
