const removeFromArray = function (arr, ...theArgs) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (theArgs.includes(arr[i]) === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
