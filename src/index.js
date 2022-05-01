import "./styles.css";
//import "./main.js";

document.getElementById("app").innerHTML = `
<!-- CAROUSEL -->
<main class="carousel">
<!-- IMAGES -->
  <article class="images">
      <img src="https://source.unsplash.com/random/801x600" alt="" class="image" />
      <img src="https://source.unsplash.com/random/800x601" alt="" class="image" />
      <img src="https://source.unsplash.com/random/802x602" alt="" class="image" />
      <img src="https://source.unsplash.com/random/803x600" alt="" class="image" />
  </article>
  <!--CONTROLS-->
  <nav class="controls">
      <button class="btn prev">Previous</button>
      <button class="btn next">Next</button>
  </nav>
</main>
`;
