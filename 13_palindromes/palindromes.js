const palindromes = function (str) {
    let charArray = str.toLowerCase().split("");
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    charArray = charArray.filter((item) => alphanumerical.includes(item));

    const middleIndex = (charArray.length - 1) / 2;
    const firstHalf = charArray.slice(0, Math.floor(middleIndex) + 1).join("");
    const secondHalf = charArray.slice(Math.ceil(middleIndex)).reverse().join("");
    return firstHalf === secondHalf;
};

// Do not edit below this line
module.exports = palindromes;
