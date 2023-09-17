function orders(product, quantity){
    const prices={
        coffee:1.5,
        water:1,
        coke:1.4,
        snacks:2,
    }
    console.log((prices[product]*quantity).toFixed(2));
}

orders("water", 5)