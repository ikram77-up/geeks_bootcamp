
const allBooks = [
    {
    title : "Yürek Çikmazi",
    author :"Atike Hinçlier",
    image : "https://r2.1k-cdn.com/sig/size:640/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F568685_48c88_1581265411.jpg",
    alreadyRead : false,
    },
    {
    title : "les miserablesi",
    author :"Victor hugo",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1BAfzCxikESLW0Ix-EtTnAcLmGgjQeUISQU_ylsxBEjK0Nh3M1Fy9GuyMYSb4zraSgo&usqp=CAU",
    alreadyRead : true,
    }
]

const sec = document.querySelector(".listBooks");
let divs = document.createElement("div");
divs.textContent = "voici les romans a lire ";
console.log(divs.outerHTML);
sec.appendChild(divs);
console.log(sec.outerHTML);

allBooks.forEach(function(book){
    let sect = document.querySelector(".listBooks");
    let par = document.createElement("p");
    par.textContent = `${book.title} wrriting by ${book.author}` ;
    sect.appendChild(par);
    let img = document.createElement("img");
    img.src = book.image;
    img.style.width ="100 px";
    sect.appendChild(img);

    if (book.alreadyRead === true) {
        par.style.backgroundColor = "rgb(255,0,0)";
        img.style.backgroundColor = "rgb(255,0,0)";
        
    }else{
        console.log("tu n'a pas lire ce roman malheuresement ")
    }
});


