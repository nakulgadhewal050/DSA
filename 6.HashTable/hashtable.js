class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(50);
  }
  simpleHash(key, maxValue) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let asciCode = key[i].charCodeAt(0);
      total += asciCode;
    }
    return total % maxValue;
  }

  set(key, value) {
    const hashCode = this.simpleHash(key, this.keyMap.length);
    if (!this.keyMap[hashCode]) {
      this.keyMap[hashCode] = [];
    }
    console.log("hashCode:", hashCode);
    this.keyMap[hashCode].push([key, value]);
  }

  get(key) {
    let hashCode = this.simpleHash(key, this.keyMap.length);
    let result = this.keyMap[hashCode];
     if (!result) return undefined;
    for(let pair of result){
        if(pair[0] === key){
            return pair[1]
        }
    }
    console.log(result);
    return undefined
  }
}

const hashTable = new HashTable();
hashTable.set("ashis", "Software Engineer");
console.log("value:", hashTable.get("ashis"));
console.log("adding new")
hashTable.set("aashis", "kumar")
console.log("value:", hashTable.get("aashis"));
