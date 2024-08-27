function handleSetCommand(storage, key, value) {
  storage.set(key, value);
  return "OK";
}

function handleGetCommand(storage, key) {
  const value = storage.get(key);
  return value !== null || value !== undefined ? value : "(nil)";
}

function handleDelCommand(storage, key) {
  const existed = storage.get(key) !== null;
  storage.delete(key);
  return existed ? "Deleted" : "(nil)";
}

export { handleSetCommand, handleGetCommand, handleDelCommand };
