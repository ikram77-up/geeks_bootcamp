const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretname =" ";
for(let i = 0 ;i < names.length;i ++){
    secretname = secretname + names[i][0].toUpperCase();5
}
secretname = secretname .split('').sort().join('');
 

console.log(" le nom de societe:",secretname);
