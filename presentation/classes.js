
class Person {
   constructor(name) {
     this.name = name;
   }

   toString() {
     return `${this.name}`;
   }
};

export default Person;

let kongen = new Person("Kongen");

kongen.toString();