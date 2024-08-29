import { createConnection } from "net";

// Connect to the Redis-like server
const client = createConnection({ host: " tcp://0.tcp.in.ngrok.io", port: 16751 }, () => {
  console.log("Connected to server!");

  // Send SET command
  client.write("SET key1 value1\n");

  // Send GET command
  client.write("GET key1\n");

  // Send DEL command
  client.write("DEL key1\n");

  // Send GET command to check if the key was deleted
  client.write("GET key1\n");
});

// Handle server responses
client.on("data", (data) => {
  console.log("Server says:", data.toString().trim());
});

// Handle connection end
client.on("end", () => {
  console.log("Disconnected from server");
});
