function correct(text){
    text = text.replace(/5/g, 'S');
    text = text.replace(/0/g, 'O');
    text = text.replace(/1/g, 'I');
  
    return text;
}