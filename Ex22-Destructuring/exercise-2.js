const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

let [id, firstName, lastName, age] = Object.values(person);

console.log(id, firstName, lastName, age);