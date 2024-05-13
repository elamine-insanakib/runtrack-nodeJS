const fs = require('fs'); 
fs.readFile('data.txt', 'utf8', function(err, data) {
    const recupfile = data;  
    console.log("Contenu du fichier data.txt :", recupfile);
 });