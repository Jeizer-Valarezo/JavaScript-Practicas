const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
const person2 = person1;
person2.firstName ="Simon";

//El ´firstName´ cambia en las 2 personas debido a que al momento de hacer una copia de un objeto en JavaScript
//JavaScript no hace una copia como tal sino una referencia al objeto base, modificar la referencia hara lo mismo al original.

console.log(person1);
console.log(person2);