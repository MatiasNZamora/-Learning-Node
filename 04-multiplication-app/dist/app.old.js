"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const args_plugins_1 = require("./config/plugins/args.plugins");
// renombrar las variables en la desestructuracion 
const { b: base, l: limit, s: showTable } = args_plugins_1.yarg;
let outputMessage = '';
const headerMessage = `
===============================
      Tabla base ${base}
===============================\n
`;
for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} X ${i} = ${base * i} \n`;
}
outputMessage = headerMessage + outputMessage;
if (showTable) {
    console.log(outputMessage);
}
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);
console.log(`File Created ${base}`);
