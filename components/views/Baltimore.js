export default st => `
<section id="Baltimore">
    <nav>
      <h1>Baltimore, MD</h1>
      <img src = "https://images.unsplash.com/photo-1542031630-99647f0f3e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <ol>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
        </ol>
    </nav>
</section>`;
