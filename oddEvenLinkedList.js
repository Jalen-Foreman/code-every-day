
var oddEvenList = function (head) {
	if (head === null) {
		return null;
	}
	let oddList = new ListNode(-1);
	let evenList = new ListNode(-1);
	let oddStart = oddList;
	let evenStart = evenList;
	let placeVal = 1;
	let current = head;
	while (current !== null) {
		if (placeVal % 2 === 1) {
			oddList.next = current;
			oddList = oddList.next;
		} else {
			evenList.next = current;
			evenList = evenList.next;
		}
		placeVal++;
		current = current.next;
	}
	oddList.next = evenStart.next;
	evenList.next = null;
	return oddStart.next;
};

console.log(oddEvenList([1, 2, 3, 4, 5]));