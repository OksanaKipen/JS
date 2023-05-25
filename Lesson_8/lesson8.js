// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let u1 = new User(1,`Sasha`, `Pavliv`, `atata@gmail.com`, 244232263);
console.log(u1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const listOfUsers = [];
for (let i = 1; i <=10; i++){
    const user = new User(i, `User${i}`, `Surname${i}`, `user${i}@mail.com`, i * 5555);
    listOfUsers.push(user);
}
console.log(listOfUsers)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
const filterUser = listOfUsers.filter(user => user.id% 2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const ascendingUser = listOfUsers.sort((a,b) => a.id - b.id);
    console.log(ascendingUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1, `Petro`, `Buba`, `atata@gmail.com`, `0635554878`, [`pen`, `book`, `pencil`] );
console.log(client1);

// створити пустий масив, наповнити його 10 об'єктами Client
const clientList = [];
const names = ["Vasya", "Sasha", "Kokos", "Vanya", "Ira", "Kiki", "Bob", "Ted", "Kep", "Den"];
const surnames = ["Dodo", "Taraf", "Kre", "Pop", "Baba", "Vyvy", "Seme", "Kekr", "Perg", "Grym"];
const generate = () =>{
    const order = [];
    const products = ["pen", "book", "pencil", "notebook", "marker"];
    const orderLength = Math.floor(Math.random()*3)+1;
    for (let i = 0; i <= orderLength; i++){
        const random = products[Math.floor(Math.random()*products.length)];
        order.push(random);
    }
    return order;
}
    for (let i = 1; i <= 10; i++){
    const clients = new Client(`${i}`, names[i], surnames[i], `email${i+1}@gmai.com`, i+86356591, generate());
    clientList.push(clients);
}
console.log(clientList);

// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClient = clientList.sort((a,b) => a.order.length - b.order.length);


console.log(sortClient)
//

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `иназва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engine} л`);
    };
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Підвищуємо швидкість до ${this.maxSpeed}`);
};

    this.changeYear = function(newValue) {
        this.year += newValue;
        console.log(`змінює рік випуску на ${this.year}`)
    };

    this.addDriver = function(driver, age) {
        this.driver = driver;
        this.age = age;
        console.log(`driver: ${this.driver} - age: ${this.age}`);
    };
}
const carBMW = new Car("BMW", "TTT", 2022, 420, "2.0");
carBMW.info();
carBMW.addDriver("Trent",25);


// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    class Car1 {
        constructor(model, manufacturer, year, maxSpeed, engine) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engine = engine;
        }

        drive1() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info() {
            console.log(`Модель: ${this.model}`);
            console.log(`Виробник: ${this.manufacturer}`);
            console.log(`Рік випуску: ${this.year}`);
            console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
            console.log(`Об'єм двигуна: ${this.engine} л`);
        };
        increaseMaxSpeed(newSpeed) {
            this.maxSpeed += newSpeed;
            console.log(`Підвищуємо швидкість до ${this.maxSpeed}`)
        }
        changeYear(newValue) {
            this.year += newValue;
            console.log(`змінює рік випуску на ${this.year}`)
        }
        addDriver(driver, age) {
            this.driver = driver;
            this.age = age;
            console.log(`driver: ${this.driver} - age: ${this.age}`)
        }
    }

    const carNissan = new Car1("Nissan", "RRR", 2023, 400, 1.2);

carNissan.addDriver("Sem", 28 );
carNissan.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, sizeShoes) {
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes;
    }
}
class Prince{
    constructor(name, age, findSizeShoes) {
        this.name = name;
        this.age = age;
        this.findSizeShoes = findSizeShoes;
    }

    find(cinderellas){
        for (const ella of cinderellas) {

            if (princeTed.findSizeShoes === ella.sizeShoes){
                return ella;
            }
        }
    }

}

const cinderellaList = [];

for (let i = 0; i < 10; i++){
    cinderellaList.push(new Cinderella (`Alisa${i}`, 18+i, 32+i))
}

const princeTed = new Prince(`Ted`, 28, 35);
const result = princeTed.find(cinderellaList);
console.log(result);
