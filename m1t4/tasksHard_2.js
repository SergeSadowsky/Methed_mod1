// Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 
//
// Налоговая ставка 13% на доход до 15 000 ₽
// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽
// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.
//
// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.

{
    const rate0 = 0.13
    const taxLevel1 = 15000;
    const rate1 = 0.2;
    const taxLevel2 = 50000;
    const rate2 = 0.3;
    const error = 'Вы ввели некорректные данные.';
    const msg = 'Сумма налога: ';
    let tax = 0

    const income = Number.parseFloat(prompt("Введите доход: ").trim());

    if (Number.isFinite(income)){

        if(income > taxLevel2) {
            tax = taxLevel1 * rate0 + (taxLevel2 - taxLevel1) * rate1 + (income - taxLevel2) * rate2;
        } else if (income > taxLevel1) {
            tax = taxLevel1 * rate0 + (income - taxLevel1) * rate1;
        } else {
            tax = income * rate0;
        }

        console.log(msg + tax);
    } else {
        console.log(error);
    }
}