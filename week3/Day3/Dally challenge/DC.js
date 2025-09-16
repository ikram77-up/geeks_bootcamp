let formulaire = document.getElementById("libform");
let name = document.getElementById("noun");
let adj = document.getElementById("adjective");
let verbinp = document.getElementById("verb");
let per =document.getElementById("person");
let plce = document.getElementById("place");
let btn =  document.getElementById("lib-button");
let storyp = document.getElementById("story");
 btn.addEventListener("click",function(event){ 
    event.preventDefault();
    let nom = name.value.trim();
    let adjct = adj.value.trim();
    let verbinput = verbinp.value.trim();
   let person = per.value.trim();
   let place = plce.value.trim();
    if(nom === "" || adjct === ""  || verbinput === "" ||  person === ""  || place === ""){
       storyp.textContent = "Please fill in all the fields";
       console.log("Please fill in all the fields");
    }else{
          let story = `Once upon a time in ${place}, there was a ${adjct} ${nom}. Every day, ${person} would ${verbinput} . It was a life full of adventure and excitement!`;
    storyp.textContent = story;
    console.log(story);
    }

 });
let bouttonmodifier = document.getElementById("modifierbutton");
bouttonmodifier.addEventListener("click",function()
{
let nom = name.value.trim();
    let adjc = adj.value.trim();
    let verbin = verbinp.value.trim();
   let personne = per.value.trim();
   let lieu = plce.value.trim();
    if(nom === "" || adjc === ""  || verbin === "" ||  personne === ""  || lieu === ""){
         storyp.textContent = "Please fill in all the fields"; 
       console.log("Please fill in all the fields");
    }else{
      let  arry_stories = [
        `Once upon a time in ${lieu}, there was a ${adjc} ${nom}. Every day, ${personne} would ${verbin}.`,
        `${personne} loved the ${adjc} ${nom} so much that every morning in ${lieu} they would ${verbin}!`,
        `In ${lieu}, a ${adjc} ${nom} waited patiently. ${personne} always ${verbin} around it with excitement!`
    ];
    let randomIndex = Math.floor(Math.random() * arry_stories.length);
      let randomStory = arry_stories[randomIndex]; 
      storyp.textContent = randomStory;
      console.log(randomStory);
    }
});