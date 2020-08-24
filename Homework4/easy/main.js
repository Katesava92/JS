"use strict";
const income = '500',
      mission = 50000;

let showTypeOf = function(data){
  console.log(data, typeof(data));
};

const money = +prompt('Ваш месячный доход?'),
    addExpences = prompt('Перечислите возможные рассходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),

    expenses1 = prompt('Введите обязательную статью расходов'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов'),
    amount2 = +prompt('Во сколько это обойдется?');
    
showTypeOf(income);
showTypeOf(money);
showTypeOf(deposit);

console.log(addExpences.split(', '));

const  getExpensesMonth = function(){
  return amount1 + amount2;
};
console.log(getExpensesMonth());


const getAccumulatedMonth = function(){
  return money - getExpensesMonth();
};
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);
  
const getTargetMonth = function(){
  return mission / accumulatedMonth;
};
console.log(getTargetMonth());

const budgetDay = accumulatedMonth / 30;
console.log(budgetDay);


const getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    }  else {
      return ('Что-то пошло не так');
    }
    
};
console.log(getStatusIncome());
