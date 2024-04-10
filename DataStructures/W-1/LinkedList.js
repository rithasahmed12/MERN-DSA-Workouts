// Methods
// append, prepend
// removeFromStart, removeFromEnd
// reverse , removeFromMiddle
// removeByIndex, removeByValue
// toArray, arrayToLinkedList
// removeDuplicates, print

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeFromStart(){
        if(this.isEmpty()){
            return;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            this.head = curr.next;
        }
        this.size--;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
        
            while(prev.next.next){
                prev = prev.next;
            }
            this.tail = prev;
            prev.next = null;
        }
        this.size--;
    }

    reverse(){
        let prev=null;
        let curr = this.head;
        while(curr){
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        this.head = prev;
        this.tail = curr;
    }

    removeFromMiddle(){
        let slowPointer = this.head;
        let fastPointer = this.head;
        let prevNode = null;

        while(fastPointer && fastPointer.next){
            prevNode = slowPointer;
            slowPointer=slowPointer.next;
            fastPointer=fastPointer.next.next;
        }
        if(!slowPointer && slowPointer == this.head){
            return;
        }
        prevNode.next = slowPointer.next;
        slowPointer.next = null ;
        this.size--;
    }

    removeByvalue(value){
        if(this.isEmpty()){
            console.log("list is empty");
            return;
        }
        if(this.head.value == value){
            this.removeFromStart()
            this.size--;
        }else{
            let curr = this.head;
            let prev = null
            while(curr.value != value && curr.next){
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
            this.size--; 
        }
        console.log("Value not found");
    }
    
    removeByIndex(index){
        if(index > this.size) {
            console.log("List size is "+this.size);
            return;
        }
        if(index === 0){
            this.removeFromStart();
            return;
        }
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head;
            let prev = null;
            for(let i=0 ; i<index; i++){
                prev = curr;
                curr = curr.next
            }
            prev.next = curr.next;
            this.size--
        }
    }

    toArray(){
        const arr = [];
        let curr = this.head;
        while(curr){
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }

    arrayToLinkedList(array){
        for(let i=0 ; i<array.length; i++){
            this.append(array[i]);
        }
    }

    removeDuplicates(){
        let uniqueValues = new Set();
        let prev = null;
        let curr = this.head;

        while(curr){
            if(uniqueValues.has(curr.value)){
                prev.next = curr.next;
                this.size--;
                if(curr == this.tail){
                    this.tail = prev;
                }
            }else{
                uniqueValues.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head;
            let values = "";

            while(curr){
                values += " "+curr.value
                curr = curr.next
            }
            console.log("Linked List OG:",values)
        }
    }


}

// const linkedList = new LinkedList();

// // linkedList.append(10);
// // linkedList.append(20);
// // linkedList.append(30);
// // linkedList.append(40);
// // linkedList.prepend(100);
// // linkedList.prepend(-100);
// // linkedList.append(50)
// // linkedList.removeFromStart()
// // linkedList.removeFromEnd()
// // linkedList.removeFromEnd()
// // linkedList.reverse()
// // linkedList.removeFromMiddle()
// const arr = [12,34,12,11,67,12];
// linkedList.removeByvalue(-100)
// linkedList.removeByIndex(4);
// linkedList.arrayToLinkedList(arr)
// linkedList.removeDuplicates()
// linkedList.print();


module.exports = LinkedList 