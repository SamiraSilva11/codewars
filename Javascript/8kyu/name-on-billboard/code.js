function billboard(name, price = 30) {
    let totalCost = 0;
    for (let i = 0; i < name.length; i++) {
        totalCost += price;
    }
    return totalCost;
}