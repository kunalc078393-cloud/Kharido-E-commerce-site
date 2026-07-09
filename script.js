let siteName = "Kharido";
console.log(siteName);
console.log("Welcome to " + siteName + "!");

let productName = "Laptop";
let productPrice = 1000;
let stockavilable = true;
console.log("Product Name: " + productName);
console.log("Product Price: " + productPrice);
console.log("Stock Available: " + stockavilable);

let productname = "Camera";
let productprice = 2000;
let stockavilable1 = true;
console.log("Product Name: " + productname);
console.log("Product Price: " + productprice);
console.log("Stock Available: " + stockavilable1);

let productname1 = "car";
let productprice1 = 3000;
let stockavilable2 = true;
console.log("Product Name: " + productname1);
console.log("Product Price: " + productprice1);
console.log("Stock Available: " + stockavilable2);

let productname2 = "tv";
let productprice2 = 4000;
let stockavilable3 = true;
console.log("Product Name: " + productname2);
console.log("Product Price: " + productprice2);
console.log("Stock Available: " + stockavilable3);

let productname3 = "smartwatch";
let productprice3 = 5000;
let stockavilable4 = true;
console.log("Product Name: " + productname3);
console.log("Product Price: " + productprice3);
console.log("Stock Available: " + stockavilable4);

// let discount = productprice3 * 0.1;
// console.log("Discount: " + discount);
// let finalPrice = productprice3 - discount;
// console.log("Final Price: " + productname3 + " is " + finalPrice);

let productprices1=[1000,2000,3000,4000,5000];
for (let i = 0; i < productprices1.length; i++){
    let productname2 = ["laptop", "camera", "car", "tv", "smartwatch"];
    let discount = productprices1[i] * 0.1;
console.log(discount+" is the discount for " + productname2[i]);
let finalPrice = productprices1[i] - discount;
console.log("Final Price: " + productname2[i] + " is " + finalPrice);
}


let productprices=[1000,2000,3000,4000,5000];
for (let i = 0; i < productprices.length; i++) {
    if (productprices[i] > 2000) {
        console.log("product" + (i+1) + " is expensive");
    } else {
        console.log("product" + (i+1) + " is cheap");
    }
}


let userName = "raj";
console.log(userName);

let userAge = 18;
console.log(userAge);

let userEmail = "rajashekharhugar@gmail.com";
console.log(userEmail);

let password = "password123";
console.log(password);
alert("dt77d7");