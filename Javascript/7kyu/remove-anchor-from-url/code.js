function removeUrlAnchor(url){
  return url.indexOf('#')=== -1 ? url : url.substring(0, url.indexOf('#'));
}

//best practice
function removeUrlAnchor(url){
  return url.split('#')[0];
}