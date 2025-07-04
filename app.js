let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dollar) {
    const usdToEur = dollar / oneEuroIs["USD"];
    const yen = usdToEur * oneEuroIs["JPY"];
    return yen;
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    const yenToEur = yen / oneEuroIs["JPY"];
    const pound = yenToEur * oneEuroIs["GBP"];
    return pound;
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};