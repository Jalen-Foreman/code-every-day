/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/


var addTwoNumbers = function (l1, l2) {
	l1.reverse();
	l2.reverse();
	l1reverseString = l1.join('');
	l2reverseString = l2.join('');
	l1reverseNum = parseInt(l1reverseString);
	l2reverseNum = parseInt(l2reverseString);
	let listNodeNum = l1reverseNum + l2reverseNum;
	const listNodeArray = Array.from(listNodeNum.toString()).map(Number);
	listNodeArray.reverse();
	return listNodeArray;
};

console.log(addTwoNumbers([2,4,3], [5,6,4])); // expected: [7,0,8]
console.log(addTwoNumbers([0], [0])); // expected: [0]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9,9,9,9])); // expected: [8,9,9,9,0,0,0,1]