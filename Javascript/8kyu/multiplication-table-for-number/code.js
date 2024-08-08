function multiTable(number) {
    let table = '';
    for (let i = 1; i < 11; i++) {
        table += `${i} * ${number} = ${i * number}`;
        if (i < 10) { // Add newline character except for the last line
            table += '\n';
        }
    }
    return table;
}