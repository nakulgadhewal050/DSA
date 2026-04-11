class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    }
    else {
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    }
  }

  deleteByValue(dataToDelete){
    if(this.head === null){
        return;
    }
    let current = this.head
    if(current.data === dataToDelete){
        this.head = current.next;
        return;
    }
    let previous = null;
    while(current !== null){
        previous = current;
        current = current.next;
        if(current.data === dataToDelete){
             previous.next = current.next
                return;
        }
    }
  }

  search(dataToSearch) {
    if (this.head === null) {
        return false;
    }

    let current = this.head;

    while (current !== null) {
        if (current.data === dataToSearch) {
            return true;
        }
        current = current.next;
    }

    return false;
}

   length(){
    if(this.head === null){
        return 0;
    }
    let counter = 1
    let current = this.head;
    while(current.next !== null){
        current = current.next
        counter++;
    }
    return counter;
   }
  
     traverse(){
        if(this.head === null){
            return ;
        }
        let current = this.head;
        console.log(current.data);
        while(current.next !== null){
            current = current.next;
            console.log(current.data);
        }
     }

}


const linkedList = new LinkedList();

// linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.insertAtEnd(5);
linkedList.deleteByValue(5);
linkedList.traverse();
console.log("searching for 4:",linkedList.search(4))
console.log("length of linked list:",linkedList.length());

