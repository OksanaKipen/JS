//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let fruits = ['apple', 'orange', 'peach', 'plum', 'watermelon', 'cherry', 'melon', 'raspberry', 'strawberry', 'pear']
console.log(fruits);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books= {
    title: 'Nemo',
    pageCount: 365,
    genre: 'kids'
}
console.log(books);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books1 = {
    title: 'Misery',
    pageCount: 246,
    genre: 'Horror',
    authors:[
        {name: 'Stiven King'},
        {age: 59}]
}
console.log(books1)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name: 'Oleg',
    username: 'olegkrupa',
    password: 'апропраа'},

    {name: 'Ihor',
    username: 'Ihor123',
    password: 'dddd111'},

    {name: 'Olga',
    username: 'olga123',
    password: 'grh111'},

    {name: 'Rostik',
    username: 'rost',
    password: 'gfrt6'},

    {name: 'Vitalii',
    username: 'vetal',
    password: 'sdfgh'},

    {name: 'Andrii',
    username: 'andi',
    password: 'fdgdhs'},

    {name: 'vasya',
    username: 'vasyl111',
    password: 'ghjgf'},

    {name: 'Olena',
    username: 'olenka555',
    password: '11111fbd'},

    {name: 'Sasha',
    username: 'sasha123',
    password: 'ghrshs123'},

    {name: 'Oksana',
    username: 'oksana111',
    password: 'fhsfhjfg45'},
]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
let x = 10
console.log(x);
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0) {console.log('Вірно')}
else {console.log('Невірно')}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = prompt('Введіть число від 0 до 59')

// (в першу, другу, третю или четверту частину години).
if (time >= 0 && time <= 15) {console.log('в першу')}
else if (time >= 16 && time <=30) {console.log('в другу')}
else if (time >= 31 && time <=45) {console.log('в третю')}
else if (time >= 46 && time <=60) {console.log('в четверту')}
else {console.log('?????')}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Введіть число від 1 до 31')

if (day >= 1 && day <= 10) {console.log('в першу')}
else if (day  >= 11 && day <= 20) {console.log('в другу')}
else if (day >= 21 && day <= 31) {console.log('в третю')}
else {console.log('?????')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('Введіть число дня тижня від 1 до 7')
switch (week){
    case "1":
        console.log('Monday: 9.00 work');
    break
    case "2":
        console.log('Tuesday: 16.00 work, 19.00 study');
        break
    case "3":
        console.log('Wednesday: 9.00 work, 16.30 coffee break');
        break
    case "4":
        console.log('Thursday: 16.00 work, 19.00 study');
        break
    case "5":
        console.log('Friday: 16.00 work, 19.00 study');
        break
    case "6":
        console.log('Saturday: 16.00 work, 19.00 study');
        break
    case "7":
        console.log('Sunday: 16.00 work, 19.00 study');
        break
    default:
        console.log('?????')
}

// - Користувач вводить або має два числа.
let a = +prompt('Введіть перше число')
let b = +prompt('Введіть друге число')

// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
if (a>b || a===b) {console.log(a)}
else if (a<b) {console.log(b)}
else {console.log('?????')}

//- є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній y значення "default"
// якщо значення змінної y являється falsy (хибноподібні, тобто приводиться до false)

let y ='' // хибноподібне значення
y = y ||'default';
console.log(y);

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray)
if (coursesAndDurationArray[0]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {console.log('Супер')} else {console.log('Вчись далі')}
