// Создайте файл cart.js, подключите к html-файлу
// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:
//
//     items = пустой массив - это товары
//     totalPrice = 0 - общая стоимость корзины
//     count = 0 - количество товаров
//
//     Далее описание каждого метода
//
//     getTotalPrice()
//     метод возвращает значение свойства totalPrice
//
//     calculateItemPrice()
//     пересчитывает стоимость всей корзины используя метод reduce и записывает
//     значение в totalPrice
//
//     increaseCount()
//     Принимает один параметр(число)
//     Увеличивает свойство count на это число
//
//     add()
//     Принимает три параметра:
//         название товара
//         цену товара
//         количество товара (опциональный параметр, по умолчанию 1 товар)
//     этот метод формирует объект из полученных параметров и добавляет его
//     в свойство items
//     так же вызывает все необходимые методы чтобы свойства count и
//     totalPrice были актуальные
//
//     clear()
//     Очищает полностью нашу корзину, возвращает все значения в изначальные
//
//     print()
//     Выводит в консоль JSON строку из массива items и
//     на следующей строке выводит общую стоимость корзины
//
//     Для проверки работы функционала добавить 3 или более товаров в корзину
//     После вызвать метод print для вывода информации в консоль

'use strict';

{
  const cart = {

    // props
    items: [],
    // totalPrice: 0,
    count: 0,

    // methods
    // получить общую стоимость товаров
    get totalPrice() {
      return this.calculateItemPrice();
    },
    // добавить товар
    add(title, price, quantity = 1) {
      const item = {
        title,
        price,
        quantity,
      };
      this.items.push(item);
      this.increaseCount(quantity);
    },
    // величить количество товаров
    increaseCount(quantity) {
      this.count += quantity;
    },
    // посчитать общую стоимость товаров
    calculateItemPrice() {
      return this.items.reduce((acc, item) =>
        acc + item.price * item.quantity, 0);
    },
    // очистить корзину
    clear() {
      this.items.length = 0;
      this.totalPrice = 0;
      this.count = 0;
    },
    // распечатать корзину
    print() {
      console.log(JSON.stringify(this.items));
      console.log(`Total quantity: ${this.count}`);
      console.log(`Total price: ${this.totalPrice}`);
    },
  };

  cart.add('Technics SL-PS650', 250);
  cart.print();
  cart.add('Mikrotik RB3011', 350, 2);
  cart.print();
  cart.add('Huawei', 200, 5);
  cart.print();

  cart.print();
  cart.clear();
  cart.print();
}


