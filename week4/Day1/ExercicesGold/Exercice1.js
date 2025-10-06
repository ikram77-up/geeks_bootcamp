let landscape = function () {

    let result = "";

    let flat = function (x) {
        for (let count = 0; count < x; count++) {
            result = result + "_";
        }
    }

    let mountain = function (x) {
        result = result + "/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;

}

landscape()
//1- flat(4) x=4 don result est _ quatre fois donc flat(4) va donner "____"
//2- mountain(4) x=4 dans ce code on ajoute un / et un ' 4 fois donc mountain(4) va donner "____/''''" et on ajoute \
// donc mountain(4) va donner "____/''''\"
//pour la derniere flat(4) x=4 donc flat(4) va donner "____/''''\____"
//fonction landscape va donner "____/''''\____"
let landscapes = () => {
    let result = "";

    let flat = (x) => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    };

    let mountain = (x) => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    };

    flat(4);
    mountain(4);
    flat(4);

    return result;
};

console.log(landscapes());