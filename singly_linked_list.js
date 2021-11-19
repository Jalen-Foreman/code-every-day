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
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    set(val, index){
        let oldNode = this.get(index)
        if(oldNode) {
            oldNode.val = val
            return true
        } else {
            return false
        }
    }
    insert(val, index){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.shift(val)
        jdfgdfdghdfg
        let prevNode = this.get(index-1)
        let newNode = new Node(val)  
        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp
        this.length++
        return true;
    }
    remove(index){
        if(index < 0 && index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        const prevNode = this.get(index-1)
        const removed = prevNode.next
        prevNode.next = prevNode.next.next
        this.length--
        return removed
    }
}

let list = new SinglyLinkedList()
list.push('Hello')
list.push('there')
list.push('Jalen')
list.push('Yummy boi')
list.unshift('Boi Ole Boi')
list.set('Josmar', 3);
list.insert('great', 3);
console.log(list.remove(3));
console.log(list.get(2));

// let first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

