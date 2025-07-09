"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSetCommand = handleSetCommand;
exports.handleGet_Value_Command = handleGet_Value_Command;
exports.handleGet_Type_Command = handleGet_Type_Command;
exports.handleDelCommand = handleDelCommand;
function handleSetCommand(storage, key, type, value) {
    storage.set(key, type, value);
    return "OK";
}
function handleGet_Value_Command(storage, key) {
    const value = storage.get(key);
    return value !== null || value !== undefined ? value.value : "NIL";
}
function handleGet_Type_Command(storage, key) {
    const value = storage.get(key);
    return value !== null || value !== undefined ? value.type : "NIL";
}
function handleDelCommand(storage, key) {
    const existed = storage.get(key) !== null;
    storage.delete(key);
    return existed ? "Deleted" : "(nil)";
}
