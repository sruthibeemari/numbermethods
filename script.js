var family=["mom", "dad", "sis",]
console.log(family);

family[0]="amma"; //modification
console.log(family);

family[3]="grand ma"; //adding new element
console.log(family);

family.length=2;
console.log(family);

family.length=10;
console.log(family);

console.log(family[5]);

var cars={
    name:"BMW",
    price:2336000
}

console.log(cars);
cars.name='audi'         // replacing element in object
console.log(cars);

var a=100;
var a1=a.toString()
console.log(typeof a1,);

var a=958.666;
console.log(parseInt(a));
console.log(parseFloat(a));

var a="sruthi";
console.log(isFinite(a));

var a=123.456;
console.log(a.toFixed(10));
console.log(a.toPrecision(10));

let x=83.980;
let y=x.toExponential(5);
console.log(y);

let str = "123";
let num = Number(str);
console.log(num); // 123






