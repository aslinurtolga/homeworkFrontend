HOMEWORK1: Four Operations Calculator (2 numbers one operator)

const num1 = +prompt(`Enter a first number: `);
const operator = prompt(`Enter a operator: `);
const num2 = +prompt(`Enter a second number: `);

if (operator === "+"){
    console.log(num1 + num2);
}else if (operator === "-"){
    console.log(num1 - num2);
}else if (operator === "*"){
    console.log(num1 * num2);
}else if (operator === "/"){
    console.log(num1 / num2);
}

HOMEWORK2 : Write your weekly lesson and activity program in Clarusway, with the switch-case structure of the code that outputs according to the day value entered from the console.

let day = prompt(`Enter a day`);
switch (day) {
  case `Monday`:
    console.log(`In-Class`);
    break;
  case `Tuesday`:
    console.log(`In-Class`);
    break;
  case `Wednesday`:
    console.log(`In-Class`);
    break;
  case `Thursday`:
    console.log(`In-Class`);
    break;
  case `Friday`:
    console.log(`In-Class + Workshop`);
    break;
  case `Saturday`:
    console.log(`Teamwork`);
    break;
  case `Sunday`:
    console.log(`Self-Study`);
    break;
  default:
    console.log(`Wrong day value`);

}

HOMEWORK3: We want to raise 50% for those whose salary is less than the minimum wage, and 10% for those whose salary is more.

let minimumwage = 5500;
let salary = +prompt(`Enter a your salary`);

if (salary > minimumwage) {
    console.log(`your salary increased by 10%, new amount is ${(salary*1.1).toFixed(2)}`);
}else {
    console.log(`your salary increased by 50%, new amount is ${(salary*1.5).toFixed(2)}`);
}

HOMEWORK4: Credit Risk Program
Receives the income and expense amount of the person from the console
If the income of the person is at least as much as the minimum wage, the loan can be given 🤑
Otherwise no credits 🥺
Write the code that outputs // using the ternary statement.

const income = +prompt(`enter your income:`);
const expense = +prompt(`enter your expense:`);

const result = (income >= expense + 5500) ? `your loan is approved` : `your loan is not approved`

console.log(`${result}`);
