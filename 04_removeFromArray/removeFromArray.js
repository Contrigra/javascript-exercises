const removeFromArray = function (arr, ...remove) {

    let filteredArr = []

    arr.forEach((item) => {
        if (!remove.includes(item)) {
            filteredArr.push(item)
        }
    })
    return filteredArr;

};

arr = [1, 2, 3, 4]
console.log(removeFromArray(arr, "1", 3))


// Do not edit below this line
module.exports = removeFromArray;
