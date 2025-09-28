let lat1 = document.getElementById("latitude1");
let long1 = document.getElementById("longitude1");

let lat2 = document.getElementById("latitude2");
let long2 = document.getElementById("longitude2");

let boutton = document.getElementById("btn");
let divresultat = document.createElement("div");
document.body.appendChild(divresultat);




async function isVille() {
    try {
        const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1.value}&lng=${long1.value}&date=today&formatted=0`;
        const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2.value}&lng=${long2.value}&date=today&formatted=0`;
        let [promise1, promise2] = await Promise.all([fetch(url1), fetch(url2)]);
        let data = await promise1.json();
        let data2 = await promise2.json();
        const sunrise = new Date(data.results.sunrise).toLocaleTimeString();
        const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString();
        divresultat.innerHTML = `Sunrise Paris : ${sunrise} <br>
             Sunrise New york : ${sunrise2}`;

    } catch (error) {
        divresultat.innerHTML = "Error displaying data";
    }

}
boutton.addEventListener("click", function (event) {
    event.preventDefault();
    { isVille(); }
})