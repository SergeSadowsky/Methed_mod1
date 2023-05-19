// Напишите функцию isPrime.
// Она принимает число и возвращает true, если число является простым, а в ином случае false. 
//

const isPrime = x => {
    let set = new Set([1,2,3,5,7,11]);
    if(set.has(x)) return true;
    if(x > 11){
        if(x % 2 == 0 || x % 5 == 0) return false;

        for(let i=3;i*i<=x;i++)
            if(x%i === 0)
                return false;
        return true;
    }
    return false;    
}

for(let i=1; i<=2000; i++) { console.log(`${i}: ${isPrime(i)}`) };




