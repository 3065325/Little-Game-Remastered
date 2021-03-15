import socket from "./client.js";
import { canvas, c, vh, vw, UpdateCanvas } from "./canvas.js";

const m = 0.1*vh;

function Render(data) {
    UpdateCanvas("#111122");

    for (const socketId in data) {
        const player = data[socketId];
        const color = socketId == socket.id ? "#ff0000" : "#0000ff";
        c.fillStyle = color;
        c.fillRect(player.Position[0]*m, -player.Position[1]*m, player.Size[0]*m, -player.Size[1]*m);
    }
}

socket.on("render", (data) => {
    // console.log(data)
    requestAnimationFrame(() => {
        return Render(data);
    });
});