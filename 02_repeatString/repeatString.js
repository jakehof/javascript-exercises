

const repeatString = function(string, num) {
    let value = '';
    let i = 0;
    if (num < 0) {
        return 'ERROR';
    }
    while (i < num) {
        value += (string);
        i++;
    }
    return value;
    
};

// Do not edit below this line
module.exports = repeatString;
