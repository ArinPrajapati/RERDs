"use strict";
// import net from "net";
// import Storage from "./storage/storage.js";
// import {
//   handleSetCommand,
//   handleDelCommand,
//   handleGet_Value_Command,
//   handleGet_Type_Command,
// } from "./commands/stroageCommnads.js";
// const storage = new Storage();
// const server = net.createServer((socket) => {
//   socket.on("data", (data) => {
//     const commandline = data.toString().trim();
//     const [command, key, type, value] = commandline.split(" ");
//     let response = "";
//     switch (command.toUpperCase()) {
//       case "SET":
//         if (key === undefined || value === undefined) {
//           response = "ERROR missing key or value";
//           break;
//         }
//         response = handleSetCommand(storage, key, type, value);
//         break;
//       case "GET_VALUE":
//         if (key === undefined) {
//           response = "ERROR missing key";
//           break;
//         }
//         response = handleGet_Value_Command(storage, key);
//         break;
//       case "GET_TYPE":
//         if (key === undefined) {
//           response = "ERROR missing key";
//           break;
//         }
//         response = handleGet_Type_Command(storage, key);
//         break;
//       case "DEL":
//         if (key === undefined) {
//           response = "ERROR missing key";
//           break;
//         }
//         response = handleDelCommand(storage, key);
//         break;
//       default:
//         response = "ERROR unknown command";
//         break;
//     }
//     socket.write(response + "\n");
//   });
// });
// server.listen(6379, () => {
//   console.log(`Server listening on port 6379 \n command get/set/del example: GET_VALUE key \n command set example: SET key type value 
//      `);
// });
console.log("Hello World");
