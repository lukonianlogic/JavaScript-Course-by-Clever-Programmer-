food = Number(prompt('how much was the food?'))
tipPercentage = Number(prompt('tip %?' / 100))
tipAmount = (food * tipPercentage);
total = food + (food*tipPercentage);

console.log("food: ", food);
console.log("tip percentage: ", tipPercentage);
console.log("tip amount: ", tipAmount);
console.log("total: ", total);
