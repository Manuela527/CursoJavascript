/*const fs = require('fs-extra');
const path = require('path');

const readFile = async () => {
    try{
        const filePath = path.resolve(`${__dirname}/archivo.txt`);
        const data = await fs.promises.readFile(filePath,'utf-8');
        console.log(data);

    }catch(error){
        console.log(error);
    }
}
readFile()

// Este código es para escribir un archivo 

const writeFile = async (text) => {
    try{
        const filePath = path.resolve(`${__dirname}/archivo1.txt`);
        const data = await fs.promises.writeFile(filePath,text);
        console.log(data);

    }catch(error){
        console.log(error);
    }
}
writeFile('Hello baby')
*/
const fetch = require('./utils/api');
const {fetchApi, gretings} = fetch;

fetchApi('https://rickandmortyapi.com/api/character');
gretings();