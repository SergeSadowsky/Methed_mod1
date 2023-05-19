const getGCD = (x,y) => {

    a = Math.abs(x);
    b = Math.abs(y);

    while (a != 0 && b != 0)
    {
        if (a > b) a %= b;
        else b %= a;
    }
    return a | b;
}

console.log(getGCD(246,30))