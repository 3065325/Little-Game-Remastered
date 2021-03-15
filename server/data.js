const io = require("./server.js").io;

const FPS = 60;
const DT = 1/FPS;

class Player {
    constructor() {
        this.Position = [Math.random()*100, Math.random()*100];
        this.Velocity = [1, 0];

        this.Size = [100, 100];
        this.Color = `hsl(${Math.random()*100}, 100%, 50%)`;
    }
}

// const Players = new Map();
const Players = {};

io.on("connection", (socket) => {
    console.log(`Connected in data.js Socket(${socket.id})`);

    // Players.set(socket.id, new Player());
    Players[socket.id] = new Player();

    socket.on("disconnect", () => {
        delete Players[socket.id];
    }); 
});

setInterval(() => {
    io.emit("render", Players);
}, 1000*DT);

module.exports = {
    data: Players
}