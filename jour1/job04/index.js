const display = '../../jour1';
const fs = require('fs');
 
var files = fs.readdirSync(display);
console.log("Contenu du répertoire courant :", files);