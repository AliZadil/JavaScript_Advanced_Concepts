const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {...person1};
person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

/* 
if person2 is changed, when const person2 = person1,
person1.firstName would become "Simon" as well. 
It is because objects are reference types.
*/

console.log(person1);
console.log(person2);