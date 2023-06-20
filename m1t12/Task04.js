// Задача #2
//
// Продолжим работу в cart.js из предыдущего урока
//
// Методы объекта cart не должны обращаться к объекту по имени
//
// В объект cart добавьте сеттер setDiscount и свойство discount
//
// Сеттер setDiscount будет принимать promocode
//
// если promocode будет строка METHED,
// то в discount будет добавляться значение 15
//
// если promocode будет строка NEWYEAR,
// то в discount будет добавляться значение 21
//
// метод calculateItemPrice должен учитывать скидку,
// равную процентному значению discount

'use strict';

const cart = {

  // props
  _items: [],
  _count: 0,
  _discount: '',

  // methods
  /**
   * @param {string} promocode
   */
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
  },

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
    this._items.push(item);
    this.increaseCount(quantity);
  },
  // величить количество товаров
  increaseCount(quantity) {
    this._count += quantity;
  },
  // посчитать общую стоимость товаров
  calculateItemPrice() {
    return (this._items.reduce((acc, item) =>
      acc + item.price * item.quantity, 0)) * (100 - this._discount) / 100;
  },
  // очистить корзину
  clear() {
    this._items.length = 0;
    this._count = 0;
    this._discount = 0;
  },
  // распечатать корзину
  print() {
    console.log(JSON.stringify(this._items));
    console.log(`Total quantity: ${this._count}`);
    console.log(`Discount: ${this._discount}%`);
    console.log(`Total price: ${this.totalPrice}`);
  },
};


console.warn('Task 4:');

cart.add('Technics SL-PS650', 250);
cart.print();
cart.add('Mikrotik RB3011', 350, 2);
cart.print();
cart.add('Huawei', 200, 5);
cart.print();

cart.clear();
console.log('METHED');

cart.add('Technics SL-PS650', 250);
cart.print();
cart.add('Mikrotik RB3011', 350, 2);
cart.print();
cart.add('Huawei', 200, 5);
cart.print();
cart.setDiscount = 'METHED';
cart.print();

cart.clear();
console.log('NEWYEAR:');

cart.add('Technics SL-PS650', 250);
cart.print();
cart.add('Mikrotik RB3011', 350, 2);
cart.print();
cart.add('Huawei', 200, 5);
cart.print();
cart.setDiscount = 'NEWYEAR';
cart.print();
