// remove duplicates from an unsorted linked list

const removeDuplicates = (list) => {
    let node, temp;
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    for(let i = list.length - 1; i >= 0; i--) {
        if(!node) {
            node = new Node(list[i])
        } else {
            temp = new Node(list[i])
            temp.next = node;
            node = temp
        }
    }

}