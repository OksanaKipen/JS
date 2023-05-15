// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a,b) {
    return a*b;
}
console.log(calc(5,8))
// - створити функцію яка приймає масив та виводить кожен його елемент
arrays([5,8,'hi', true])
function arrays(array){
    for (const item of array){
        console.log(`item:${item}`)
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text){
    document.write(`<p>${text}</p>`)
}
paragraf('hello everybody')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        </ul>`)
}
list('wow')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listNew(text, count){
        document.write(`<ul>`);
    for (let i=0; i<count; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listNew('caramba', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrList(array){
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
const listArr = [12,5,8, true, 'some text'];
arrList(listArr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users =[
    {id:1, name: 'Olga', age: 31},
    {id:2, name: 'Sasha', age: 28},
    {id:3, name: 'Oksana', age: 19},
    {id:4, name: 'Petro', age: 41},
    {id:5, name: 'Vlad', age: 11}
]
function usersArr(arr){
    for (const user of arr) {
        document.write(`<div>id:${user.id} name: ${user.name} age: ${user.age}</div>`)
    }
}
usersArr(users)

// - створити функцію яка повертає найменьше число з масиву
const numbers = [5,8,78,56,985,47,0,1]
function minNumber(arr){
    let item = arr[0];
    for (let i=0; i<arr.length; i++){
        if (item > arr[i]){
            item=arr[i]
        }
    }
    return item
}
console.log(minNumber(numbers))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = [1,2,10]
function sumArray(arr){
    let result=0;
    for (let i=0; i<arr.length; i++){
        result += arr[i]
    }
    return result;
}
console.log(sumArray(sum))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    const newIndex = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = newIndex
    return arr
}

console.log(swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH/item.value
        }

    }

}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))