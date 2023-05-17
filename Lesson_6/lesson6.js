// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const text = ['hello world', 'lorem ipsum', 'javascript is cool'];
const stringLength = (strings)=>{
    strings.forEach((str)=>{
        console.log(`${str}:${str.length}`)
    });
};
(stringLength(text))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
upperCase = (...text) =>{
    text.forEach(txt=>console.log(txt.toUpperCase()))
}
upperCase('hello world', 'lorem ipsum', 'javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
lowerCase = (...texts) =>{
    texts.forEach(text => console.log(text.toLowerCase()))
}
lowerCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
)
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
str.replace(' ', '')
console.log(str)

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let arr = stringToArray(strPoem); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (strPoem) => strPoem.split(' ')
let strPoem = 'Ревуть воли як ясла повні';
let word = stringToArray(strPoem)
console.log(word);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
numbers = [10,8,-7,55,987,-1011,0,1050,0];
let map = numbers.map(num => num.toString())
console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    const nums = [11,21,3];
const sortNums = (nums, direction) =>{
    if (direction === 'descending') {
        return nums.sort((a,b)=> b-a);
    }
    else {
        return nums.sort((a,b) => a-b);
    }
}
console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]
// ==========================

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) =>{
    return a.monthDuration-b.monthDuration;
})
console.log(coursesAndDurationArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filter = coursesAndDurationArray.filter(a => a.monthDuration >5)
console.log(filter)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCourses = coursesAndDurationArray.map((course, index) =>{
    return {id: index +1, ...course};
})
console.log(mapCourses)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker