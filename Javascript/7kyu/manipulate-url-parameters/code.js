/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter (url, param) {
  url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
  return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
}