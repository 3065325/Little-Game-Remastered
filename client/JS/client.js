const socket = io("http://localhost:3000");
export default socket;

socket.on("message", (message) => {
    console.log(`Server to Socket: "${message}"`);
});