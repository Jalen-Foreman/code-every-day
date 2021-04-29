/*You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.

Some hints: We can see that (n + 1)! = (n + 1) * n!. So (n + 1)! / n! = (n + 1)

We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)

And your solution should be able to calculate n! / d!.*/



function factorialDivision(n, d) {
  // every number including n and less than n must be multiplied together
  for (let i = n - 1; i > 0; i--) {
	n = n * i
}
for (let i = d - 1; i > 0; i--) {
	d = d * i;
}
let result = n / d
return result
}

console.log(factorialDivision(5, 3)); // expected 20
