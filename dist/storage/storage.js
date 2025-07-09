"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor() {
        this.data = new Map();
    }
    set(key, type, value) {
        if (!["string", "hash", "list", "set", "boolean"].includes(type)) {
            throw new Error(`Type ${type} not supported`);
        }
        this.data.set(key, new DataValue(value, type));
    }
    get(key) {
        return this.data.get(key);
    }
    delete(key) {
        this.data.delete(key);
    }
}
exports.default = Storage;
// add string methods to stroage stringlength and append
class DataValue {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
}
