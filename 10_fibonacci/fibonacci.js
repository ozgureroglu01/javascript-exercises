const fibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    let fibonacci = [1, 1];
    for (let index = 0; index < num - 2; index++) {
        let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextNumber);

    }

    return fibonacci[fibonacci.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
