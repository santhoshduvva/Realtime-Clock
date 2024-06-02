// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("close", () => console.log("Client disconnected"));

  // Send a message every second
  setInterval(() => {
    ws.send(JSON.stringify({ data: new Date().toLocaleTimeString() }));
  }, 1000);
});

console.log("WebSocket server is running on ws://localhost:8080");
