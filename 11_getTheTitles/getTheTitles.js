const getTheTitles = function (objArr) {
    let names = [];
    objArr.forEach((element, index, array) => names.push(element.title));
    return names;
};

// Do not edit below this line
module.exports = getTheTitles;
