class HashTable{
    constructor(size){
        this.items = new Array(size).fill(null).map(()=> []);
        this.size = size
    }
    hash(key){
        key = key.toString();
        let value = 0
        for(let i=0 ; i<key.length; i++){
            value += key.charCodeAt(i);
        }
        return value % this.size;  
    }
    get(key){
        let hashedIndex = this.hash(key)
        let bucket = this.items[hashedIndex];
        for(let [existingKey,existingValue] of bucket){
            if(key==existingKey){
                return existingValue;
            }
        }
        return -1
    }
    set(key,value){
        let hashedIndex = this.hash(key);
        let bucket = this.items[hashedIndex]
        for(let [existingKey,existingValue] of bucket){
            if(key == existingKey){
                [existingKey,existingValue] = [key,value]
                return
            }
        }
        bucket.push([key,value]);
    }
    delete(key){
        let hashedIndex = this.hash(key);
        let bucket = this.items[hashedIndex];
        for(let i=0 ; i<bucket.length;i++){
            let [existingKey, existingValue] = bucket[i]
            if(existingKey === key){
                bucket.splice(i,1);
                return;
            }
        }
    }

    has(value){
        for(let i=0 ; i<this.items.length;i++){
            let bucket = this.items[i];
            for(let j=0 ; j<bucket.length;j++){
                let [existingKey,existingValue] = bucket[j];
                if(existingValue === value){
                    return true
                }
            } 
        }
        return false;
    }
    keys(){
        let allKeys = []
        for(let i=0; i<this.items.length; i++){
            let bucket = this.items[i];
            for(let j=0 ; j<bucket.length;j++){
                let [existingKey] = bucket[j];
                allKeys.push(existingKey)
            }
        }
        return allKeys;
    }
    values(){
        let allValues = [];
        for(let i=0; i<this.items.length; i++){
            let bucket = this.items[i];
            for(let j=0 ; j<bucket.length;j++){
                let [existingKey,existingValue] = bucket[j];
                allValues.push(existingValue)
            }
        }
        return allValues;
    }
    entries(){
        let entries = [];
        for(let i=0; i<this.items.length; i++){
            let bucket = this.items[i];
            for(let j=0 ; j<bucket.length;j++){
                entries.push(bucket[j])
            }
        }
        return entries;

    }
    clear(){
        for(let i=0; i<this.items.length;i++){
            this.items[i] = [];
        }
    }
    print(){
        for(let i=0; i<this.items.length;i++){
            let bucket = this.items[i]
            for(let j=0; j<bucket.length;j++){
                let [key,value] = bucket[j];
                console.log(key,'=>',value);
            }
        }
    }
}

const hashMap = new HashTable(10);
hashMap.set('name','Rithas');
hashMap.set('mane','player')
hashMap.set("age",23)
// hashMap.delete("mane")
console.log(hashMap.get("mane"));
// console.log(hashMap.items);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
hashMap.print()
hashMap.clear()
console.log(hashMap.has('Rithas'));
console.log(hashMap.has(23));