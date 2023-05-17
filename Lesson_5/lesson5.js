// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRect = (a, b) => a*b;
console.log(sRect(5,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => Math.PI*Math.pow(r,2);
console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCalc = (r,h) => 2*Math.PI*h*r;
console.log(sCalc(6,9))

// - створити функцію яка приймає масив та виводить кожен його елемент
const array = [5,8,15,25];
array.forEach(item => console.log(item))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const pCreat = (text) =>document.write(`<p>${text}</p>`);
    pCreat('Boom')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const listCreat = (text) =>{
        document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
            </ul>`)
}
listCreat('Bada Boom')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const listAdd = (text, count) =>{
        document.write(`<ul>`)
    for (let i = 0; i < count; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listAdd('Monday',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const listArray = [12,5,8, true, 'some text']
listArray.forEach(item => document.write(`<li>${item}</li>`))

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users =[
    {id:1, name: 'Olga', age: 31},
    {id:2, name: 'Sasha', age: 28},
    {id:3, name: 'Oksana', age: 19},
    {id:4, name: 'Petro', age: 41},
    {id:5, name: 'Vlad', age: 11}
]
const usersList = (arr) =>{
    for (const user of arr) {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`)
    }
}
usersList(users)

const usersList1 = arr => {
    arr.forEach(user => {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`);
    });
    return arr;
};
const users1 = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
];
usersList1(users1);


// - створити функцію яка повертає найменше число з масиву
const findMin = arr => Math.min(...arr)
const numbers = [5865, 277, 48, 11, 5, 111, 3, 9, 2]
console.log(findMin(numbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum =[1,2,10]
const addSum = (arr) =>{
        let result = 0;
        for (const num of arr){
            result += num
        }
        return result
}
console.log(addSum(sum))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) =>{
        [arr[index1], arr[index2]] = [arr[index2],arr[index1]]
    return arr;
}
console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
        for (const result of currencyValues){
            if (result.currency === exchangeCurrency){
              return sumUAH/result.value            }
        }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
