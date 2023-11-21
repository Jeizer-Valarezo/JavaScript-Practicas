const person ={
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
};
let keys = Object.keys(person);

let value = Object.values(person);

let entries =Object.entries(person);


for(let entry of entries){
    let [key, val]= entry;
    console.log(key,val);
}