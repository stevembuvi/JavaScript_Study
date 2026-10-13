let person={
    "name":"Alice Kanini",
    "age":21,
    "address": "78, Kinuthia Street",
    is_student:true,
    "my skills":["Cloud","SRE","App Security"]
}
console.log(person)

//dot notation
console.log(person.name)

//bracket notation
console.log(person["my skills"])
console.log(person["is_student"])

//methods
console.log(Object.keys(person)) //(5)['name','age','address','is_student','my skills]
console.log(Object.values(person)) //(5) ['Alice Kanini',21,'78, Kinuthia Street',true,Array(3)]
console.log(Object.entries(person)) //[Array(2),Array(2),Array(2),Array(2),Array(2)]

let person2={
    "name": "Jack",
    "skills": {
        "soft_skills":["Comms"],
        "technical_skills":["JS","Cloud","Platform"]
    },
    experience:["Google","AWS"]
}
console.log(Object.keys(person2)) //

console.log(person2)