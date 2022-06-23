//Accept array as arg 1, create array from additional args

const removeFromArray = function(array, ...b) {
    console.log(array);
    //iterate through array provided
    for (let i = array.length; i >= 0; i--){
        //for each item in array provided check against each item of b
        for(let j = 0; j < b.length; j++) {
            //if the items match, remove the item from the original array
            
            if (array[i] === b[j]){
                array.splice(i, 1);
                
            }
        } 
        
    }
    return array;
        
    
};

// Do not edit below this line
module.exports = removeFromArray;
