const convertToCelsius = function (x) {
    let celsius = (x - 32) * (5 / 9);

    if (+celsius % 1 === 0) {
        return Math.trunc(celsius);

    }
    return Number(celsius.toFixed(1))
};

const convertToFahrenheit = function (x) {
    let fahrenheit = (x * (9 / 5) + 32);

    if (+fahrenheit % 1 === 0) {
        return Math.trunc(fahrenheit);

    }
    return Number(fahrenheit.toFixed(1));
};
// TODO roudning up to decimal


// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
