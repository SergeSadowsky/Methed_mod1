
// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const filter1 = (x,y) => {
    const arr = [...x];

    y.forEach(element => {
        index = arr.indexOf(element)
        if(index != -1) arr.splice(index,1); 
    });

    return arr;
}


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter1(allStudents, failedStudents));