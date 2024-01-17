/* let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumPares(numero){
    let suma = 0;
    for(let i = 0; i <= numero.length; i++){
        if(numero[i]%2==0){
            suma= numero[i]+ suma
        }
    }
    return suma;
}
console.log(sumPares(numero)) */

/* const people= [
    { name: 'Mario', age: 32 },
    { name: 'Luigi', age: 28 },
    { name: 'Peach', age: 29 },
    { name: 'Toad', age: 35 }
  ];

function mayorAge (people){
    let mayor;
    mayor =  people[0];
    for(let i =0; i < people.length; i++){
        if(people[i].age>mayor.age){
            mayor = people[i]
        } 
        
    }
    return mayor;
}
console.log(mayorAge(people)); */

function getPage (user){
    return fetch('https://api.github.com/users/'+ user + '/repos')
        .then((data) => data.json())
        .then((data) => data.map(elemento => {
            return elemento.name;
        }))
        
}
getPage("Google")
 .then(data =>console.log(data))