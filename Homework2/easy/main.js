"use strict";
const money = 1000,
    income = '500',
    addExpences = 'Интернет, Еда, Коммуналка, Мобильная Связь',
    deposit = false,
    mission = 50000,
    period = 12,
    budgetDay = money / 30;

console.log(typeof money, income, deposit);
console.log(addExpences.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpences.toLowerCase());
console.log(addExpences.split(', '));
console.log(budgetDay);
