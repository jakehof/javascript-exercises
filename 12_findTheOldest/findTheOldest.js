const findTheOldest = function(people) {
    people.sort(function(a, b) {
        const firstAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const secondAge = getAge(b.yearOfBirth, b.yearOfDeath);
        if(firstAge > secondAge){
            return -1;
        } else {return 1;}    
    })
    return people[0];
};

function getAge(birth, death){
    if (!death) {
        death = new Date().getFullYear(); // return current year using Date()
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
