const reverseString = function (toReverse) {

    let reversedString = ''
    let stringArr = []
    for (let i in toReverse) {
        stringArr.push(toReverse[i])
    }
    stringArr.reverse()
    for (let i in stringArr) {
        reversedString+= stringArr[i]
    }
    return reversedString;

};


// Do not edit below this line
module.exports = reverseString;
