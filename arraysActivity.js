//assignment_LA4.js
// Initial Queue of customers
let customerQueue = ["BERT", "PEDRO", "ANGEL", "LITA", "ELEGRE"];
//Display initial queue
console.log("Initial Customer Queue:", customerQueue);
// Function to add a customer to the queue
function addCustomer() {
    let customerName = prompt("Enter the customer's name:");
    customerQueue.push(customerName);
    let customerNumber = customerQueue.length; // Index+1
    alert(`${customerName} has been added to the queue with number ${customerNumber}.`);
    console.log("Updated Queue:",customerQueue);
}
// Function to service a customer
function serviceCustomer() {
    let customerNumber = parseInt(prompt("Enter the number to service:"));
    if (customerNumber > 0 && customerNumber <= customerQueue.length) {
      let customerName = customerQueue[customerNumber - 1];
      alert(`Servicing customer: ${customerName}`);
      customerQueue.splice(customerNumber - 1, 1); // Remove from queue
      console.log("Updated Queue:", customerQueue);
    } else {
      alert("Invalid number. Try again.");
    }
  }
// Main program loop
while (true) {
    let choice = prompt(
      "Choose an action: \n1. Add Customer\n2. Service Customer\n3. Exit");
    if (choice === "1") {
      addCustomer();
    } else if (choice === "2") {
      serviceCustomer();
    } else if (choice === "3") {
      alert("Exiting the Queueing System.");
      break;
    } else {
      alert("Invalid choice. Please try again.");
    }
  }
