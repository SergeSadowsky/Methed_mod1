const calculate = (sum, quantity, promo='') => {
    let total = sum;

    if(quantity > 10) total *= 0.97;
    if(total > 30000) {
        total = 30000 + (total - 30000) * 0.85;
    }

    if(promo){
        if(promo==='METHED') total *= 0.9;
        if(promo==='G3H2Z1') {
            if ( total > 2000) total -=500; 
        }
    }
    return total;
}
console.log(calculate(4500,10,''));
console.log(calculate(4500,11,''));
console.log(calculate(45000,11,''));
console.log(calculate(45000,10,'METHED'));
console.log(calculate(45000,11,'G3H2Z1'));