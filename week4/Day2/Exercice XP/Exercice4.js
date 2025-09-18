const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const user = users.map(user => `Welcome ${user.firstName}`);
console.log(user);

const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const filtreuser =welcomeStudents.filter(msg => {
    const FirstN =msg.split(' ')[1];
const userfn = users.find(u =>u.firstName === FirstN);
 return userfn && userfn.role === 'Full Stack Resident' ;
});
 console.log(filtreuser);

 const filtusr = users.filter(u => u.role === 'Full Stack Resident').map(u => u.lastName);
    console.log(filtusr);