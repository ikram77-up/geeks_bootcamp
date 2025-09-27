async function getdata() {
    try {
        const data = await fetch("https://www.swapi.tech/api/starships/9/");
    const starships = await data.json();
    console.log(starships);
    } catch (error) {
        console.log(error);
    }
    
}
getdata()