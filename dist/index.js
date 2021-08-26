"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const op_1 = require("./op");
const validator_1 = __importDefault(require("validator"));
/*import * as op from './op';
import op from './op';  funcionando normalmente*/
let nome = 'Emerson';
let idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
//const op = require('./op');
let n1 = 30;
let n2 = 20;
let name = 'Emerson';
console.log("Primero valor: " + n1 + " Segundo valor: " + n2);
console.log(`SOMA: ${op_1.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${op_1.subtrair(n1, n2)}`);
//console.log(`MULTIPLICAÇÃO: ${op.multiplicar(n1,n2)}`);
console.log(validator_1.default.isEmail('emerson@gmail.com'));
if (validator_1.default.isLowercase(name)) {
    console.log(`A string ${name} é toda minuscula`);
}
else {
    console.log(`A string ${name} NÃO É toda minuscula`);
}
