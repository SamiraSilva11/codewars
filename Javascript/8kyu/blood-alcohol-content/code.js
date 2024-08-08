function bloodAlcoholContent(drinks, weight, sex, time){
    let r = sex === "male" ? 0.73 : 0.66;
    let A = drinks.ounces * drinks.abv;
    let bac = (A * 5.14 / weight * r) - 0.015 * time; 
    return parseFloat(bac.toFixed(4));
}


//best practice
function bloodAlcoholContent(drinks, weight, sex, time){
    return parseFloat(((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));
  }