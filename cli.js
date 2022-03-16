import chalk from "chalk";
import pegarArquivo from "./index.js"

const caminho = process.argv;

 async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegarArquivo(caminhoDeArquivo[2]);
    console.log (chalk.yellow("lista de links"), resultado);

}

processaTexto(caminho);
