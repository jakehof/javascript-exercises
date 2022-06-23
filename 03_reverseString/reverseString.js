const reverseString = function(string) {
    
    let letters = Array.from(string);
    letters.reverse();
    let backwordsString = letters.join('');
    return backwordsString;
};

// Do not edit below this line
module.exports = reverseString;
