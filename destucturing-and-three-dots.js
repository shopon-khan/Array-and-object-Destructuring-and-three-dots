// array destructuring
const numbers = [4, 9, 95, 50, 45, 12];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [54, 92];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1){
    return [num1, num1 + 4];
}
// const boxed = boxify(4);
const [box1, box2] = boxify(4);
// console.log(box1, box2);

// object Destructuring
const {name, age,id} = {id:2, money:28, name:'Abdur Rahin', age:24};
console.log(name, age);
console.log(name, age);
console.log(name, age);
console.log(name, age,id);

const person =  {id:2, money:28, name:'Abdur Rahin', age:24};
const {money} = person;
// console.log(money);

// create object shortcut
const one = 25;
const two = 30;
const boj = {x:x, y:y};
const obj2 = {one, two};
// console.log(obj2);

// three dots add a new numbers
// numbers.push(56);
const newNumbers = [...numbers,56];
console.log(newNumbers);