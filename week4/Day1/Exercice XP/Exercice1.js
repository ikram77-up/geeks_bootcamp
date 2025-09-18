//#1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
 funcOne()
// fonction renvoyant une valeur de 3
//inside the funcOne function 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// Si la variable est declare avec const au lieu de let,
// on ne peut pas la reassigner dans la fonction funcTwo
// on aura une erreur car on ne peut pas changer la valeur 
// d'une variable declare avec const 
//ici si on met const et on fait a=3 dans funcTwo
// on aura une erreur de type TypeError: Assignment to constant variable.


//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
// funcThree()
//affichage dans la console
//inside the funcThree function 0
//inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// Si la variable est declare avec const au lieu de let,
// on ne peut pas la reassigner dans la fonction funcTwo
// on aura une erreur car on ne peut pas changer la valeur 
// d'une variable declare avec const 
//ici si on met const et on fait a=5 dans funcTwo
// on aura une erreur de type TypeError: Assignment to constant variable.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
//affichage dans la console
//inside the funcFive function hello
//function funcFour() {creer une variable globale a dans l'objet window
// et lui assigne la valeur "hello"
// dans funcFive on affiche la valeur de a

//#4
let b = 1;
function funcSix() {
    let b = "test";
    alert(`inside the funcSix function ${b}`);
}


// #4.1 - run in the console:
funcSix()
//console va afficher inside the funcSix function test 
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Si la variable est declare avec const au lieu de let,
// on ne peut pas la reassigner dans la fonction funcSix
// on aura une erreur car on ne peut pas changer la valeur 
// d'une variable declare avec const 
//ici si on met const et on fait b="test" dans funcSix
// on aura une erreur de type TypeError: Assignment to constant variable.

//#5
let c = 2;
if (true) {
    let c = 5;
    alert(`in the if block ${c}`);
}
alert(`outside of the if block ${c}`);
// #5.1 - run in the console:
//affichage dans la console
//in the if block 5
//outside of the if block 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Si la variable est declare avec const au lieu de let,
// on ne peut pas la reassigner dans le bloc if
// on aura une erreur car on ne peut pas changer la valeur
// d'une variable declare avec const
//ici si on met const et on fait c=5 dans le if
// on aura une erreur de type TypeError: Assignment to constant variable.