// Crear una función que utilice una expresión regular para identificar si el parametro str que recibe es una dirección MAC o no. Una dirección MAC se compone de 6 pares de caracteres hexadecimales separados por :.

let regexp = /^((\d\d:|[A-F][A-F]:){5}(\d\d|[A-F][A-F]){1})$/i;

console.assert(regexp.test("01:32:54:67:89:AB"), true);
console.assert( regexp.test('0132546789AB') , false); // sin separadores
console.assert( regexp.test('01:32:54:67:89'), false ); // 5 números, deben ser 6
console.assert( regexp.test('01:32:54:67:89:ZZ'), false ) // Las ZZ finales no son hexadecimales