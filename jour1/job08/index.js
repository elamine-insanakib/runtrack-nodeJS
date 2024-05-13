const fs = require('fs');

const oneletter_ontwo = fs.readFileSync('data.txt', 'utf-8');

let boucle = "";
for (let i = 0; i < oneletter_ontwo.length; i += 2) {
    boucle += oneletter_ontwo[i];
}

console.log(boucle);
