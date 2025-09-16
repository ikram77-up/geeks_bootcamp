const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },

    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
   
}
console.log("numberOfFloors:",building.numberOfFloors);
console.log("appartements dans 1er etage",building.numberOfAptByFloor.firstFloor );
console.log("appartements dans 3eme etage",building.numberOfAptByFloor.thirdFloor);
console.log("name of the second tenant is ",building.nameOfTenants[1]);
console.log("number of rooms in the second tenant is ",building.numberOfRoomsAndRent.dan);

const rentofsarah = building.numberOfRoomsAndRent.sarah;
const rentofdan = building.numberOfRoomsAndRent.dan;
const rentofdavid = building.numberOfRoomsAndRent.david;

if(rentofsarah + rentofdavid > rentofdavid){
    building.numberOfRoomsAndRent.dan[1] =1200;
}
console.log("verification de rent of dan " ,building.numberOfRoomsAndRent.dan);

