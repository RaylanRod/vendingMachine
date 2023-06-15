 const products = [
        { number: 1, price: 2.50, name: "Orange juice" },
        { number: 2, price: 2.00, name: "Soda" },
        { number: 3, price: 3.50, name: "Chocolate snack" },
        { number: 4, price: 2.99, name: "Cookies" },
        { number: 5, price: 1.99, name: "Gummy bears" },
        { number: 6, price: 5.00, name: "Condoms" },
        { number: 7, price: 3.25, name: "Crackers" },
        { number: 8, price: 2.25, name: "Potato chips" },
        { number: 9, price: 1.75, name: "Small snack" },
      ];

      function selectProduct(productNumber) {
        const product = products.find((item) => item.number === productNumber);
        if (!product) {
          alert("Enter a valid product number");
          return;
        }
      const moneyInput = document.getElementById("moneyInput");
      let money = parseFloat(moneyInput.value);

      if (isNaN(money) || money <= 0) {
        alert("Enter a valid amount of money");
        return;
      }
        if (money < product.price) {
          alert("Not enough money for this product");
          return;
        }

        const change = calculateChange(money, product.price);

        const displayElement = document.querySelector(
          ".display");
            displayElement.innerHTML = `
        <div class="product-info">
          <div>
            <span class="product-name">${product.name}</span>
          </div>
          <div>
            <span class="product-price">Price: $${product.price.toFixed(2)}</span>
          </div>
          <div>
            <span class="change-info">Change: $${change}</span>
          </div>
        </div>`;
      }

function calculateChange(money, price) {
  let change = money - price;

  if (change === 0) {
    return change.toFixed(2);
  }

  return change.toFixed(2);
}
