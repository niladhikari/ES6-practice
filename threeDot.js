const num1 = [12,23,4,5];
const num2 = [13,24,64,51];
const num3 = [2,3,4,5];

// const fullNum = num1.concat(num2).concat(num3);//old way
const fullNum = [...num1,...num2,...num3]; //new ways that is easy way

console.log(fullNum);

// find maxmum number 

const numbers = [33,6,8,44,16,99,77,88];
const maxmun = Math.max(...numbers);
console.log('Max number is : ',maxmun);
