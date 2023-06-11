const num = [22,33,45,56];
 num[1] = 35
 num.push(77);
 //num = ['hridoy','anik'] element change kora jabe but full array change kora jabe na
console.log(num)

// let variable

let numbers = [22,33,45,56];
numbers[1] = 35
numbers.push(77);
numbers = ['hridoy','anik'] //element change kora jabe and full array change kora jabe 
console.log(numbers)

let sum = 0;
for (let i = 0; i < 10; i++) {  //var er karone loop er bahire oo i er output dekha jay.....kintu let use korle ta loop er bahire jabe na
    
    sum = sum + i;
}
console.log(i) //it is no allow for the let variable...allow for var variable
console.log(sum)