function highAndLow(numbers){
    const numArray = numbers.split(" ").map(Number); // Convert string numbers to actual numbers
    return(Math.max(...numArray) + " " + Math.min(...numArray));
}