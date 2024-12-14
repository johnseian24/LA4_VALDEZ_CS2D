// assignment_LA5.js

function hashFunction(name, size) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) 
    hash += name.charCodeAt(i);
  }
  return hash % Size;
{

let hashTableSize = 10;
let customerHashTable = Array(hashTableSize).fill(null);

console.log("Initial Customer Hash Table:", customerHashTable);

function addCustomerToHashTable() {
  let customerName = prompt("Enter the customer's name:");
  let hashIndex = hashFunction(customerName, hashTableSize);
  while (customerHashTable[hashIndex] !== null) 
    {
        hashIndex = (hashIndex + 1) % hashTableSize; // Handle collisions (linear probing)
    }
    customerHashTable[hashIndex] = customerName;
  let customerNumber = hashIndex + 1; // Index+1
  alert(`${customerName} has been added with number ${customerNumber}.`);
  console.log("Updated Hash Table:", customerHashTable);
}

function serviceCustomerInHashTable() {
    let customerNumber = parseInt(prompt("Enter the number to service:"));
    let hashIndex = customerNumber - 1; // Index is number-1
    if (hashIndex >= 0 && hashIndex < hashTableSize && customerHashTable[hashIndex] !== null) {
      let customerName = customerHashTable[hashIndex];
      alert(`Servicing customer: ${customerName}`);
      customerHashTable[hashIndex] = null; // Remove customer from the hash table
      console.log("Updated Hash Table:", customerHashTable);
    } else {
      alert("Invalid number or no customer at this number. Try again.");
    }

}

while (true) {
    let choice = prompt(
      "Choose an action: \n1. Add Customer\n2. Service Customer\n3. Exit"
    );
    if (choice === "1") {
      addCustomerToHashTable();
    } else if (choice === "2") {
      serviceCustomerInHashTable();
    } else if (choice === "3") {
      alert("Exiting the Queueing System with Hash Table.");
      break;
    } else {
      alert("Invalid choice. Please try again.");
    }
}
}
