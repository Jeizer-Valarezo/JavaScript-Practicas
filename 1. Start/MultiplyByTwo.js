function multiplyByTwo(number){
    let multipliedN =2;
    function inner(){
        multipliedN =number*multipliedN;
        return multipliedN;
    }
    return inner;
}
console.log(multiplyByTwo(4)());