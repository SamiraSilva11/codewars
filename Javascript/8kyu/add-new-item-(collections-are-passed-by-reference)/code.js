function addExtra( listOfNumbers ){
    let newList = listOfNumbers.slice();
    newList.push(13);
    return newList;
}


// best practice

function addExtra( listOfNumbers ){
    return [...listOfNumbers, 13];
}