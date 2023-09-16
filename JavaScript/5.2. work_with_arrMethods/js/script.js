'use srict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
const getPositiveIncomeAmount = (data) => {
    return data.filter(fund => fund.amount >= 0)
    .reduce((acc, curr) => ((acc.amount || acc) + curr.amount, 0));

};
// console.log(getPositiveIncomeAmount(funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
const getTotalIncomeAmount = (data) => {
    return data.some(fund => fund.amount < 0) ? data.reduce((acc, curr) => ((acc.amount || acc) + curr.amount)) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));