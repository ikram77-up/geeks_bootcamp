const planets =[
    {name: "mercury", color : "#808080",nbrofmoons:0},
    {name: "venus", color : "#FFFFE0",nbrofmoons:0},
    {name: "earth", color : "#0000FF",nbrofmoons:1},
    {name: "mars", color : "#FF0000",nbrofmoons:2},
    {name: "saturn", color : "#F5F5DC",nbrofmoons:274},
    {name: "uranus", color : "#AFEEEE",nbrofmoons:13},
    {name: "neptune", color : "#001a33",nbrofmoons:28},
];
let sec = document.querySelector(".listPlanets");

planets.forEach(planet => {
    let div = document.createElement("div");
    div.classList.add("planet");
    div.textContent = `${planet.name} with number of moons ${planet.nbrofmoons}`;

    for (let i = 0; i < planet.nbrofmoons; i++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    div.appendChild(moon);
}
    
  div.style.backgroundColor = planet.color;
  div.style.left = `${Math.random() * 60}px`;
  div.style.top = `${Math.random() * 60}px`;

sec.appendChild(div);
})

