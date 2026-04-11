import Queue  from "./queue.js";

const queueInstances = new Queue();

queueInstances.enqueue(2);
queueInstances.dequeue();
queueInstances.enqueue(3);
console.log(queueInstances.peek())
