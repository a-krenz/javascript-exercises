const removeFromArray = function (array, ...items) {
    let arr = array.slice();
    for (const item of items) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
