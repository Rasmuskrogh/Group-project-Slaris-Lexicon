//Made by Rasmus

const addLinksFromPlanets = () => {
  const sun = document.querySelector(".sun");
  const mercury = document.querySelector(".mercury");
  const venus = document.querySelector(".venus");
  const earth = document.querySelector(".earth");
  const mars = document.querySelector(".mars");
  const jupiter = document.querySelector(".jupiter");
  const saturn = document.querySelector(".saturn");
  const uranus = document.querySelector(".uranus");
  const neptune = document.querySelector(".neptune");

  sun.addEventListener("click", (e) => {
    localStorage.setItem("planet", 0);
    window.location.href = "../Planet/planet.html";
  });
  mercury.addEventListener("click", (e) => {
    localStorage.setItem("planet", 1);
    window.location.href = "../Planet/planet.html";
  });
  venus.addEventListener("click", (e) => {
    localStorage.setItem("planet", 2);
    window.location.href = "../Planet/planet.html";
  });
  earth.addEventListener("click", (e) => {
    localStorage.setItem("planet", 3);
    window.location.href = "../Planet/planet.html";
  });
  mars.addEventListener("click", (e) => {
    localStorage.setItem("planet", 4);
    window.location.href = "../Planet/planet.html";
  });
  jupiter.addEventListener("click", (e) => {
    localStorage.setItem("planet", 5);
    window.location.href = "../Planet/planet.html";
  });
  saturn.addEventListener("click", (e) => {
    localStorage.setItem("planet", 6);
    window.location.href = "../Planet/planet.html";
  });
  uranus.addEventListener("click", (e) => {
    localStorage.setItem("planet", 7);
    window.location.href = "../Planet/planet.html";
  });
  neptune.addEventListener("click", (e) => {
    localStorage.setItem("planet", 8);
    window.location.href = "../Planet/planet.html";
  });
};

addLinksFromPlanets();
