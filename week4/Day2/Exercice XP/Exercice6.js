const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
const passedcourse = students.filter(student => student.isPassed);
console.log(passedcourse);

const studentpassedcourse = students.filter(student => student.isPassed)
.forEach(students => console.log(`Good job ${students.name}, you passed the course in ${students.course}`));