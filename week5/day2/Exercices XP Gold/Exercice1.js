
async function getdata() {
    try {
        const data = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        if (data.ok) {
            const serchdata = await data.json();
            console.log(serchdata);
            let gifimg = document.createElement("div");
            let img = document.createElement("img");
            if (serchdata.data.length === 0) {
                console.log("error try again");
            } else {
                //pour affichage les gifs alleatoire
                const randomind = Math.floor(Math.random() * serchdata.data.length);

                const gifUrl = serchdata.data[randomind].images.original.url;
                img.src = gifUrl;
                gifimg.appendChild(img);
                document.body.appendChild(gifimg)
            }
        } else {
            console.log("error try again");
        }

    } catch (error) {
        console.log(error);
    }

}
getdata();