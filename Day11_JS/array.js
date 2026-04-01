// function demo1(){
//     let number=[1,2,3,4];
//     number.map((value,index)=>{
//         console.log(value,index);
//     })
// }
// demo1()



// const callback=(value,index)=>{
//         console.log(value,index);
//         return value+1;
//     }

// function mapdemo1(){
//     let number=[1,2,3,4];
//     const increment=number.map(callback)
//     console.log(increment);
//     console.log(number);
// }
// mapdemo1()

// function filterDemo(){
//     let number=[1,2,3,4];
//     number.filter((value)=>value%2==0);
//     console.log(number);
// }
// filterdemo1()

//pyramid
function pyramid(){
    let rows=5;
    for(let i=rows;i>=1;i--){
        console.log("*".repeat(i))
    }
}
pyramid();