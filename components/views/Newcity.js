export default () => `
<section id="PageE">
  <h1>Search other cities for a running or walking trail:</h1>
  <img src="https://images.unsplash.com/photo-1532117892888-38948e152b3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" attribute="SameSite">
  <ul>
    <li><a id="boulder-link" href="Newcity/Boulder" data-navigo>Boulder, CO</a></li>
    <li><a id="sanfran-link" href="Newcity/Sanfran" data-navigo>San Francisco, CA</a></li>
    <li><a id="baltimore-link" href="Newcity/Baltimore" data-navigo>Baltimore, MD</a></li>
</section>
`;

// BoulderLink: https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}

// SanfranLink: https://www.hikingproject.com/data/get-trails?lat=37.775592&lon=-122.417004&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}

// BaltimoreLink: https://www.hikingproject.com/data/get-trails?lat=39.293126&lon=-76.615702&maxDistance=10&key=${process.env.REI_HIKING_API_KEY}
