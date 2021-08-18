import { Console } from "console";

let nome:string = 'Emerson';
let idade:number = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);

const op = require('./op');
let n1:number = 10;
let n2:number = 20;

console.log(`SOMA: ${op.somar(n1,n2)}`);
console.log(`SUBTRAÇÃO: ${op.subtrair(n1,n2)}`);
console.log(`MULTIPLICAÇÃO: ${op.multiplicar(n1,n2)}`);