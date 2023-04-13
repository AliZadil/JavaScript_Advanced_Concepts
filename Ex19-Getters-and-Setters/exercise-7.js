class Person {
  firstName;
  lastName;
  age;
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirst){
    if(newFirst !== String(newFirst)){
      firstName = String(newFirst);
    }else{
      firstName = newFirst;
    }
  }
  set lastName(newLast){
    if(newLast !== String(newLast)){
      lastName = String(newLast);
    }else{
      lastName = newLast;
    }
  }
  set age(newAge){
    if(newAge < 1){
      age = 1;
    }else if (newAge > 110){
      age = 110;
    }else {
      age = newAge;
    }
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);