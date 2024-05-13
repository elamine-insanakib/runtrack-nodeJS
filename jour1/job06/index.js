const fs = require('fs');

const recupfile = fs.readFileSync('data.txt', 'utf-8');

console.log("Contenu du fichier data.txt :", recupfile);