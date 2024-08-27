import net from "net";
import Storage from "./storage/storage.js";
import {
  handleGetCommand,
  handleSetCommand,
  handleDelCommand,
} from "./commands/stroageCommnads.js";

const storage = new Storage();
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const commandline = data.toString().trim();
    const [command, key, value] = commandline.split(" ");
    let response = "";
    switch (command.toUpperCase()) {
      case "SET":
        if (key === undefined || value === undefined) {
          response = "ERROR missing key or value";
          break;
        }
        response = handleSetCommand(storage, key, value);
        break;
      case "GET":
        if (key === undefined) {
          response = "ERROR missing key";
          break;
        }
        response = handleGetCommand(storage, key);
        break;
      case "DEL":
        if (key === undefined) {
          response = "ERROR missing key";
          break;
        }
        response = handleDelCommand(storage, key);
        break;
      default:
        response = "ERROR unknown command";
        break;
    }

    socket.write(response + "\n");
  });
});

server.listen(6379, () => {
  console.log(`Server listening on port 6379 \n command get/set/del example: GET key \n command set example: SET key value 

     `);
});
