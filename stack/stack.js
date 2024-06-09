export default class Stack {

    constructor(){
        this.stack = [];
    }

    // Push Element to Stack
    push(data){
        this.stack.push(data);
    }

    // Pop Element from stack
    pop(){
        // If the stack is empty
        if(this.isEmpty()){
            return "Stack is empty."
        }

        return this.stack.pop();
    }

    // isEmpty
    isEmpty(){
        return this.stack.length === 0;
    }

    // peek the top element
    peek(){
        // If the stack is empty
        if(this.isEmpty()){
            return "Stack is empty."
        }

        return this.stack[this.stack.length - 1];
    }

    // contains a specific element
    contains(element){
        return this.stack.includes(element);
    }

    // reverse the stack
    reverse(){
        this.stack.reverse();
    }

    // print the stack
    print(){
        let output = "";

        for (let i = 0; i < this.stack.length; i++) {
            output += this.stack[i] + "\n";   
        }

        return output;
    }

    // clear the stack
    clear(){
        this.stack = [];
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.print());

myStack.reverse();

console.log(myStack.print());

console.log(myStack.isEmpty());
console.log(myStack.contains(2));

console.log(myStack.print());

myStack.clear();
console.log(myStack.print());