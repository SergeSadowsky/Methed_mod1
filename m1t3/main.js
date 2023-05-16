"use strict";
{
  let title = "Technics SL-1200GR";
  let quantity = 33;
  let category = "Turntables";
  let price = 1200;

  console.log(`Наименование: ${title}`);

  // additional
  let total = quantity * price;
  console.log(`Общая сумма: ${total}`);
}


{
  let title = "Marantz PM6007";
  let quantity = 3;
  let category = "Integrated Amplifiers";
  let price = 2200;

  console.log(`Наименование: ${title}`);

  // additional
  let total = quantity * price;
  console.log(`Общая сумма: ${total}`);
}

{
  const title = prompt("Введите наименование товара: ");
  const quantity = Number.parseFloat(prompt("Введите кол-во: ").trim());
  const category = prompt("Введите категорию товара: ");
  const price = Number.parseFloat(prompt("Введите стоимость: ").trim());

  console.log(`${title} - ${typeof title}`);
  console.log(`${quantity} - ${typeof quantity}`);
  console.log(`${category} - ${typeof category}`);
  console.log(`${price} - ${typeof price}`);

  console.log(`на складе ${quantity} еденицы товара ${title} на сумму ${quantity*price} оловянных`)
  
}
