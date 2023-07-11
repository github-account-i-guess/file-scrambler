const fs = require("fs");
const path = require("path");

const paths = [];
function recurseFolders(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const absPath = path.join(directory, file);
        if (fs.statSync(absPath).isDirectory()) recurseFolders(absPath);
        else paths.push(absPath);
    });
}

recurseFolders('./assets');

function scramble(extension) {
    const relevant = paths.filter(p => p.includes(extension))
    console.log(relevant);

    const scrambled = relevant.slice().sort((a, b) => Math.random() - 0.5);

    relevant.forEach((path, index) => {
        fs.rename(path, scrambled[index], e => {if (e) console.error(e)});
    });
}

scramble(".png")



