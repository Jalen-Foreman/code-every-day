/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order. */

// intersect([1,2,2,1], [2,2]) // [2,2]
// intersect([4,9,5], [9,4,9,8,4]) // [4,9] or [9,4]

const intersect = (nums1, nums2) => {
			if (nums1.length <= nums2.length) {
				return findCommonElements(nums1, nums2);
			}
			return findCommonElements(nums2, nums1);
		

		const findCommonElements = (nums1, nums2) => {
			const results = [];
			nums1.map((item) => {
				if (nums2.includes(item)) {
					results.push(item);
					nums2.splice(nums2.indexOf(item), 1);
				}
			});
			return results;
        }
		
}