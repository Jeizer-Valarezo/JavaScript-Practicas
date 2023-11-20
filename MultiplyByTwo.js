function multiplyByTwo(number){
    let multipliedN =0;
    function inner(){
        multipliedN =number*2;
        return multipliedN;
    }
    return inner;
}
console.log(multiplyByTwo(4)());