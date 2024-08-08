function orderFood(list) {
  // Initialize an empty object to store meal counts
  const mealCounts = {};

  // Iterate over each item in the list
  list.forEach(item => {
    // Extract the meal type
    const mealType = item.meal;

    // If the meal type is not already in the object, initialize it
    if (!mealCounts[mealType]) {
      mealCounts[mealType] = 0;
    }

    // Increment the count for the meal type
    mealCounts[mealType]++;
  });

  // Return the object with meal counts
  return mealCounts;
}


//best practices
const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;


function orderFood(list) {
  return list.reduce((acc, x) => {
    acc[x.meal] = (acc[x.meal] || 0) + 1
    return acc
  }, {})
}