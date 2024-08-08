let createMessage = (msg) => m => m ? createMessage(msg + ' ' + m) : msg;


//best practice


function createMessage(str) {
    return function(next){
    if (next === undefined) {return str;}
        return createMessage(str + " "+ next);
    }
}