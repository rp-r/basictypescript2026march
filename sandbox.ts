const character='miondd'
console.log(character)

var inputs=document.querySelectorAll('input');
console.log(inputs)

inputs.forEach(el=>{
    console.log(el)
})

let age=30;
let isblack=false;
age=40;
console.log(age);


//We must declare a number 
const circ=(diameter:number)=>{
    return diameter*Math.PI;
}

console.log(circ(3))


//OBJECT AND ARRAY

let names=['lugi','mario','yoshi']

names.push('toad');

console.log(names);
//can not names.push(3) as names is array of string

let mix=['anc',4,6.7];
mix.push(5);

console.log(mix);
//OBJECTS

let person={

    name:'mario',
    age:30,
    belt:'black'
}

console.log(person.name)
//CAN NOT ADD NEW PROPERTY person['study']='Msc';
