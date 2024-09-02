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

let accountBalance = 77500;
accountBalance += 5000;
console.log("After adding 5000, the account balance is: $"+ accountBalance);

accountBalance -= 10000;
console.log("After subtracting 10000, the account balance is: $"+ accountBalance);

accountBalance *= 20;
console.log("After multiplying by 20, the account balance is: $"+ accountBalance);

accountBalance /= 2;
console.log("After dividing by 2, the account balance is: $"+ accountBalance);

accountBalance %= 20;
console.log("The remainder when the balance is divided by 20 is: $"+ accountBalance);



// Task 4: Comparison Operators

const employeeScore1 = 69;
const employeeScore2 = 96;
console.log("employeeScore1 > employeeScore2:", employeeScore1 > employeeScore2);
console.log("employeeScore1 < employeeScore2:", employeeScore1 < employeeScore2);
console.log("employeeScore1 >= employeeScore2:", employeeScore1 >= employeeScore2);
console.log("employeeScore1 <= employeeScore2:", employeeScore1 <= employeeScore2);
console.log("employeeScore1 === employeeScore2:", employeeScore1 === employeeScore2);
console.log("employeeScore1 !== employeeScore2:", employeeScore1 !== employeeScore2);



// Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;

let canAccessAreaA = hasKeyCard && hasPermission;
console.log("Can access Area A:", canAccessAreaA);

let canAccessAreaB = hasKeyCard || hasPermission;
console.log("Can access Area B:", canAccessAreaB);

let isRestrictedArea = !hasKeyCard;
console.log("Is restricted area (keycard holders denied):", isRestrictedArea);

