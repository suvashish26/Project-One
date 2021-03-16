/*function demo(){
for(let i=1; i<=5; i++){
    console.log(i);
}

console.log(i);
}
demo();
// if u use var it is a scope
//let is block scope
*/
let superheroes=[
    {
        name: "thror",
        age:1500,
        planet: "asgard",
        weapons:['mjohir','strombreaker'],
    },
    {
        name: 'Ironman',
        age:47,
        planet: 'Earth',
        weapons:['armour' ,'jarvis', 'friday'],
    },
    {
        name: 'Superman',
        age:34,
        planet: 'Cryptone',
        weapons:[]
    },
];
function display(){
    let rows="";

    for(let i = 0; i<superheroes.length; i++){
        let superhero=superheroes[i];

rows+=`
<tr>
<td>${superhero.name}</td>
<td>${superhero.age}</td>
<td>${superhero.planet}</td>
<td>${superhero.weapons.join(' , ')}</td>
<td>
<button onclick='deleteSuperhero(${i})'>Delete</button>
</td>
</tr>
`;
    }
    document.getElementById('data').innerHTML=rows;
}
display();

function deleteSuperhero(index){
superheroes.splice(index,1);// splice is what helps to cut the element
display();
}
function addSuperhero(){
    let superhero={};// blank object
    superhero.name=document.getElementById('name').value;
    superhero.age= Number(document.getElementById('age').value);
    superhero.planet=document.getElementById('planet').value;
    let weaponsList=document.getElementById('weapons').value;
    superhero.weapons=weaponsList.split(',');
    
    superheroes.push(superhero);
    display();
}




















// use it inside for loop
// rows+="<tr><td>"+superhero.name+"</td><td>"+superhero.age+"</td><td>"+superhero.planet+"</td><td>"+superhero.weapons[0]+"</td></tr>"