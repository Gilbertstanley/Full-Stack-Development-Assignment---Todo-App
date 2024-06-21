class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    displayFunction(){
        console.log(`this is your product ${this.name}`)
            console.log(`this is your price : $ ${this.price}`)
        
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }

}
const salesTax = 0.05

let product1 = new Product("Hoodie",85)
product1.displayFunction()
let total1 = product1.calculateTotal(salesTax)
console.log(`this is your total : $ ${total1}`)

let product2 = new Product("Tee",65)
product2.displayFunction()
let total2 = product2.calculateTotal(salesTax)
console.log(`this is your total : $ ${total2}`)

let product3 = new Product("Hat",25)
product3.displayFunction()
let total3 = product3.calculateTotal(salesTax)
console.log(`this is your total : $ ${total3}`)

function findSecondLargest(nestedArr) {
    // Flatten the nested array to a single level
    const flatArray = nestedArr.flat();
  
    // Remove duplicates to ensure unique second largest value
    const uniqueArray = [...new Set(flatArray)];
  
    // Handle cases with less than two elements or all elements equal
    if (uniqueArray.length < 2) {
      return null;
    }
  
    // Sort the unique array in descending order
    uniqueArray.sort((a, b) => b - a);
  
    // Return the second largest element
    return uniqueArray[1];
  }
  
  // Example usage
  const nestedArr = [[5, 10, 1], [9, 8, 7], [2, 2, 2]];
  const secondLargest = findSecondLargest(nestedArr);
  console.log(secondLargest); // Output: 8
  