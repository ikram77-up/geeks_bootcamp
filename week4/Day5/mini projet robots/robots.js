const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

let sec = document.querySelector(".container");
robots.forEach(function (robot) {
    let div = document.createElement("div");
    div.style.backgroundColor = "#41b3a3";
    div.style.borderRadius = "12px";
    div.style.padding = "20px";
    div.style.textAlign = "center";
    div.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    div.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    div.style.fontSize = "14px";
    let par = document.createElement("p");
    par.textContent = robot.name + " " + robot.username + " " + robot.email;
    let img = document.createElement("img");
    img.src = robot.image;
    img.style.width = "120px";
    img.style.height = "120px";
    img.style.borderRadius = "50%";
    img.style.borderColor = "black solid 2px";
    img.style.marginBottom = "15px";

    div.appendChild(img);
    div.appendChild(par);
    sec.appendChild(div);

})
sec.style.display = "grid";
sec.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
sec.style.gap = "20px";
sec.style.justifyContent = "center";
sec.style.padding = "20px";

let rechercher = document.getElementById("search");
rechercher.addEventListener("input", function (event) {
    let val = event.target.value.toLowerCase();
    let divs = sec.querySelectorAll("div");
    divs.forEach(function (div, index) {
        let robot = robots[index];
        if (robot.name.toLowerCase().includes(val) ||
            robot.username.toLowerCase().includes(val) ||
            robot.email.toLowerCase().includes(val)
        ) {
            div.style.display = "grid";
            div.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
            div.style.width = "35%";

        } else {
            div.style.display = "none";
        }
    })

})