var student1 = {
    id: 1, 
    name: 'shahed', 
    city: 'comilla', 
    dept: 'BGE', 
    session: '2019-2020'
};
// console.log(student1);
// console.log(student1.session)

// set a property in a object
student1.city = 'chittagong';
student1.id = 30;
console.log(student1)


// different ways to set a new value in a object property

// first way
student1.session = '2020-2021';
// console.log(student1)

// second way
student1["session"] = '2021-2022';
// console.log(student1)

// third way
var changedSession = "session";
student1[changedSession] = '2022-2023';
//// console.log(student1)//

