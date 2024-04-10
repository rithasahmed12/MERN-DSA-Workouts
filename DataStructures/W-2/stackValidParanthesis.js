class Stack{
    constructor(){
        this.items = []
    }
    isEmpty(){
        return this.items.length === 0;
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.pop();
    }
    top(){
        this.items[this.items.length-1];
    }
}


const isValid = function(s) {
    const stack = new Stack();
    let leftBrackets = ['(','{','['];
    let rightBrackets = [')','}',']'];

      for(let item of s){
        if(leftBrackets.includes(item)){
            stack.push(item);
        }else if(rightBrackets.includes(item)){
            if(stack.isEmpty()){
                return false
            }
            const top = stack.pop();
            const openingBracket = leftBrackets[rightBrackets.indexOf(item)];
            if(top !== openingBracket){
                return false;
            }   
        }
    }

    return stack.isEmpty();

};

let s = "(}"
console.log(isValid(s));