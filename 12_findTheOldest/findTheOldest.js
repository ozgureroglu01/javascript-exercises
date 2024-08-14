const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    let oldest = people[0];
    people.forEach((person) => {
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth;
        }
        if (age > (oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth)) {
            oldest = person;
        }
    });
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
