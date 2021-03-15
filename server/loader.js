const fs = require("fs");

fs.readdir("./server/", (error, files) => {
    if (error) throw error;

    files.forEach((name) => {
        require(`./${name}`);
    });
});