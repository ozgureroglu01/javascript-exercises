const reverseString = function (word) {
    const arr = word.split("");
    arr.reverse();
    const newWord = arr.join("");
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
