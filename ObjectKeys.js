const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25
  };
  
console.log(Object.keys(person).map(key => `${key}: ${person[key]}`).join("\n"));
  