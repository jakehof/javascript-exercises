const sumAll = function(num1, num2) {
    
    let array = [num1, num2];
    let sum = 0;

    if (typeof array[0] !== 'number'|| typeof array[1] !== 'number'){
        return "ERROR";
    }

    else if (array[0] < 0 || array[1] < 0){
        return "ERROR";
    }

    else {
        
        array = array.sort();
        for(i = array[0]; i <= array[1]; i++){
            sum += i;
        }
        return sum;
    }
}    

// Do not edit below this line
module.exports = sumAll;
