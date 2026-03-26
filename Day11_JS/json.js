const json=`[
    {"id":1,"name":"A","active":true},
    {"id":1,"name":"B","active":false},
    {"id":1,"name":"C","active":true}
]`;

const employee={
    name:"ram",salary=3333,
    skills:[{}]
}
const user=JSON.parse(json);
console.log(user[0])

