const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  // toJson(){
  //   return JSON.stringify({id:this.id, age:this.age})
  // } 
  // I couldnot find a way to use toJson in an object.
};
const filteredPerson ={
  id: person.id,
  age: person.age
}


// const json = JSON.stringify(person);
const json = JSON.stringify(filteredPerson);
console.log(json); // Should return: { id: 1, age: 25 }