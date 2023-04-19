// Basic Types
let id: number = 5;
let company: string = 'Horsemaker';
let isPublished: boolean = true;
let x: any = '';
x = 10;
let age: number;
age = 10;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('');
let arr: any[] = [1, 'hello', true];

// Tuple
let person: [number, string, boolean] = [1, 'Yash', true];
// Tuple array
let employee: [number, string][] = [
  [1, 'Yash'],
  [2, 'Brad'],
  [3, 'John'],
];

// Union
let pid: string | number;
pid = '22';
pid = 22;

// Enum
enum DirectionOne {
  UP = 1,
  DOWN,
  LEFT,
  RIGHT,
}

console.log(DirectionOne.UP);
console.log(DirectionOne.DOWN);
console.log(DirectionOne.LEFT);

enum DirectionTwo {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

console.log(DirectionTwo.DOWN);
console.log(DirectionTwo.RIGHT);

// Objects
const userOne: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Yash',
};

type User = {
  id: number;
  name: string;
};

const userTwo: User = {
  id: 2,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId: number = cid as number;

// Functions
const addNum = (x: number, y: number): number => {
  return x + y;
};
console.log(addNum(1, 2));

const log = (message: string | number): void => {
  console.log(message);
};

log('hello');

// Interfaces
interface SuperheroInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const batman: SuperheroInterface = {
  id: 22,
  name: 'Batman',
};

// batman.id = 34;

type Point = number | string;
// interface Point = number | string;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const yash = new Person(13, 'Yash');
console.log(yash.register());

// Subclasses
interface EmployeeInterface extends PersonInterface {
  position: string;
}

class Employee extends Person implements EmployeeInterface {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const empOne = new Employee(3, 'Jill', 'Manager');
console.log(empOne.register());

// Generics
const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

const numArray = getArray<number>([1, 2, 3, 4]);
const charArray = getArray<string>(['a', 'b', 'c', 'd']);

// numArray.push('hello');
