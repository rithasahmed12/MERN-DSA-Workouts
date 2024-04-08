class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Circular reference
        } else {
            newNode.next = this.head; // New node points to head
            this.tail.next = newNode; // Update tail's next pointer
            this.tail = newNode; // Update tail
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Circular Linked List is empty.");
        } else {
            let current = this.head;
            do {
                console.log(current.data);
                current = current.next;
            } while (current !== this.head);
        }
    }

    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.insert(data);
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.insert(data);
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = newNode;
            this.size++;
        }
    }

    removeFromStart() {
        if (!this.isEmpty()) {
            this.head = this.head.next;
            this.tail.next = this.head;
            this.size--;
            if (this.isEmpty()) {
                this.tail = null;
            }
        }
    }

    removeFromEnd() {
        if (!this.isEmpty()) {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = this.head;
            this.tail = current;
            this.size--;
            if (this.isEmpty()) {
                this.head = null;
                this.tail = null;
            }
        }
    }

    reverse() {
        if (!this.isEmpty()) {
            let prev = null;
            let current = this.head;
            let nextNode;
            do {
                nextNode = current.next;
                current.next = prev;
                prev = current;
                current = nextNode;
            } while (current !== this.head);
            this.head.next = prev;
            this.head = prev;
            this.tail = nextNode;
        }
    }

    removeFromMiddle() {
        if (!this.isEmpty()) {
            let slowPointer = this.head;
            let fastPointer = this.head;
            let prev = null;
            do {
                prev = slowPointer;
                slowPointer = slowPointer.next;
                fastPointer = fastPointer.next.next;
            } while (fastPointer !== this.head && fastPointer.next !== this.head);
            prev.next = slowPointer.next;
            this.size--;
            if (this.isEmpty()) {
                this.head = null;
                this.tail = null;
            }
        }
    }

    removeByIndex(index) {
        if (index < 0 || index >= this.size || this.isEmpty()) {
            return;
        }
        if (index === 0) {
            this.removeFromStart();
        } else {
            let prev = null;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            if (current === this.tail) {
                this.tail = prev;
            }
            this.size--;
        }
    }

    removeByValue(value) {
        if (this.isEmpty()) {
            return;
        }
        let prev = null;
        let current = this.head;
        while (current !== this.tail) {
            if (current.data === value) {
                if (prev === null) {
                    this.head = current.next;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
        if (current.data === value) {
            if (prev === null) {
                this.head = null;
                this.tail = null;
            } else {
                prev.next = current.next;
                this.tail = prev;
            }
            this.size--;
        }
    }

    toArray() {
        const array = [];
        let current = this.head;
        do {
            array.push(current.data);
            current = current.next;
        } while (current !== this.head);
        return array;
    }

    arrayToLinkedList(array) {
        array.forEach((element) => {
            this.append(element);
        });
    }

    removeDuplicates() {
        const seen = new Set();
        let prev = null;
        let current = this.head;
        while (current !== this.tail) {
            if (seen.has(current.data)) {
                prev.next = current.next;
                this.size--;
            } else {
                seen.add(current.data);
                prev = current;
            }
            current = current.next;
        }
        if (seen.has(current.data)) {
            prev.next = current.next;
            this.tail = prev;
            this.size--;
        }
    }
}

// Example usage:
const cll = new CircularLinkedList();
cll.insert(1);
cll.insert(2);
cll.insert(3);
console.log("Circular Linked List:");
cll.print();

cll.append(4);
console.log("After appending 4:");
cll.print();

cll.prepend(0);
console.log("After prepending 0:");
cll.print();

cll.removeFromStart();
console.log("After removing from start:");
cll.print();

cll.removeFromEnd();
console.log("After removing from end:");
cll.print();

cll.reverse();
console.log("After reversing:");
cll.print();

cll.removeFromMiddle();
console.log("After removing from middle:");
cll.print();

cll.removeByIndex(2);
console.log("After removing at index 2:");
cll.print();

cll.removeByValue(2);
console.log("After removing value 2:");
cll.print();

console.log("Array representation:");
console.log(cll.toArray());

const array = [5, 6, 7];
cll.arrayToLinkedList(array);
console.log("After converting array to linked list:");
cll.print();

cll.removeDuplicates();
console.log("After removing duplicates:");
cll.print();
