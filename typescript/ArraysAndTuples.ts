
var numList:number[] = [10,20,30,40,50]


/* for (let index = 0; index <numList.length; index++) {
     console.log(numList[index])
 } */

for (const idx in numList) {
    console.log(numList[idx])
}


/* for (const num of numList) {
    console.log(num)
} */


/* function printValue(num:number){
    console.log(num);
}
for(const num of numList){
    printValue(num)
}
 */



 numList.forEach(element=>console.log(element))
    
//Tuples
/*var varArgsArray=[10,20,30,"Satish Mahajan" , 10.34]

varArgsArray.forEach(element => {
    console.log(element)
})*/