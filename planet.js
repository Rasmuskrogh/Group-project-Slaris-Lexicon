// Johan: run once DOM is loaded
window.addEventListener("load", () => {
    // TODO: Check if planets data exist in localStorage

    // Check for active planet in localStorage
    if (!localStorage.getItem("planet")) {
        // If no planet, set a default
        localStorage.setItem("planet", 3);
    }

    // Acquire information about active planet from localStorage
    let activePlanet = parseInt(localStorage.getItem("planet"));
    let planets = JSON.parse(localStorage.getItem("planets"));
    let planet = planets.bodies[activePlanet];

    // Set planet color theme on page
    setColorScheme(activePlanet);

    // Get formatted values for temps and distances
    let tempDay = formatTemp(planet.temp.day);
    let tempNight = formatTemp(planet.temp.night);
    let circumference = formatDistance(planet.circumference);
    let distance = formatDistance(planet.distance);

    // Insert planet info into DOM
    insertPlanetInfo(planet, tempDay, tempNight, circumference, distance);

    // Insert Moons into DOM
    insertMoons(planet);

    // Ensure favorites list exists
    if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", "[]");
    }

    let favorites = JSON.parse(localStorage.getItem("favorites"));

    // Set favorite button text
    setFavoriteButton(favorites, activePlanet);

    // Add eventListener to favorite button
    document
        .querySelector(".favorite__button")
        .addEventListener("click", (e) => {
            if (favorites.includes(activePlanet)) {
                removeFromFavorites(favorites, activePlanet);
            } else {
                addToFavorites(favorites, activePlanet);
            }
            location.reload();
        });
});

// Johan: Set color scheme
const setColorScheme = (planet) => {
    const colors = [
        "#FFD029",
        "#888888",
        "#E7CDCD",
        "#428ED4",
        "#EF5F5F",
        "#E29468",
        "#C7AA72",
        "#C9D4F1",
        "#7A91A7",
    ];

    document.querySelector(".aside--circle1").style.backgroundColor =
        colors[planet];
    document.querySelector(".aside--circle2").style.backgroundColor =
        colors[planet];
    document.querySelector(".aside--circle3").style.backgroundColor =
        colors[planet];

    document.querySelector(".favorite__button").style.backgroundColor =
        colors[planet];
};

// Johan: format distance data
const formatDistance = (distance) => {
    return `${new Intl.NumberFormat("sv-SE").format(distance)} km`;
};

// Johan: format temperature data
const formatTemp = (temp) => {
    return `${temp}C`;
};

// Johan: insert planet info into DOM
const insertPlanetInfo = (
    planet,
    tempDay,
    tempNight,
    circumference,
    distance
) => {
    document.querySelector(".description--name").innerText = planet.name;
    document.querySelector(".description--latin").innerText = planet.latinName;
    document.querySelector(".description--text").innerText = planet.desc;
    document.querySelector(".circumference__p").innerText = circumference;
    document.querySelector(".distance__p").innerText = distance;
    document.querySelector(".max-temp__p").innerText = tempDay;
    document.querySelector(".min-temp__p").innerText = tempNight;
};

// Johan: insert moons info into DOM
const insertMoons = (planet) => {
    const moonsRef = document.querySelector(".main--moons");
    planet.moons.forEach((moon) => {
        const moonRef = document.createElement("p");
        moonRef.innerText = moon;
        moonsRef.appendChild(moonRef);
    });
};

// Johan: set favorite button text in DOM
const setFavoriteButton = (favorites, planet) => {
    if (favorites.includes(planet)) {
        document.querySelector(".favorite__button").innerText =
            "Remove Favorite";
    } else {
        document.querySelector(".favorite__button").innerText = "Add Favorite";
    }
};

// Johan: remove item from favorites list
const removeFromFavorites = (favorites, planet) => {
    let newFavorites = favorites.filter((favorite) => favorite !== planet);
    console.log("Favorites", favorites);
    console.log("newFavorites", newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

// Johan: add item to favorites list
const addToFavorites = (favorites, planet) => {
    let newFavorites = [...favorites, planet];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};
