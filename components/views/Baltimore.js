export default st => `
<section id="Baltimore">
    <nav>
      <img src = "https://images.unsplash.com/photo-1542031630-99647f0f3e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <ul>
          ${st.trails.map(trail => `<li>${trail.name}</li>`).join("")}
        </ul>
    </nav>
</section>`;
