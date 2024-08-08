function correctPolishLetters(string) {
    const vowels = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };

    // Replace each Polish letter with its corresponding non-Polish letter
    return string.replace(/[ąćęłńóśźż]/g, match => vowels[match]);
}
