// 1 Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list.
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  
  const employees = [
    new Employee("Berhe", "developer", 8000),
    new Employee("Hagos", "designer", 6000),
    new Employee("Helen", "developer", 9000),
    new Employee("Chaltu", "manager", 10000),
    new Employee("Brhane", "developer", 8500),
  ];
  
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].position === "developer") {
      employees[i].salary *= 1.1;
    }
  }
  for (let i = 0; i < employees.length; i++) {
    console.log( `Name: ${employees[i].name}, Position: ${employees[i].position}, Salary: ${employees[i].salary}` );
  };
// 2  Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order. 

function productInstock(products){
    return products.filter(product=>product.instock).sort((a,b)=>a.price-b.price)
}
const products=[{name:"Smart phone",price:1200,instock:true},{name:"Laptop",price:16000,instock:true},{name:"TV",price:14000,instock:false},{name:"Car",price:1600000,instock:false},{name:"Tablet",price:16000,instock:true}]
const availableProducts= productInstock(products);
console.log(availableProducts)
//3 Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)
function calculateAverageScoreStudent(grades){
    for(student in grades){
        const scores=grades[student];
        const average=scores.reduce((sum,score)=>sum+score,0)/scores.length;
        if(average>70){
          console.log("pass")
        }
        else{
          console.log("Fail")
        }
        console.log(`${student}: ${average}`);
    }
}
const grades={
    Birhanu:[85,75,65],
    Helen:[95,75,85],
    Hagoes:[67,85,45],
    Rahel:[53,45,64]
};
calculateAverageScoreStudent(grades)

//4 Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. 
function User(username,email,isActive){
    this.username=username;
    this.email=email;
    this.isActive=isActive;
}
const users=[new User("helen_hagos","helenhagoes@gmail.com",true),new User("alem_berhe","berhealem@gmail.com",true),new User("john_hagoes","hagoesjohn@gmail.com",false)]
console.log("Active Users:");
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    console.log(users[i].username);
  }
}
//5You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance". 

const destinations = [
    { name: "USA", distance: 5000, budgetRequired: 1000},
    { name: "England", distance: 800, budgetRequired: 1500 },
    { name: "Israel", distance: 1000, budgetRequired: 2000 },
    { name: "Turkey", distance: 1200, budgetRequired: 2500 },
    { name: "Paris", distance: 900, budgetRequired: 1800}
];
function findDestinations(maxDistance, budget) {
    const availableDestinations = destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= budget
    );
    if (availableDestinations.length > 0){
       return  availableDestinations
    }
    else{
      console.log("No destinations available under your budget and distance")
    }
   
}
const affordableDestinations = findDestinations(1000, 2000);
console.log(affordableDestinations);

