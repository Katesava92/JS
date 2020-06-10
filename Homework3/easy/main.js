let money = 1000,
    income = '500',
    addExpences = 'Интернет, Еда, Коммуналка, Мобильная Связь',
    deposit = false,
    mission = 50000,
    period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpences.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpences.toLowerCase());
console.log(addExpences.split(', '));
let budgetDay = money / 30;
console.log(budgetDay);

money = prompt('Ваш месячный доход?');
addExpences = prompt('Перечислите возможные рассходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = +money - +amount1 - +amount2;
console.log('Бюджет на месяц: ' + budgetMonth);

period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за: ' + period);

budgetDay = Math.floor(budgetMonth / 30);
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
  


