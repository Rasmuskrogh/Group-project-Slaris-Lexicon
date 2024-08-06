// Made by Rasmus
const createFavorites = () => {
  favorites = [1, 3, 7];
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

createFavorites();

const getFavorites = () => {
  try {
    if (!checkFavorites()) {
      console.log("tut");
      throw new Error("Du har inga favoritmarkerade planeter");
    } else {
      const planetArray = JSON.parse(localStorage.getItem("planets"));
      const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
      console.log("array", favoritesArray);
      const planets = planetArray.bodies;
      console.log(planets);
      for (planet of planets) {
        for (favorite of this.favorites) {
          if (planet.id === favorite) {
            const cardWrapper = document.querySelector(
              ".favorites-card-wrapper"
            );
            const html = `
            <div class="favorites-card">
              <h2>${planet.name}</h2>
              <figure><img src="" alt="planet img" /></figure>
            </div>
            `;
            cardWrapper.insertAdjacentElement("beforeend", html);
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const checkFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  console.log(favorites);
  if (favorites) {
    return true;
  }
  return false;
};

getFavorites();
