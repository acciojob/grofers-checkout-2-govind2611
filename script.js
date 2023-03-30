//your code here
 // Get all the price elements in the table
  const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

  // Initialize a variable to store the total price
  let totalPrice = 0;

  // Loop through each price element and add its value to the total price
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Set the grand total element to the total price
  const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotalElement.textContent = totalPrice.toFixed(2);