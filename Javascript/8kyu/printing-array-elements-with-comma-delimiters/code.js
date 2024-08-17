function printArray(array){
  return array.map(String).join(",");
}


// best practice
function printArray(array){
  return array.join();
}