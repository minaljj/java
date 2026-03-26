// class user{
//     name='Minal';
// }
// const u1=new user();
// console.log(u1.name);

// let i=5;
// let str=i.toString();


// const User1={
//     name:'john',
//     age:10,
//     address:{
//         house:75,
//         street:'sr stay',
//         pin:56060
//     }



// }
// console.log(User1.name);
// //console.log(user1['name']);
// console.log(User1.address.pin);


const user=[
    {"id":1,"name":"A","active":true},
    {"id":1,"name":"B","active":false},
    {"id":1,"name":"C","active":true}
]

console.log[user[0].name];

function countActive(){
  return user.filter((user,index)=>{
    return user.active==true;
  }
);
}
console.log(countActive(user));

console.log(user[0].name);

user.forEach((user)=>{
    //if(user.active===true)
    //     return user.active=false
    // else
    //     return user.active=true
    user.active=!user.active;
        
});
console.log(user);