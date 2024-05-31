// Define your circular object here
const circular = {};
circular.value = "Hello World";
circular.self = circular;


//best practice
circular = {value: 'Hello World'}
circular.self = circular;

