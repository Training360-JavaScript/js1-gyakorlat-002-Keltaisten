/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
// const wholeNumbers = [11,22,33,44,55];
// const brutto = Math.round(wholeNumbers.map(index => index * 1.27));
// const brutto = (item) => item.reduce(item.map(index => index * 1.27);
// Saját és működik
const brutto = (item) => item
    .map(index => Math.round(index * 1.27))
    .reduce((prevValue, currentValue) => prevValue + currentValue);

    // //Működik
    // const brutto = arr => Number(arr.map(item => (item*1.27)).reduce((first, next)=>first+next).toFixed(0))
    // console.log(brutto([10,20,30,50]))

// const numArray = [5,15,25,35];

// const brutto = numArray
//     .map(item => item * 1.27)
//     .reduce((previousNumber, currentNumber) => previousNumber + currentNumber);

// let result = Math.round(brutto);

// console.log(result);
// // console.log(typeof(result));

// Működik
// const brutto = (inputArray) => Math.round(inputArray
//     .map(item => item * 1.27)
//     .reduce((previous, current) => previous + current));