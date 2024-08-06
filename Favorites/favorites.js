console.log("testing hi!");

const getFavorites = () => {
  //const favorites = localStorage.getItem("favorites");
  const planetArray = JSON.parse(localStorage.getItem("planets"));
  const planets = planetArray.bodies;
  console.log(planets);
  for (planet of planets) {
    console.log(planet.name);
  }
  // console.log(favorites);
  //   for (favorite of favorites) {
  //     console.log(favorite);
  //   for (planet of planets) {
  //     console.log(planet);
  // if (favorite.name === planet.name) {
  //   console.log(favorite.name);
  // }
  // }
  //}
};

getFavorites();
