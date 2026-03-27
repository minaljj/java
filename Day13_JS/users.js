const users=[
    {name:'A',role:"Admin"},
     {name:'C',role:'user'},
      {name:'B',role:'Admin'}

];

const freq=users.reduce((result,user)=>{
    result[user.role]=(result.user[role] || 0)+1;
    return result;

},{});
console.log(freq);

