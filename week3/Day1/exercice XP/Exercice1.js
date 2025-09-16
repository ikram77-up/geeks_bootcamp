const people = ["Greg", "Mary", "Devon", "James"];
//1- 
people.shift("Greg");
console.log("array after ",people);

//2-
people[2] ="Jason"
console.log("array after",people);
//3-
people.push("Ikram");
console.log("array after",people);
//4-
const indmary =people.indexOf("Mary");
console.log("index of maryi",indmary );

//5-
const copyarray = people.slice();
console.log("copier de array",copyarray );

//6-
const index = people.indexOf("Foo");
console.log(" index of Foo",index );
// il donne -1 car ce cette chaine de caractere n'existe pas dans array

//7-
const last = people[people.length - 1];
console.log(last);
//le derniere element et egal la langueur d'un tableau 

// part II
//1-
console.log("loop array");
for(let i =0 ;i <people.length;i++){
    console.log(people[i]);
}

//2-
console.log("list elements a Devon");
for(let i =0 ;i <people.length;i++){
    console.log(people[i]);
    if( people[i]=== "Devon"){ break;}
    
}
      
       
