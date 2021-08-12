console.log("Program to demonstrate Class");
const resto =  new Map();

resto.set('name','Nandana Palace');
resto.set('address','Bangalore - BTM' );
resto
.set('categories',['Indian','Chines', 'Maxican'])
.set('type',['Veg','Non-Veg','Alcohol'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'Sorry!!! We are close now');


//console.log(resto.get(true));
let time = 12
console.log(resto.get(time >=resto.get('open') && time <= resto.get('close')));
console.log(resto);
console.log(resto.entries());
console.log(resto.keys());
console.log(...resto);

resto.forEach(element =>
{
    console.log(`using foreach loop ${element}`);    
});