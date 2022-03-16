import chalk from 'chalk';
import fs from "fs";


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? "não há links": arrayResultados;
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há arquivo no caminho"))
}

async function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    }catch (erro){
        trataErro(erro);
    }

}

/*function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => (console.log(chalk.green(texto))))
    .catch((erro) => trataErro(erro))
}*/

/*function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=> {
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto));
    })
}*/

export default pegarArquivo
