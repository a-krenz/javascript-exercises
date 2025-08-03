const sumAll = function (a, b) {
    if (
        Math.min(a, b) < 0 ||
        typeof b !== "number" ||
        typeof a !== "number" ||
        a % 1 !== 0 ||
        b % 1 !== 0
    ) {
        return "ERROR";
    }
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
