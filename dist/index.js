"use strict";
// Basic Types
let id = 5;
let company = 'Horsemaker';
let isPublished = true;
let x = '';
x = 10;
let age;
age = 10;
let ids = [1, 2, 3, 4, 5];
// ids.push('');
let arr = [1, 'hello', true];
// Tuple
let person = [1, 'Yash', true];
// Tuple array
let employee = [
    [1, 'Yash'],
    [2, 'Brad'],
    [3, 'John'],
];
// Union
let pid;
pid = '22';
pid = 22;
// Enum
var DirectionOne;
(function (DirectionOne) {
    DirectionOne[DirectionOne["UP"] = 1] = "UP";
    DirectionOne[DirectionOne["DOWN"] = 2] = "DOWN";
    DirectionOne[DirectionOne["LEFT"] = 3] = "LEFT";
    DirectionOne[DirectionOne["RIGHT"] = 4] = "RIGHT";
})(DirectionOne || (DirectionOne = {}));
console.log(DirectionOne.UP);
console.log(DirectionOne.DOWN);
console.log(DirectionOne.LEFT);
var DirectionTwo;
(function (DirectionTwo) {
    DirectionTwo["UP"] = "UP";
    DirectionTwo["DOWN"] = "DOWN";
    DirectionTwo["LEFT"] = "LEFT";
    DirectionTwo["RIGHT"] = "RIGHT";
})(DirectionTwo || (DirectionTwo = {}));
console.log(DirectionTwo.DOWN);
console.log(DirectionTwo.RIGHT);
// Objects
const userOne = {
    id: 1,
    name: 'Yash',
};
const userTwo = {
    id: 2,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
const addNum = (x, y) => {
    return x + y;
};
console.log(addNum(1, 2));
const log = (message) => {
    console.log(message);
};
log('hello');
const batman = {
    id: 22,
    name: 'Batman',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const yash = new Person(13, 'Yash');
console.log(yash.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empOne = new Employee(3, 'Jill', 'Manager');
console.log(empOne.register());
// Generics
const getArray = (items) => {
    return new Array().concat(items);
};
const numArray = getArray([1, 2, 3, 4]);
const charArray = getArray(['a', 'b', 'c', 'd']);
// numArray.push('hello');
