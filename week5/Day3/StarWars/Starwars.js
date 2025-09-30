let div = document.getElementById("card");
let btn = document.getElementById("btn");

btn.addEventListener("click", async function (event) {
    event.preventDefault();

    div.innerHTML = `<i class="fa-solid fa-sync fa-spin text-4xl text-yellow-400"></i><p>Loading...</p>`;


    const randomIndex = Math.floor(Math.random() * 83) + 1;

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${randomIndex}`);
        const data = await response.json();
        const person = data.result.properties;

        let homeworld = "unknown";
        try {
            const homeResponse = await fetch(person.homeworld);
            if (homeResponse.ok) {
                const homeData = await homeResponse.json();
                homeworld = homeData.result.properties.name;
            }
        } catch (err) {
            homeworld = "unknown";
        }

        div.innerHTML = `
            <h2 class="text-xl font-bold mb-4">${person.name}</h2>
            <p class="font-semibold">Height : ${person.height}</p>
            <p class="font-semibold">Gender : ${person.gender}</p>
            <p class="font-semibold">birth year : ${person.birth_year}</p>
            <p class="font-semibold">HOme World : ${homeworld}</p>
        `;
    } catch (error) {
        console.log(error);
        div.innerHTML = `<p class="text-red-500 font-bold">OH NO! that person doesn't exist</p>`;
    }
});
