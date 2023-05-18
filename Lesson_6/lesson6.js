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
let upperCase = (...text) =>{
    text.forEach(txt=>console.log(txt.toUpperCase()))
}
upperCase('hello world', 'lorem ipsum', 'javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCase = (...texts) =>{
    texts.forEach(text => console.log(text.toLowerCase()))
}
lowerCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
)
const lowerCase1 = ['HELLO', 'LOREM'].map(el => el.toLowerCase());
console.log(lowerCase1);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
const remove = str.trim()
console.log(remove)

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let arr = stringToArray(strPoem); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strPoem = 'Ревуть воли як ясла повні';
const stringToArray = (strPoem) => strPoem.split(' ')
let word = stringToArray(strPoem)
console.log(word);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
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
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
let findAce = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(findAce)
// - всі шістки
let findSix = cards.filter(card => card.value === '6');
console.log(findSix)
// - всі червоні карти
let findRedCards = cards.filter(card => card.color === 'red');
console.log(findRedCards);
// - всі буби
let findDimond = cards.filter(card => card.cardSuit === 'diamond');
console.log(findDimond)

// - всі трефи від 9 та більше
let findClubs = cards.filter(card => ['9', '10', 'jack','queen','king','ace'].includes(card.value)
    && card.cardSuit === 'clubs');
console.log(findClubs)
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
let groupCards = cards.reduce((accumulator, card) =>{
        accumulator[card.cardSuit] = accumulator[card.cardSuit] || [];
        accumulator[card.cardSuit].push(card);
    return accumulator
}, {});
console.log(groupCards)
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є css
let findCss = coursesArray.filter(course => course.modules.includes('css'));
console.log(findCss)

// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(findDocker)