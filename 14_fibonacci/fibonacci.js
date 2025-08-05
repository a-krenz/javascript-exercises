const fibonacci = function (n) {
    n = +n;
    if (n < 0 || isNaN(n)) return "OOPS";

    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
