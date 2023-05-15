// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (a,b){
    return a*b;
}
const s = rectangle(10,20)
console.log(s)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){

    return Math.PI*Math.pow(r,2);

}
const s1 = circle(12)
console.log(s1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h,r){
    return 2*Math.PI*h*r;
}
const s2 = cylinder(5,8)
console.log(s2)

// - створити функцію яка приймає масив та виводить кожен його елемент
arrays([41, 152, 39]);
function arrays(array) {
    for (const item of array) {
        console.log(item);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textParagraf(){
    console.log(arguments)
}
textParagraf("текст для параграфа");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listOfItems(text){
    let ul = "<ul>";
        for (let i = 0; i < 3; i++){
            ul += "<li>" + text + "</li>";
        }
        ul+="</ul>";
        return ul;
}
let textContent = 'текст для списку'
list = listOfItems(textContent)
document.write(list)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listWithItems (text, count){
    let ul = "<ul>";
    for (let i = 0; i < count; i++){
        ul += "<li>" + text + "</li>";
    }
    ul += "</ul>";
    return ul;
}
listItemText = 'абабагаламага';
numberOfList = 3;
list2 = listWithItems(listItemText, numberOfList);
document.write(list2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArray(array){
    let list = "<ul>";
    for (let i = 0; i < array.length; i++){
        list += "<li>" + array[i] + "</li>";
    }
    list += "</ul>"
    return list;
}
myarray = [5, "text", 598, "hi", true];
list3 = listArray(myarray);
document.write(list3)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayObj(array){
    for (let i = 0; i < array.length; i++) {
        let object = array[i];
        let block = document.createElement("div");
        block.innerHTML = "id: " + object.id + "<br>name: " + object.name + "<br>age: " + object.age;
        document.body.appendChild(block);
    }
}
let users = [
    {id:1, name: 'Olga', age: 31},
    {id:2, name: 'Sasha', age: 28},
    {id:3, name: 'Oksana', age: 19},
    {id:4, name: 'Petro', age: 41},
    {id:5, name: 'Vlad', age: 11}
]
arrayObj(users)

// - створити функцію яка повертає найменьше число з масиву
const numbers = [526,5,78,36985,45,55,25,4785,145,2];
function minNumberOfArray(array) {
    if (array.length === 0) {
        return null;
    }
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++){
    if (array[i] < minNumber){
        minNumber = array[i]
    }
    }
    return  minNumber;
}

let min = minNumberOfArray(numbers)
console.log(min)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let allSum = 0;
    for (let i =0; i < arr.length; i++){
        allSum += arr[i];
    }
    return allSum;
}
let sumNumbers = [5,458,45896,5,54];
console.log(sum(sumNumbers))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заначення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    if (index1 >=0 && index1<arr.length && index2>=0 && index2<arr.length){
        const newIndex = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = newIndex;
    }
    return arr;
}
let numbersArr = [22,11,33,44];
let resultArr = swap(numbersArr,0,1);
console.log(resultArr)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeRate;
    for (let i=0; i<currencyValues.length; i++){
       if (currencyValues[i].currency===exchangeCurrency){
           exchangeRate=currencyValues[i].value;
           break
       }
    }
    const exchangedAmount = sumUAH / exchangeRate;
    return exchangedAmount.toFixed(2);
}


let sumUAH = 10000;
let currencyValues=[
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
exchangeCurrency = 'USD';
let exchangedAmount = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(exchangedAmount);


// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sRect(a,b){
    return a*b;
}
console.log(sRect(5,8))

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf1(){

    return document.write('<p>text</p>')
}
paragraf1('text');