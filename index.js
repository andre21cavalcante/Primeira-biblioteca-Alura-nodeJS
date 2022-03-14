import chalk from 'chalk';
import fs from "fs";

function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (_, texto)=> {
        console.log(chalk.green(texto));
    })
}
pegarArquivo("./arquivos/texto1.md");
