function findSmallBig(n, m) {
    let smallest, biggest;
    if (n < m) {
        smallest = n;
        biggest = m;
    } else {
        smallest = m;
        biggest = n;
    }

    return [smallest, biggest]
}

const sumAll = function (n, m) {
    // guard
    if (typeof n !== 'number' || typeof m !== 'number' || n < 0 || m < 0) {
        return "ERROR"
    }

    let sum = 0;
    let smallest, biggest;
    [smallest, biggest] = findSmallBig(n, m);

    for (let i = smallest; i <= biggest; i++) {
        sum += i
    }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;
