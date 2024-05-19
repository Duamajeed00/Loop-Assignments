// // assignment 1 write a for loop to identify and print all even numbers in an array of integars
// let arrayOfIntegers:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i=0;i<arrayOfIntegers.length;i++){
//     if(i%2==1){
//         continue;
//     }
//     console.log(i)
// }
// // assignment 2 write a for loop to find the sum of the first 10 numbers 
// let sum = 0;
// for(let i = 1;i<=10;i++){
//     sum += i;
// }
// console.log(`The sum of the first ten numbers is:${sum}`)
// console.log("The sum of the first ten numbers is: "+ sum)
// // assignment 3 write a for loop to print the multiplication table for the number of 5 
// for (let i = 1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }
// assignment 4 Write a for loop to print the multiplication table for any number provided by user.
// import inquirer from "inquirer";
// let table = await inquirer.prompt(
//     [
//         {
//             name:"multiply",
//             type:"number",
//             message:"which table you want to print?please provide a number?"
//         }
//     ]
// );
// console.log(table.multiply)
// for (let i = 1; i <= 10; i++){
//     console.log(`${table.multiply} x ${i} = ${table.multiply*i}`)
// }
// assignment 5 Write a for loop to print the multiplication table for a number provided by the user, and also take the end of the table as input from the user.
// import inquirer from "inquirer";
// let factorChart = await inquirer.prompt(
//     [
//         {
//             name:"table",
//             type:"number",
//             message:"Which table you want to print plz provide a number?"
//         },
//         {
//             name:"multiplication",
//             type:"input",
//             message:"plz provide the end number of table?"
//         }
//     ]
// );
// console.log(factorChart.table);
// console.log(`The end number of the table i want is ${factorChart.multiplication}`);
// for (let i = 1;i<=factorChart.multiplication;i++){
//     console.log(`${factorChart.table} x ${i} = ${factorChart.table*i} `)
// }
// assignment 6 Write a for loop to print the elements of an array in reverse.
let myArray = [1, 2, 3, 4, 5, 6, 7];
for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}
// assignment 7 Write a for loop to find the largest number in an array.
// let myArray: number[] = [182, 299, 8, 81, 10];
// let max: number = myArray[0];
// for (let i: number = 1; i < myArray.length; i++) {
//   if (myArray[i] > max) {
//     max = myArray[i];
//   }
// }
// console.log("The largest number in the array is:", max);
// assignment 8 Write a for loop to find the Lowest number in an array.
// let myArray: number[] = [1, 25, 3, 41, 5];
// let min: number = myArray[0];
// for (let i: number = 1; i < myArray.length; i++) {
//   if (myArray[i] < min) {
//     min = myArray[i];
//   }
// }
// console.log("The lowest number in the array is:", min);
// assignment 9 Write a for loop to find a prime number within a range of 1 to 100
// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let div = 2; div <= Math.sqrt(num); div++) {
//       if (num % div === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(num, "is a prime number");
//     }
//   }
let myArrays = [1, 2, 3, 4, 5, 6, 7];
for (let i = myArrays.length; i >= 0; i--) {
    // console.log(myArray.reverse());
}
console.log(myArrays.reverse());
export {};
