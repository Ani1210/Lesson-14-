const myNumbers = [10, 15, 20, 30, 35, 40, 50, 55, 60, 70]

console.log(typeof 'myNumbers');
const sum = (myNumbers[0]+myNumbers[1]+myNumbers[2]+myNumbers[3]+myNumbers[4]+myNumbers[5]+myNumbers[6]+myNumbers[7]+myNumbers[8]+myNumbers[9])/myNumbers.length
console.log(sum);
console.log(myNumbers.length);

const myArr = [  

{ name: "ani",
age: 26 } ,

{
    name: "kristy",
    age: 26
},

{
    name: "mariami",
    age: 26
},

{
    name: "ana",
    age: 26
},

{
    name: "canice",
    age: 25
}
]

console.table(myArr);


const product = {
    productTitle: "iphone 14", 
    productDescription : "example text about product",
    productPrice :4500,
    shopAddresses: [" tbilisi 1 ", " tbilisi 2 "],
    productMemoryInGB: 128,
    productResolution : "1920x1080 px",
};


console.log("Product name is " + product.productTitle + "," , "product price is " + product.productPrice + ",", "product  resolution  is "+ product.productResolution + "," , " and you can buy it at " + product.shopAddresses, );