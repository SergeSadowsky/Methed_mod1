// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения
//

{
    const arr = [];
    for(let i=1; i<=10; i++)
    {
        let str = '';
        let subArray = [];

        for(let j=1; j<=10; j++){
            str += (i**j).toString().padStart(12)
            subArray.push(i**j);
        }
        console.log(str);
        arr.push(subArray);
    }
    console.table(arr);
}