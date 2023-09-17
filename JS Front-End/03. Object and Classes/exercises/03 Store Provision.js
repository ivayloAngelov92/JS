function storeProvision(currentStock, orderedStock) {
  let allStock = currentStock.concat(orderedStock);
  let totalStock = {};
  for (let i = 0; i < allStock.length; i += 2) {
   totalStock[allStock[i]]?
   totalStock[allStock[i]] += Number(allStock[i + 1]):
   totalStock[allStock[i]] = Number(allStock[i + 1])
  }
  for(let product in totalStock) {
    console.log(`${product} -> ${totalStock[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
