const palindromes = function (palindrome) {
    let punctuationless = palindrome.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().replace(/\s/g, '');
    console.log(punctuationless);
    let arr = Array.from(punctuationless);
    let reversed = arr.reverse();
    let newString = reversed.join("");
    if(newString === punctuationless){
        return true;
    } else {return false};
};

// Do not edit below this line
module.exports = palindromes;
