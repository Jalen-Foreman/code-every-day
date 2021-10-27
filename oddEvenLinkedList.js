
var oddEvenList = function (head) {

    class Node {
        constructor(data) {
            // class that makes a node to point to the next node
            this.data = data;
            this.next = null;
        }
    }
    let node, temp;
    // convert the array to a linked list
    // create a for loop that loops backwards on the array so the last node can point to null
    for(let i = head.length - 1; i >= 0; i--) {
        // if node is false set node equal a new Node because during the first loop, node must point to a null value
        // else set temp to a new node, set the temp.next property to node which has the previous node in it and then set node = temp so during the incoming loops, node will equal the previous temp node and temp will equal the next node in the loop and have that Node point to the node variable which contains the previous node
        if (!node){
            node = new Node(head[i]);
        } else {
                temp = new Node(head[i]);
                temp.next = node;
                node = temp;
        }
    }
   
        
    // create an new even and odd Linked list so that all the odd values of the main linked list go into oddList and same for even
	let oddList = new Node(-1);
	let evenList = new Node(-1);
    // Set oddStart to the new odd node list to get the head value of the linked list
    // Set evenStart to the new even node list to get the head value of the linked list
	let oddStart = oddList;
	let evenStart = evenList;
	let placeVal = 1;
	let current = node;
    // loop through the linked list and set a counter to 1 so it can be the equivalent of the linkedlist starting at index one
	while (current !== null) {
        // if index mod 2 is equal to 1, the index is odd and needs to be pushed into the oddList
		if (placeVal % 2 === 1) {
            // set the tail of the oddList to the current linked list
			oddList.next = current;
            // traverse throught the oddList and push the current next value to the odd linked list
			oddList = oddList.next;
		} else {
            // if index is divisible by two set the tail of the evenList to the current index of the linked list
			evenList.next = current;
            // traverse through the even list and push the current next value onto the even linked list
			evenList = evenList.next;
		}
        // increment the place value
		placeVal++;
        // traverse through the current linked list so the while loop can have the next index everytime
		current = current.next;
	}
    // point the tail of the oddList to the tail of the even list
	oddList.next = evenStart.next;
    // point the tail of the evenList to null since there is no value after
	evenList.next = null;
    // return the node list and skip the beginning oddList node value and point to the index after the head
	return oddStart.next;
};

console.log(oddEvenList([3, 2, 3, 9, 5]));


// const node1 = {
//     data: 100
// }
// const node2 = {
//     data: 200
// }
// node1.next = node2;

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// const node1 = new Node (100)

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // Insert first node
//     insertFirst(data) {
//         this.head = new Node(data, this.head)
//         this.size++
//     }

//     // Insert last node
//     insertLast(data) {
//         let node = new Node(data);
//         let current;
//         if (!this.head) {
//             this.head = node
//         } else {
//             // Set current equal to the first node aka head
//             current = this.head;
//             // While current.next is true, traverse through the list until current.next is false
//             while(current.next) {
//                 current = current.next;
//             }
//             // Set current.next to node so it can be at the end of the list
//             current.next = node;
//         }
//         // increment the size of the list
//         this.size++
//     }

//     // Insert at index
//     insertAt(data, index) {
//         // if index is out of range
//         if(index > 0 && index > this.size) {
//             return;
//         }
//         // if first index 
//         if (index === 0) {
//             return this.insertFirst(data)
//         }

//         const node = new Node(data);
//         let current, previous;

//         // Set current to first
//         current = this.head
//         let count = 0;

//         while(count < index) {
//             previous = current // Node before index 
//             count++;
//             current = current.next; // Node after index
//         }
//         node.next = current;
//         previous.next = node;
//         this.size++
//     }
//     // Get at index

//     // Remove at index

//     // Clear list

//     // Print list data
//     printListData() {
//         let current = this.head;
//         while(current) {
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// const ll = new LinkedList();
// ll.insertFirst(100)
// ll.insertFirst(200)
// ll.insertAt(150, 1)
// ll.insertAt(300, 0)
// ll.printListData()
// console.log(ll);
// console.log(node1);