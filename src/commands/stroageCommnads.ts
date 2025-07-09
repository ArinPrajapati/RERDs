import Storage from "../storage/storage";
type StorageType = string;
type StorageValue = string | number | boolean | object;

function handleSetCommand(
  storage: Storage,
  key: string,
  type: StorageType,
  value: StorageValue
): string {
  storage.set(key, type, value);
  return "OK";
}

function handleGet_Value_Command(
  storage: Storage,
  key: string
): StorageValue | "NIL" {
  const value = storage.get(key);
  return value !== undefined && value !== null ? value.value : "NIL";
}

function handleGet_Type_Command(
  storage: Storage,
  key: string
): StorageType | "NIL" {
  const value = storage.get(key);
  return value !== undefined && value !== null ? value.type : "NIL";
}

function handleDelCommand(storage: Storage, key: string) {
  try {
    const existed = storage.get(key) !== undefined && storage.get(key) !== null;
    storage.delete(key);
    return existed ? "Deleted" : "(nil)";
  } catch (error: ErrorConstructor | any) {
    return error.message || "(unknown error)";
  }
}

function handleAppendCommand(storage: Storage, key: string, value: string) {
  try {
    storage.append(key, value);
    return "OK";
  } catch (error: ErrorConstructor | any) {
    return error.message || "(unknown error)";
  }
}

export {
  handleSetCommand,
  handleGet_Value_Command,
  handleGet_Type_Command,
  handleDelCommand,
  handleAppendCommand,
};
