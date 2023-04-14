// Worked on it with Andrea //
// class Person {
//   firstName;
//   lastName;
//   age;
//   constructor (firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   set firstName(newFirst){
//     if(newFirst !== String(newFirst)){
//       this.firstName = String(newFirst);
//     }else{
//       this.firstName = newFirst;
//     }
//   }
//   set lastName(newLast){
//     if(newLast !== String(newLast)){
//       this.lastName = String(newLast);
//     }else{
//       this.lastName = newLast;
//     }
//   }
//   set age(newAge){
//     if(newAge < 1){
//       this.age = 1;
//     }else if (newAge > 110){
//       this.age = 110;
//     }else {
//       this.age = newAge;
//     }
//   }
//   get firstName(){
//     return this.firstName;
//   }
//   get lastName(){
//     return this.lastName;
//   }
//   get age(){
//     return this.age;
//   }
//   get fullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);