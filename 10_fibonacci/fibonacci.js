const fibonacci = function(position) {
    if(position>=0){
        let newArray = Array(position);
        newArray[0] = 0;
        newArray[1] = 1;

        for (let i = 2; i <= position; i++){
            newArray[i] = newArray[i - 1] + newArray[i - 2];
        }
        return newArray[position];
    } else {return "OOPS"}
};

// Do not edit below this line
module.exports = fibonacci;
