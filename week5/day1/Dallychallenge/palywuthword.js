function makeAllCaps(word = []) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(word)) {
            reject("not an array");
        }
        else if (word.every(word => typeof word === "string")) {

            resolve(word.map(word => word.toUpperCase()));
        }
        else {
            reject("not an array of strings");
        }

    });
}
makeAllCaps(["hello", "gunaydin", 12])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["hello", "gunaydin", "selam"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

function sortWords(words = []) {
    return new Promise(function (resolve, reject) {
        if (words.length > 4) {
            resolve(words.sort())
        } else {
            reject("array don't respect length = 4 ")
        }
    })

}
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))