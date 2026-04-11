class Queue {
    #items = [];

    enqueue(item) {
        this.#items.push(item);
    }
    dequeue(){
        if(this.#items.length===0) {
            return null;
        }
        return this.#items.shift();
    }
    peek(){
        if(this.#items.length===0) {
            return null;
        }
        return this.#items[0]
    }
}

export default Queue;