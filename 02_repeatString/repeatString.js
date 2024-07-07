const repeatString = function (word, repeatTimes) {
    let newWord = "";
    if (repeatTimes < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatTimes; i++) {
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
