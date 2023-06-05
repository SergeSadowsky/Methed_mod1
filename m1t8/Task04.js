// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
//
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

// И несмотря на то, что понятие "Високосный год" появилось в 1582 году

const isLeapYear = (year) => !(year % 4) && (year % 100) || !(year % 400)


const getLeapYears = (n,m) =>{

    if(!Number.isInteger(n)) return null;
    if(!Number.isInteger(m)) return null;

    const arr=[];
    let start, end;

    if(n < m) [start,end] = [n,m];
    else [start,end] = [m,n];

    let year = start;
    let step = 1;
    while(year <= end && (year % 4)){
        year ++;
    };
    step = 4;
    while(year <= end){
        if(isLeapYear(year)) arr.push(year);
        year += step;
    }
    return arr;    
}


console.log('И несмотря на то, что понятие "Високосный год" появилось в 1582 году...');
console.log(getLeapYears(-1988,-2005));
console.log(getLeapYears(1988,2005));
console.log(getLeapYears(15.3,2005));
