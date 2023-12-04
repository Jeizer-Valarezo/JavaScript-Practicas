function repeatHello(callback){
    let interval =setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(interval);
    }, 6000); 
}


repeatHello(()=> {console.log("Hello")});