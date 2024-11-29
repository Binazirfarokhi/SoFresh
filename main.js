let count = document.getElementById("count");
// count.innerText = 5;
// first store the data : 
// varialbe is a way to store a data 
// let count = 0; 
// console.log(count);
let btn = document.getElementById("btn");
// btn.addEventListener("click",increment )
// function increment(){
// console.log("you are clicking")
// }
// let lap1 = 34
// let lap2  = 45
// let lap3 = 65
// let sum;
// function summer(){
//    sum = lap1 + lap2 + lap3;
//    console.log(sum)
// }

// invoke or run the function 
// summer()
// let number = 0;
// function calculate(){
// number ++; 


// three times call the function and each time will calculate the previous number and added to the second dtage
// at the end if you add the console.log will help you to calculate all other amount at the same time. 

// calculate();
// calculate();
// calculate();
// console.log(number)


let counter  = 0; 
btn.addEventListener("click", add)
function add(){
    counter = counter +1 ;
    count.innerText = counter;
    console.log(count);
}
let save= document.getElementById("save");
save.addEventListener("click", newSave )
function newSave(){
    // return counter;
    console.log(counter);
}
