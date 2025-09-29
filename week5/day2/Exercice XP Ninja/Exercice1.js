let inp = document.getElementById("text");
let btn = document.getElementById("btn");
let div = document.getElementById("result");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
async function getdata(e) {
    e.preventDefault();
    const search = inp.value.trim();
    if (search === "") {
        console.log("Please enter a search term");
        alert("Please enter a search term");
        div.innerHTML = "";
        return;
    }
    else {
        console.log("recherche", search);
    }

    try {
        const data = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}&rating=g`);
        const serchdata = await data.json();
        console.log(serchdata);
        if (serchdata.data && serchdata.data.images) {
            let gifimg = document.createElement("div");
            let img = document.createElement("img");
            img.src = serchdata.data.images.original.url;
            img.style.width = "300px";
            gifimg.appendChild(img);
            div.style.display = "grid";
            div.style.gridTemplateColumns = "auto auto auto auto";
            div.style.gridGap = "8px";
            div.style.gap = "8px";

            div.appendChild(gifimg);

        } else {
            console.log(`No gif found for "${search}"`);
        }

    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", getdata);

let btn2 = document.createElement("button");
btn2.textContent = "Delete ";
document.body.appendChild(btn2);

btn2.addEventListener("click", function () {
    div.innerHTML = "";
});