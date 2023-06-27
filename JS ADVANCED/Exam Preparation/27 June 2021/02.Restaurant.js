class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let actions = [];
        products.forEach((product) => {
            let [productName, productQuantity, productTotalPrice] = product.split(" ");
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += Number(productQuantity);
                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                }
                this.budgetMoney -= productTotalPrice;
                actions.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                actions.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        })
        this.history.push(...actions);
        return actions.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price
            };
            for (let product of neededProducts) {
                let [productName, productQuantity] = product.split(" ");
                this.menu[meal].products[productName] = Number(productQuantity);
            }
            let numMeals = Object.keys(this.menu).length;
            let message = numMeals === 1 ? "1 meal" : `${numMeals} meals`;
            this.history.push(`Great idea! Now with the ${meal} we have ${message} in the menu, other ideas?`);
            return `Great idea! Now with the ${meal} we have ${message} in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let menuItems = [];
            for (let meal in this.menu) {
                menuItems.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return menuItems.join("\n");
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let mealProducts = this.menu[meal].products;
            let canMake = true;
            for (let product in mealProducts) {
                if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < mealProducts[product]) {
                    canMake = false;
                    break;
                }
            }
            if (!canMake) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                let totalPrice = this.menu[meal].price;
                for (let product in mealProducts) {
                    this.stockProducts[product] -= mealProducts[product];
                }
                this.budgetMoney += totalPrice;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${totalPrice}.`;
            }
        }
    }
}



let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
