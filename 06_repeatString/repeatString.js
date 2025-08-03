const repeatString = function (str, n) {
    if (n < 0) return "ERROR";
    let repeated = "";
    while (n > 0) {
        repeated += str;
        n--;
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
