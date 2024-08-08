// All code made by Johan and Rasmus. Main part with pair programming

// When page is loaded
const loaded = () => {
  window.addEventListener("load", async () => {
    if (!setFavorites()) {
      localStorage.setItem("favorites", "[]");
    }
    if (!checkStorage()) {
      // Acquire API key
      const key = await getKey();
      if (key.error) {
        // TODO: No API key available, inform the user
        console.log("loaded:", key);
      } else {
        // Acquire planets
        const planets = await getPlanets(key);
        if (planets.error) {
          // TODO: No planets available, inform the user
          console.log("loaded:", planets);
        } else {
          // Store planets in localStorage
          localStorage.setItem("planets", planets);
        }
      }
    }
  });
};

// Is there already a favorites list or not?
const setFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? true : false;
};
// Are planets in localStorage?
const checkStorage = () => {
  const planets = localStorage.getItem("planets");
  return planets ? true : false;
};

// Acquire API key
const getKey = async () => {
  try {
    const keyResponse = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      { method: "POST" }
    );
    const keyData = await keyResponse.json();
    return keyData.key;
  } catch (error) {
    return { error: "Could not acquire key from API" };
  }
};

// Acquire planets from API
const getPlanets = async (key) => {
  try {
    const response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      { method: "GET", headers: { "x-zocom": key } }
    );
    data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    return { error: "Could not acquire planets from API" };
  }
};

// Run scripts
loaded();
