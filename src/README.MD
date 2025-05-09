#  Understanding Object-Oriented Programming (OOP) in TypeScript
---
Object-Oriented Programming (OOP) is a fundamental concept in software engineering, and TypeScript supports it with powerful features like classes, inheritance, encapsulation, access modifiers, and more. Here's a breakdown of OOP concepts in TypeScript with real examples.
---

#  Class and Object
---
A class is a blueprint for creating objects. Each object (or instance) can have properties and methods defined by the class.

---
```ts
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
const cat = new Animal("Persian Bhai", "cat", "meaw meaw");

cat.makeSound(); // Output: The Persian Bhai says meaw meaw
```
---
#  Inheritance in OOP
---
Inheritance allows a class to inherit properties and methods from another class using the extends keyword.
---
``` ts
class Person {
  constructor(public name: string, public age: number, public address: string) {}

  getSleep(hours: number) {
    console.log(`${this.name} will sleep for ${hours} hours`);
  }
}

class Student extends Person {}

class Teacher extends Person {
  constructor(name: string, age: number, address: string, public designation: string) {
    super(name, age, address);
  }

  takeClass(num: number) {
    console.log(`${this.name} will take ${num} classes`);
  }
}

const teacher = new Teacher("Mr. Teacher", 40, "Uganda", "Professor");
teacher.getSleep(6);
```
---
#  Type Guards using typeof and in
---
Type guards help narrow down the type within conditional blocks.

---
```ts
Using typeof
type Alphaneumeric = string | number;

const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
};

console.log(add("2", "3")); // Output: 23
Using in
ts
Copy code
type NormalUser = { name: string };
type AdminUser = { name: string; role: "admin" };

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};
```
---

#  Type Guards with instanceof

---

The instanceof operator checks if an object is an instance of a specific class.

---

```ts
class Dog extends Animal {
  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends Animal {
  makeMeaw() {
    console.log("I am mewaing");
  }
}

const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

const getAnimal = (animal: Animal) => {
  if (isDog(animal)) animal.makeBark();
  else if (isCat(animal)) animal.makeMeaw();
  else animal.makeSound();
};
```
---
# Access Modifiers
---
TypeScript provides public, private, and protected access modifiers to control visibility.

---
```ts
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;
  protected _accountNumber: number;

  constructor(id: number, name: string, balance: number, accountNumber: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
    this._accountNumber = accountNumber;
  }

  public addDeposit(amount: number) {
    this._balance += amount;
  }

  public getBalance() {
    return this._balance;
  }
}
```
---
# Getter and Setter
Getters and setters allow controlled access to class properties.

---

```ts
class Account {
  constructor(public readonly id: number, public name: string, protected _balance: number) {}

  set deposit(amount: number) {
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

const account = new Account(1, "Mr. Gorib", 50);
account.deposit = 50;
console.log(account.balance); // Output: 100
```
---
# Statics in OOP
---
Static members belong to the class, not instances. All instances share the same static property.

---
```ts

class Counter {
  static count: number = 0;

  static increment() {
    return ++Counter.count;
  }

  static decrement() {
    return --Counter.count;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3
```
---

# Polymorphism in OOP
---
Polymorphism allows method overriding and flexible behavior based on the object type.

---
```ts
class Person {
  getSleep() {
    console.log("I am sleeping for 8 hours per day");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I am sleeping for 7 hours per day");
  }
}

class Developer extends Person {
  getSleep() {
    console.log("I am sleeping for 6 hours per day");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

getSleepingHours(new Person());
getSleepingHours(new Student());
getSleepingHours(new Developer());

// Shape Example
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getShapeArea = (shape: Shape) => {
  console.log(shape.getArea());
};

getShapeArea(new Circle(10)); // 314.159...
getShapeArea(new Rectangle(10, 20)); // 200
```
---

# Abstraction in OOP
---
Abstraction hides implementation details and enforces method structure using interfaces or abstract classes.

---
```ts
// Interface-based abstraction
interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car1 implements Vehicle1 {
  startEngine(): void {
    console.log("Starting car engine...");
  }

  stopEngine(): void {
    console.log("Stopping car engine...");
  }

  move(): void {
    console.log("Car is moving...");
  }

  test() {
    console.log("Testing method...");
  }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();

// Abstract class-based abstraction
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;

  test() {
    console.log("Test method in abstract class...");
  }
}

class ToyotaCar extends Car2 {
  startEngine(): void {
    console.log("Toyota starting...");
  }
  stopEngine(): void {
    console.log("Toyota stopping...");
  }
  move(): void {
    console.log("Toyota moving...");
  }
}
```
---
# Encapsulation in OOP
---
Encapsulation restricts direct access to class members and protects data using private, protected, and public access modifiers.

---
```ts
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  public addDeposit(amount: number) {
    this._balance += amount;
  }

  private getBalance() {
    return this._balance;
  }

  public getHiddenBalance() {
    return this.getBalance();
  }
}

class StudentAccount extends BankAccount {
  showBalance() {
    // console.log(this.getBalance()); ❌ can't access private method
    console.log(this._balance); // ✅ protected is accessible here
  }
}

const account = new BankAccount(1, "User", 100);
account.addDeposit(50);
console.log(account.getHiddenBalance()); // 150

const studentAcc = new StudentAccount(2, "Student", 200);
studentAcc.showBalance(); // 200
```


