/* // Render planets
function renderPlanets(planets) {
  // Get the navigation element where the planets will be displayed
  const navigation = document.getElementById("planet");

  // Clear any existing content in the navigation element
  navigation.innerHTML = "";

  // Loop through each planet in the planets array
  planets.forEach((planet) => {
    // Create a new div element to represent the planet
    const planetElement = document.createElement("div");

    // Add the 'planet' class to the div for styling purposes
    planetElement.classList.add("planet");

    // Optional, set the width and height of the div based on the planet's size
    planetElement.style.width = `${planet.size}px`;
    planetElement.style.height = `${planet.size}px`;

    // Store the planet's name in a data attribute for easy access
    planetElement.dataset.name = planet.name;

    // Add a click event listener to the planet element
    planetElement.addEventListener("click", () => {
      // Redirect to the planet.html page, passing the planet's name as a query parameter
      window.location.href = `planet.html?planet=${planet.name}`;
    });

    // Append the planet element to the navigation element
    navigation.appendChild(planetElement);
  });
}

// Run scripts
loaded();
 */

//Javascript made by Rasmus
const addLinksFromPlanets = () => {
  const sun = document.querySelector(".sun");
  const mercury = document.querySelector(".mercury");
  const venus = document.querySelector(".venus");
  const earth = document.querySelector(".earth");
  const mars = document.querySelector(".mars");
  const jupiter = document.querySelector(".jupiter");
  const saturn = document.querySelector(".saturn");
  const uranus = document.querySelector(".uranus");
  const neptune = document.querySelector(".neptune");

  sun.addEventListener("click", (e) => {
    localStorage.setItem("planet", 0);
    window.location.href = "../Planet/planet.html";
  });
  mercury.addEventListener("click", (e) => {
    localStorage.setItem("planet", 1);
    window.location.href = "../Planet/planet.html";
  });
  venus.addEventListener("click", (e) => {
    localStorage.setItem("planet", 2);
    window.location.href = "../Planet/planet.html";
  });
  earth.addEventListener("click", (e) => {
    localStorage.setItem("planet", 3);
    window.location.href = "../Planet/planet.html";
  });
  mars.addEventListener("click", (e) => {
    localStorage.setItem("planet", 4);
    window.location.href = "../Planet/planet.html";
  });
  jupiter.addEventListener("click", (e) => {
    localStorage.setItem("planet", 5);
    window.location.href = "../Planet/planet.html";
  });
  saturn.addEventListener("click", (e) => {
    localStorage.setItem("planet", 6);
    window.location.href = "../Planet/planet.html";
  });
  uranus.addEventListener("click", (e) => {
    localStorage.setItem("planet", 7);
    window.location.href = "../Planet/planet.html";
  });
  neptune.addEventListener("click", (e) => {
    localStorage.setItem("planet", 8);
    window.location.href = "../Planet/planet.html";
  });
};

const linkToFavorites = () => {
  const favoritesButton = document.querySelector("#favorites-link");
  favoritesButton.addEventListener("click", (e) => {
    window.location.href = "../Favorites/favorites.html";
  });
};

addLinksFromPlanets();
linkToFavorites();
