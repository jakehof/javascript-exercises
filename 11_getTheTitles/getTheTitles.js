const getTheTitles = function(books) {
    let newArr = [];
    books.forEach(element => {
        console.log(element);
        console.log(element.title);
        newArr.push(element.title);
    });
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
