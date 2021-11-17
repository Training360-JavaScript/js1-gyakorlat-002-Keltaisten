/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap
 (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

//jó
// const generateList = (input) =>
//     '<ul>' + input.map(item => '<li>' + item + '</li>').join('') + '</ul>';
//nem jó
// const generateList = arrayOfStrings => arrayOfStrings.reduce((template, item) => template += '<li>${item}</li>', '<ul>') + '</ul>';
//jó
const generateList = arrayOfStrings => arrayOfStrings.reduce((template, item) => template += '<li>' + item + '</li>', '<ul>') + '</ul>';













/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap
 (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/





//ez is jó
// const generateList = stringArray => stringArray
//     .reduce((prev,current) => prev + '<li>' + current + '</li>', '<ul>') + '</ul>';






