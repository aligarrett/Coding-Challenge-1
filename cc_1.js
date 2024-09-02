// Task 1: Variables and Data Types

let employeeName = "Ged Deg";
const employeeID = 123;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Microwave", "Toaster", "Kettle"];
const productDetails = {
    inStock: 1234,
    name: products,
    price: 5000.00,   
}

console.log(products, productDetails);


// Task 3: Assignment Operators
let accountBalance = 7292000;
accountBalance += 5000;
console.log("After adding 5000, the account balance is: "+ accountBalance);

accountBalance -= 10000;
console.log("After subtracting 10000, the account balance is: "+ accountBalance);

accountBalance *= 2000;
console.log("After multiplying by 2000, the account balance is:"+ accountBalance);

accountBalance /= 5500;
console.log("After dividing 5500, the account balance is:"+ accountBalance);

accountBalance %= 1500;
console.log("The remainder when the balance is divided by 1500 is:"+ accountBalance);