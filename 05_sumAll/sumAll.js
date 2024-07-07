const sumAll = function (a, b) {
    let start = 0;
    let end = 0;
    let sum = 0;
    if (typeof (a) !== "number" || typeof (b) !== "number" || a < 0 || b < 0) {
        return "ERROR";
    }
    else if (a < b) {
        start = a;
        end = b;
    }
    else if (b < a) {
        start = b;
        end = a;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
