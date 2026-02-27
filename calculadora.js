// arquivo: calculadora.js
// Executar com: node calculadora.js 5 + 3

// Pegando argumentos da linha de comando
// process.argv[0] = caminho do node
// process.argv[1] = caminho do script
// process.argv[2] em diante = argumentos do usuário

const args = process.argv.slice(2); // Remove os 2 primeiros argumentos

if (args.length < 3) {
    console.log("Uso: node calculadora.js <numero1> <operador> <numero2>");
    console.log("Exemplo: node calculadora.js 10 + 5");
    process.exit(1); // Sai do programa com erro
}

const num1 = parseFloat(args[0]);
const operador = args[1];
const num2 = parseFloat(args[2]);
let resultado;

if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Digite números válidos!");
    process.exit(1);
}

switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log("Erro: Divisão por zero!");
            process.exit(1);
        }
        resultado = num1 / num2;
        break;
    default:
        console.log("Operador inválido! Use +, -, * ou /");
        process.exit(1);
}

console.log(`${num1} ${operador} ${num2} = ${resultado}`);