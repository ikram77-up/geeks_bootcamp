function anagram(str1, str2) {

    str1 = str1.replace(/\s+/g, "").toLowerCase();
    str2 = str2.replace(/\s+/g, "").toLowerCase();
    if (str1.length !== str2.length) {
        return `${str1} and ${str2} are not anagrams`;
    } else {
        let stored1 = str1.split("").sort().join("");
        let stored2 = str2.split("").sort().join("");
        return `${stored1} and ${stored2} are anagrams`;

    }

} console.log(anagram("selam", "selma"));
console.log(anagram("The Morse Code", "Here come dots"));
console.log(anagram("Astronomer", "Moon starer"));
console.log(anagram("School master", "The classroom"));