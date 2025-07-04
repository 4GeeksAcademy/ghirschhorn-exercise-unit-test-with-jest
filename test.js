// Importar la función sum del archivo app.js
const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// test("One euro should be 1.07 dollars", function() {
//     // Importo la funcion desde app.js
//     const { fromEuroToDollar } = require('./app.js');

//     // Uso la función como debe ser usada
//     const dollars = fromEuroToDollar(3.5);

//     // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
//     const expected = 3.5 * 1.07;

//     // Hago mi comparación (la prueba)
//     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
// })


//formDollarToYen

test('si tengo 5 USD, el resultado debería ser de 731.31 JPY aproximadamente', () => {
    const result = fromDollarToYen(5);
    expect(result).toBeCloseTo(731.31, 2);
})

test('si son 10 USD, el resultado debería ser aproximadamente de 1462.62 JPY', () => {
    const result = fromDollarToYen(10);
    expect(result).toBeCloseTo(1462.62, 2);
})

test('si son 25 USD, el resultado debería ser aproximadamente de 3656.54 JPY', () => {
    const result = fromDollarToYen(25);
    expect(result).toBeCloseTo(3656.54, 2);
})


//fromEuroToDollar

test('si son 30 EUR, deberían ser aproximadamente 32.1 USD', () => {
    const result = fromEuroToDollar(30);
    expect(result).toBeCloseTo(32.1);
})

test('si son 18 EUR, deberían ser aproximadamente 19.26 USD', () => {
    const result = fromEuroToDollar(18);
    expect(result).toBeCloseTo(19.26, 2);
})


//fromYenToPound

test('si son 400 JPY, deberían ser aprox 2.22 GBP', () => {
    const result = fromYenToPound(400);
    expect(result).toBeCloseTo(2.22, 2);
})

test('si son 200 JPY, deberían ser aprox 1.11 GBP', () => {
    const result = fromYenToPound(200);
    expect(result).toBeCloseTo(1.11, 2);
})