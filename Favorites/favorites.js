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
              <div class="planet-div"
              </div>

            </div>
            `;
            cardWrapper.insertAdjacentHTML("beforeend", html);
            console.log(typeof planet.id);
            let color;
            switch (planet.id) {
              case 0:
                color = "#ffcc00";
                break;
              case 1:
                color = "#6e6e6e";
                break;
              case 2:
                color = "#e6ccb2";
                break;
              case 3:
                color = "#3399ff";
                break;
              case 4:
                color = "#ff4d4d";
                break;
              case 5:
                color = "#e69966";
                break;
              case 6:
                color = "#d4a373";
                break;
              case 7:
                color = "#cce0ff";
                break;
              case 8:
                color = "#809fff";
            }
            document.querySelector(".planet-div").style.backgroundColor = color;
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
