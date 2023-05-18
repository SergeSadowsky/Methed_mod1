// Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:
//
// 13% на доход до 15 000 ₽
// 20% на доход от 15 000 ₽ до 50 000 ₽
// 30% на доход выше 50 000 ₽
//
// Запросить у пользователя доход и вывести в консоль сумму налога

{
    const rate0 = 0.13
    const taxLevel1 = 15000;
    const rate1 = 0.2;
    const taxLevel2 = 50000;
    const rate2 = 0.3;

    const error = 'Вы ввели некорректные данные.';
    const msg = 'Сумма налога: ';
    let tax = 0;

    const income = Number.parseFloat(prompt("Введите доход: ").trim());

    if (Number.isFinite(income)){

        if(income > taxLevel2) tax = income * rate2;
        else if (income >= taxLevel1) tax = income * rate1;
        else tax = income * rate0;

        console.log(msg + tax);
    } else {
        console.log(error);
    }
}
