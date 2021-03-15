const io = require("./server.js").io;
const data = require("./data.js").data;
const V = require("../datastructures/vector.js");

const FPS = 60;
const DT = 1/FPS;

const g = 0.9810665;//decameters
const gv = [0, -g];

module.exports = (() => {
    const PhysicsInterval = setInterval(() => {
        
        for (const socketId in data) {
            const player = data[socketId];
            
            player.Velocity = V.add(player.Velocity, gv);
            player.Position = V.add(player.Position, player.Velocity);
        };

    }, 1000*DT);

    return PhysicsInterval;
})();