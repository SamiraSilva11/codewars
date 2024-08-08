function sendMessage(message) {
    const keys = {"1":".,?!","2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz","*":"'-+=","0":" "};
    
    let uppercase = false, prev, out = "";
    message.split("").forEach((e,i,a)=>{
      if((/[a-z]/.test(e) && uppercase) || (/[A-Z]/.test(e) && !uppercase)) {
        uppercase = !uppercase;
        out += "#";
        prev = undefined;
      }
      if(/[0-9*#]/.test(e)) {
        if(prev === e) out += " ";
        out += (e === " ") ? "0" : e+"-";
        prev = undefined;
      }
      else if(/[a-z .,?!'\-+=]/i.test(e)) {
        for(let k in keys) {
          if(keys[k].includes(e.toLowerCase())) {
            if(prev === k) out += " ";
            out += k.repeat(keys[prev = k].indexOf(e.toLowerCase())+1);
            break;
          }
        }
      }
    });
    return out;
  }