function stringClean(s) {
    const specialCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return s.split('').filter(char => !specialCharacters.includes(char)).join('');
}
