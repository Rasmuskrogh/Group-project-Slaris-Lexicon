// Johan: run once DOM is loaded
window.addEventListener("load", () => {
    // Set test planet in localStorage
    localStorage.setItem("planet", 2);

    if (localStorage.getItem("planet")) {
        // Acquire information about active planet from localStorage
        let activePlanet = parseInt(localStorage.getItem("planet"));
        let planets = JSON.parse(localStorage.getItem("planets"));
        let planet = planets.bodies[activePlanet];

        // Set planet color theme on page
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
            colors[activePlanet];
        document.querySelector(".aside--circle2").style.backgroundColor =
            colors[activePlanet];
        document.querySelector(".aside--circle3").style.backgroundColor =
            colors[activePlanet];

        document.querySelector(".favourite__button").style.backgroundColor =
            colors[activePlanet];

        // Get formatted values for temp and distance
        let tempDay = formatTemp(planet.temp.day);
        let tempNight = formatTemp(planet.temp.night);
        let circumference = formatDistance(planet.circumference);
        let distance = formatDistance(planet.distance);

        // Insert planet info in DOM
        document.querySelector(".description--name").innerText = planet.name;
        document.querySelector(".description--latin").innerText =
            planet.latinName;
        document.querySelector(".description--text").innerText = planet.desc;
        document.querySelector(".circumference__p").innerText = circumference;
        document.querySelector(".distance__p").innerText = distance;
        document.querySelector(".max-temp__p").innerText = tempDay;
        document.querySelector(".min-temp__p").innerText = tempNight;

        // Moons
        const moonsRef = document.querySelector(".main--moons");
        planet.moons.forEach((moon) => {
            const moonRef = document.createElement("p");
            moonRef.innerText = moon;
            moonsRef.appendChild(moonRef);
        });

        // Insert Planet name in the DOM
    } else {
        console.log("No planet in localStorage");
        // TODO: redirect user back to index page
    }
});

// Johan: format distance data
const formatDistance = (distance) => {
    return `${new Intl.NumberFormat("sv-SE").format(distance)} km`;
};

// Johan: format temperature data
const formatTemp = (temp) => {
    return `${temp}C`;
};
