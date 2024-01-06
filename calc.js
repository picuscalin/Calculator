const add =function(a,b){
    return a + b ;
}

const subtract =function(a,b){
    return a - b ;
}

const multiply =function(a,b){
    return a * b ;
}

const divide =function(a,b){
    return a / b ;
}

let firstNum;
let secondNum;
let operator;

function operate(a,b,operator){
    if (operator == "+"){
        add(a,b)
    }
    if (operator == "-"){
        subtract(a,b)
    }
    if (operator == "*"){
        multiply(a,b)
    }
    if (operator == "/"){
        divide(a,b)
    }
}

