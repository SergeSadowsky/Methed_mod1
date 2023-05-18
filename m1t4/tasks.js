{
    // Task 2

    const rain = Math.round(Math.random());
    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!')
    } else {
        console.log('Дождя нет!')
    }

}
  
{
    // Task 3

    const mathValue = Number.parseInt(prompt("Введите кол-во баллов по математике: ").trim());
    const rusValue = Number.parseInt(prompt("Введите кол-во баллов по русскому языку: ").trim());
    const informValue = Number.parseInt(prompt("Введите кол-во баллов по информатике: ").trim());

    const total = mathValue + rusValue + informValue;
    console.log(`Ваш балл: ${total}`);

    if (total >= 265){
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('Вы не поступили. Попробуйте в следующем году.');
    }

}

{
    // Task 4

    const min = 100
    sum = Number.parseFloat(prompt('Введите сумму, которую хотите снять').trim())
    if(sum % min === 0) {
        console.log("Возьмите деньги.");
    } else {
        console.log("Выдача данной суммы невозможна.");
    }
}


