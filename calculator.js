const suma = (num1, num2) => +num1 + +num2;

const resta = (minuendo, sustraendo) => +minuendo - +sustraendo;

const division = (dividendo, divisor) => +dividendo / +divisor;

const multiplicacion = (multiplicando, multiplicador)=> +multiplicando * +multiplicador;

module.exports = {
    suma: suma,
    resta: resta,
    division: division,
    multiplicacion: multiplicacion
}