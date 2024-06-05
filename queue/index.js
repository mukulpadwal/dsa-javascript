class Queue {
    constructor(){
        this.queue = [];
    }


    // insert element into queue
    enqueue(data){
        this.queue.push(data);
    }

    // remove element into queue
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }

        return this.queue.shift();
    }

    // check if queue is empty
    isEmpty(){
        return this.queue.length === 0;
    }

    // clear
    clear(){
        this.queue = [];
    }

    // contains 
    contains(element){
        return this.queue.includes(element);
    }

    // print
    print(){
        let output = "";

        for (let i = 0; i < this.queue.length; i++) {
            output += this.queue[i] + '\n';
        }

        return output;
    }
}


let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);

console.log(myQueue.print());

myQueue.dequeue();
console.log(myQueue.print());

