function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
 }

 //other
 function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

