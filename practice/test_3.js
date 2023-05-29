// Створіть клас Rectangle, який має властивості width (ширина) і height (висота). Додайте метод getArea(), який повертає площу прямокутника.
class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        console.log(this.width*this.height);
    }
    }
const sRectangle = new Rectangle(5,6);
sRectangle.getArea();

//     Створіть клас Person, який має властивості name (ім'я) і age (вік). Додайте метод sayHello(), який виводить привітання з ім'ям особи.
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, ${this.name}`)
    }
}
const myName = new Person("Oksana", 33);
myName.sayHello();

//     Створіть клас BankAccount, який має властивості accountNumber (номер рахунку) і balance (баланс рахунку). Додайте методи deposit(amount) для поповнення рахунку і withdraw(amount) для зняття коштів з рахунку.
class BankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance+=amount;
        console.log(`Баланс на рахунку ${this.balance}`);
    }
    withdraw(amount){
        this.balance-=amount
        console.log(`Залишок на рахунку ${this.balance}`)
    }
}
const myAccount = new BankAccount(52365, 336);
myAccount.deposit(10000);
myAccount.withdraw(5000);

//     Створіть клас Product, який представляє товар з властивостями name (назва товару), price (ціна товару) і quantity (кількість одиниць товару). Додайте метод getTotalPrice(), який повертає загальну вартість товару (ціна * кількість).
class Product{
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice(){
        this.totalPrice = this.price*this.quantity;
        console.log(`Загальна вартість товарів: ${this.totalPrice}`);
    }
}
const myTotalPrice = new Product("Pencil", 21, 16);
myTotalPrice.getTotalPrice();

//     Створіть клас Shape, який є базовим класом для інших геометричних фігур. Додайте метод getPerimeter(),
//     який повертає периметр фігури. Потім створіть підкласи Circle, Rectangle і Triangle, які успадковують клас Shape і реалізують відповідні методи для обчислення периметра кожної фігури.
class Shape {
    getPerimeter() {
        return 0;
    }
}
class Circle extends Shape {

    constructor(radius) {
        super()
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangles extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getPerimeter() {
        return 2*(this.width + this.height);
    }
}
class Triangle extends Shape{
    constructor(side1,side2,side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.getPerimeter());
const myRectangle = new Rectangles(10,11);
console.log(myRectangle.getPerimeter());
const myTriangle = new Triangle(12,8,7);
console.log(myTriangle.getPerimeter());

//     Створіть клас Employee, який має властивості name (ім'я працівника), position (посада) і
//     salary (заробітна плата). Додайте метод getAnnualSalary(), який повертає річний дохід працівника (заробітна плата помножена на 12).

class Employee{
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getAnnualSalary(){
        const salaryYear = this.salary*12;
        console.log(`Річний дохід: ${salaryYear}uah`);
    }
}
const employeeIryna = new Employee("Iryna", "Front-end", 21250 );
employeeIryna.getAnnualSalary();