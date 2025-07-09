interface StorageData {
  type: string;
  value: string | number | boolean | object;
}

class Storage {
  private data: Map<string, DataValue>;

  constructor() {
    this.data = new Map<string, DataValue>();
  }

  set(
    key: string,
    type: StorageData["type"],
    value: string | number | boolean | object | Array<any>
  ) {
    if (!["string", "hash", "list", "set", "boolean"].includes(type)) {
      throw new Error(`Type ${type} not supported`);
    }

    if (type === "list") {
      value = new DataValue(setList(value), type);
    }
    this.data.set(key, new DataValue(value, type));
  }

  get(key: string): StorageData | undefined {
    return this.data.get(key);
  }

  delete(key: string): void {
    this.data.delete(key);
  }

  append(key: string, value: string): void {
    const data = this.data.get(key);
    if (data?.type === "string") {
      data.value += value;
    } else {
      throw new Error(`Key ${key} does not contain a string value.`);
    }
  }
}

class DataValue {
  value: string | number | boolean | object;
  type: StorageData["type"];

  constructor(
    value: string | number | boolean | object,
    type: StorageData["type"]
  ) {
    this.value = value;
    this.type = type;
  }
}

const setList = (list: string | number | boolean | object | Array<any>) => {
  const items = JSON.parse(list as string);
  if (Array.isArray(items)) {
    return new Map(items.map((item, index) => [`${index}`, item]));
  } else {
    throw new Error("List must be an array");
  }
};

export default Storage;
