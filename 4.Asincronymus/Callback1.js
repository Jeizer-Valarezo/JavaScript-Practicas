function printAsynName(hello, string){
    setInterval(() => {
    hello();
    }, 1000);
}


function hello(){
    console.log("Hello");
}
printAsynName(hello, "Juan")