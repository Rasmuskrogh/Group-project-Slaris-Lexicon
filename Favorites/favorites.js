// Made by Rasmus

const getFavorites = () => {
  try {
    if (!checkFavorites()) {
      console.log("tut");
      throw new Error("Du har inga favoritmarkerade planeter");
    } else {
      const planetArray = JSON.parse(localStorage.getItem("planets"));
      const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
      const planets = planetArray.bodies;
      for (planet of planets) {
        for (favorite of favoritesArray) {
          if (planet.id === favorite) {
            console.log("planet.id", planet.id);
            const cardWrapper = document.querySelector(
              ".favorites-card-wrapper"
            );
            const html = `
            <div class="favorites-card">
              <h2>${planet.name}</h2>
              <div class="planet-div" id="planet-color-${planet.id}"
              </div>

            </div>
            `;
            cardWrapper.insertAdjacentHTML("beforeend", html);
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
  if (favorites) {
    return true;
  }
  return false;
};

getFavorites();
