"use strict";
const income = '500';
const mission = 50000;


// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpences.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');
// console.log(addExpences.toLowerCase());
// console.log(addExpences.split(', '));
// let budgetDay = money / 30;
// console.log(budgetDay);

let money = +prompt('Ваш месячный доход?');
let addExpences = prompt('Перечислите возможные рассходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ' + budgetMonth);

let period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за: ' + period);

let budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay <= 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0) {
    console.log('Что-то пошло не так');
  }
  

const  getExpensesMonth = function(a, b){
  return a + b;
};
let sum = getExpensesMonth(amount1, amount2);
console.log(sum);


const getAccumulatedMonth = function(a, b){
  return a - b;
};
let accumulatedMonth = getAccumulatedMonth(money, sum);
console.log(accumulatedMonth);

const getTargetMonth = function(a, b){
  return a / b;
};