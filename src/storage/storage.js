class Storage {
  constructor() {
    this.data = new Map();
  }
  set(key, value) {
    this.data.set(key, value);
  }
  get(key) {
    return this.data.get(key);
  }
  delete(key) {
    this.data.delete(key);
  }
}

export default Storage;
