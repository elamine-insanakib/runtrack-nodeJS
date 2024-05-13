var path = require('path');

var file = path.basename('index.js');
console.log("Nom du fichier:", file);

var extension = path.extname('index.js');
console.log("Extension du fichier:", extension);

var display = path.join(__dirname, 'index.js');
console.log("Répertoire parent du fichier:", display);