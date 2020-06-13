"use strict";

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const income = '500',
      mission = 50000;

let showTypeOf = function(data){
  console.log(data, typeof(data));
};

let money,
    addExpences = prompt('Перечислите возможные рассходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1,
    expenses2;

let start = function() {
  do{
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
  
};
start();
    

showTypeOf(income);
showTypeOf(money);
showTypeOf(deposit);

console.log(addExpences.split(', '));

let  getExpensesMonth = function(){

  let sum = 0;

  for (let i = 0; i < 2; i++){

    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов');
    } else if (i === 1) {
      expenses2 = prompt('Введите обязательную статью расходов');
    }    
    do{
      sum = prompt('Во сколько это обойдется?'); // sum += prompt('Во сколько это обойдется?');
    }
    while (!isNumber(sum));
    }

  console.log(sum);
  return sum;
};
let amount = getExpensesMonth();


const getAccumulatedMonth = function(){
  return money - amount;
};
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);
  
const getTargetMonth = function(){
  let target = mission / accumulatedMonth;
  if (target < 0) {
    return ('Цель не будет достигнута');
  } else {
    return ('Цель будет достигнута за ' + target);
  }
};
console.log(getTargetMonth());

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);


let getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600 && budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600 && budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
      return ('Что-то пошло не так');
    } else {
      return ('Что-то пошло не так');
    }
    
};
console.log(getStatusIncome());
