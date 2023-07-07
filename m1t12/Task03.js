// Задача #1
//
// Создать объект rectangle, который описывает ширину и
// высоту (свойства width и height) прямоугольника
//
// Объект должен иметь 2 сеттера для записи ширины и высоты
// и два геттера для получения периметра и площади прямоугольника
//
// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"
//
// По умолчанию значения высоты и ширины заданы 5 см

'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get area() {
    return this._width * this._height + 'см';
  },

  set width(value) {
    if (typeof value !== 'number') {
      throw new Error('Значение не является числом!');
    }
    this._width = value;
  },

  set height(value) {
    if (typeof value !== 'number') {
      throw new Error('Значение не является числом!');
    }
    this._height = value;
  },

  get perimetr() {
    return 2 * (this._width + this._height) + 'см';
  },

};

console.warn('Task 3:');

console.log(`Площадь: ${rectangle.area}`);
console.log(`Периметр: ${rectangle.perimetr}`);

try {
  rectangle.width = 12;
} catch (e) {
  console.error(e.message);
}
try {
  rectangle.height = 10;
} catch (e) {
  console.error(e.message);
}

console.log(`Площадь: ${rectangle.area}`);
console.log(`Периметр: ${rectangle.perimetr}`);

