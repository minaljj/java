
// function add() {
//     let totalSum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         totalSum += arguments[i];
//     }
//     return totalSum;
// }
// const result = add(3, 4, 5, 7);
// console.log(result);

//----using arrow function

const addAsArrow=(number)=>{
    let totalSum = 0;
    for (let i = 0; i < number.length; i++) {
        const element=number[i];
        totalSum += element;
     }
     return totalSum;
}
console.log(addAsArrow([3,4,5]));