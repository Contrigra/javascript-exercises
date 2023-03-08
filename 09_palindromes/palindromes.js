const palindromes = function (s) {
    let cleanString = s.replaceAll(/[^A-Z]/gi, '').toLowerCase()
    let stringArray = cleanString.split('')
    let reversedArray = [...stringArray].reverse()


    return JSON.stringify(stringArray) === JSON.stringify(reversedArray);
};

console.log(palindromes('racecar!'));
// Do not edit below this line
module.exports = palindromes;
