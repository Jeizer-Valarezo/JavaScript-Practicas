function ageAverage(persons) {
    const sumAge = persons.reduce((sum, person) => sum + person.age, 0);
    return sumAge / persons.length;
  }
const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
const average = ageAverage(persons);
console.log(average); // Output: 20.8
  