function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(100, 200));


//Arrow Function(Lambda expression)
var calIntrest11 = function (baseAmt, intrestRate) {
    return (baseAmt * intrestRate) / 100;
};
console.log(calIntrest11(15000, 10));
var calIntrest12 = function (baseAmt, intrestRate) {
    return (baseAmt * intrestRate) / 100;
};
console.log(calIntrest12(15000, 10));
var calIntrest13 = function (baseAmt, intrestRate) { return (baseAmt * intrestRate) / 100; };
console.log(calIntrest13(15000, 10));
/*console.log((baseAmt:number,intrestRate:number)=>{
    return (baseAmt*intrestRate)/100;
})*/
