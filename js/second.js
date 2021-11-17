/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

// const checker = (arrayInput, numbers) => {
//     let obj = {exists, index, allElementsAreNumbers, someElementsAreNumbers};
//     exists = arrayInput.some(user => user = numbers);
//     index = arrayInput.findIndex(user => user = numbers);
//     allElementsAreNumbers = arrayInput.every(user => typeof(user) == number);
//     someElementsAreNumbers = arrayInput.some(user => typeof(number) == number);
//     return obj;
// }

const checker = (inputArray, value) => {
    let obj = {
    'exists' : inputArray.some(item => item == value),
    'index' : inputArray.findIndex(item => item == value),
    'allElementsAreNumbers' : inputArray.every(item => typeof(item) == 'number'),
    'someElementsAreNumbers' : inputArray.some(item => typeof(item) == 'number')
};
    return obj;
}