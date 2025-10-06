let boutton = document.querySelector(".btn");
let boutton1 = document.querySelector(".btn1");
    
async function getdata() {
    try {
        const dataalleatoire = Math.floor(Math.random() * 100) + 1;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${dataalleatoire}`);
        const serchdata = await data.json();
        const pokimon = serchdata.abilities.results;

    } catch (error) {

    }
}