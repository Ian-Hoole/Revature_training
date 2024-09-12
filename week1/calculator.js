function basicCalculator(first, second, operator){
    if(operator === "+"){
        return first + second;
    }
    else if(operator == "-"){
        return first - second;
    }
    else if(operator == "*"){
        return first * second;
    }
    else if(operator == "/"){
        return first / second;
    }
    else{
        return null;
    }
}

//console.log(basicCalculator(10, 5, "+")); // should return 15