const loaded = async () => {
    window.addEventListener("load", () => {
        if (!checkStorage()) {
            getPlanets();
        }
    });
};

loaded();

const checkStorage = () => {
    const planets = localStorage.getItem("planets");
    if (planets) {
        return true;
    }
    return false;
};

const getKey = async () => {
    try {
        const keyResponse = await fetch(
            "https://5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
            { method: "POST" }
        );
        console.log(keyResponse);
        const keyData = await keyResponse.json();

        const key = keyData.key;

        return key;
    } catch (error) {
        console.log(error);
        return { error: error };
    }
};

const getPlanets = async () => {
    try {
        const key = await getKey();
        console.log(typeof key);
        if (key.error) {
            throw new Error("Could not get key");
        } else {
            const response = await fetch(
                "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
                { method: "GET", headers: { "x-zocom": key } }
            );
            const planetData = await response.json();
            console.log(planetData);
            return planetData;
        }
    } catch (error) {
        console.log(error);
    }
};
