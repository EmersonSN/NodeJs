import { Console } from "console";
import { somar, subtrair } from './op';
import validator from 'validator';
/*import * as op from './op';
import op from './op';  funcionando normalmente*/

let nome:string = 'Emerson';
let idade:number = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);

//const op = require('./op');
let n1:number = 10;
let n2:number = 20;

console.log("Primero valor: " + n1 +" Segundo valor: "+ n2);
console.log(`SOMA: ${somar(n1,n2)}`);
console.log(`SUBTRAÇÃO: ${subtrair(n1,n2)}`);
//console.log(`MULTIPLICAÇÃO: ${op.multiplicar(n1,n2)}`);

console.log(validator.isEmail('emerson@gmail.com'));