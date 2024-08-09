// Render planets
/* function renderPlanets(planets) {
    // Get the navigation element where the planets will be displayed
    const navigation = document.getElementById('planet');
    
    // Clear any existing content in the navigation element
    navigation.innerHTML = '';
    
    // Loop through each planet in the planets array
    planets.forEach(planet => {
        // Create a new div element to represent the planet
        const planetElement = document.createElement('div');
        
        // Add the 'planet' class to the div for styling purposes
        planetElement.classList.add('planet');
        
        // Optional, set the width and height of the div based on the planet's size
        planetElement.style.width = `${planet.size}px`;
        planetElement.style.height = `${planet.size}px`;
        
        // Store the planet's name in a data attribute for easy access
        planetElement.dataset.name = planet.name;
        
        // Add a click event listener to the planet element
        planetElement.addEventListener('click', () => {
            // Redirect to the planet.html page, passing the planet's name as a query parameter
            window.location.href = `planet.html?planet=${planet.name}`;
        });
        
        // Append the planet element to the navigation element
        navigation.appendChild(planetElement);
    });
}

// Run scripts
loaded(); */
