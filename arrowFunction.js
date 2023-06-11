//old rules of function declaration

// function doubleIt(num) {
//     return num*2;
// }

//new rules of function declaration

//single value
const doubleIt = num=>num*2;
const result = doubleIt(5);
console.log('Single Value result : ',result);

//multiful value
const addValue = (num1 , num2 = 13)=>num1 + num2;
const result2 = addValue(5);
console.log('Multiful Value result : ',result2);

//empty value
const emptyValue = ()=>5;
const result3 = emptyValue(5);
console.log('Empty Value result : ',result3);

//more work done with multi value

const multiWork = (num1 , num2)=>{
    const sum = num1 + num2;
    const diff = num1 - num2;
    const totalValue = sum * diff;
    return totalValue;
};
const result4 = multiWork(10 , 6);
console.log('Multi work Value result : ',result4);