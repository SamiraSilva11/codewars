function well(x){
    let count = x.filter(word => word === "good").length;
    if (count === 0){
      return 'Fail!';
    } else if(count <=2){
      return 'Publish!';
    } else {
      return 'I smell a series!';
    }
}