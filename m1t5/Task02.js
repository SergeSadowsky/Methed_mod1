const getFirstUpLetterStr = (str) => str.length > 0 ? str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase() : str;

console.log(getFirstUpLetterStr('привет Мир'));