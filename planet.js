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

    // Ensure favourites list exists
    if (!localStorage.getItem("favourites")) {
        localStorage.setItem("favourites", "[]");
    }

    let favourites = JSON.parse(localStorage.getItem("favourites"));

    // Set favourite button text
    setFavouriteButton(favourites, activePlanet);

    // Add eventListener to favourite button
    document
        .querySelector(".favourite__button")
        .addEventListener("click", (e) => {
            if (favourites.includes(activePlanet)) {
                removeFromFavourites(favourites, activePlanet);
            } else {
                addToFavourites(favourites, activePlanet);
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

    document.querySelector(".favourite__button").style.backgroundColor =
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

// Johan: set favourite button text in DOM
const setFavouriteButton = (favourites, planet) => {
    if (favourites.includes(planet)) {
        document.querySelector(".favourite__button").innerText =
            "Remove Favourite";
    } else {
        document.querySelector(".favourite__button").innerText =
            "Add Favourite";
    }
};

// Johan: remove item from favourites list
const removeFromFavourites = (favourites, planet) => {
    let newFavourites = favourites.filter((favourite) => favourite !== planet);
    console.log("Favourites", favourites);
    console.log("newFavourites", newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
};

// Johan: add item to favourites list
const addToFavourites = (favourites, planet) => {
    let newFavourites = [...favourites, planet];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
};
