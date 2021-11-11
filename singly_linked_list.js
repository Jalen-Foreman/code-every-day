/* what are nodes?
piece of data(val)
reference to next node(next)
*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let current = this.head 
        let newTail;
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        let removed = current
        return removed
    }
    shift(){
        if(!this.head) return undefined 
        let removed = this.head
        this.head = removed.next
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return removed
    }
    unshift(val) {
        let newHead = new Node(val)
        if(!this.head) {
            this.head = newHead
            this.tail = this.head
        } else {
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
    }
}

let list = new SinglyLinkedList()
list.push('Hello')
list.push('there')
list.push('Jalen')
list.push('Yummy boi')
list.unshift('Boi Ole Boi')
console.log(list);

// let first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')
