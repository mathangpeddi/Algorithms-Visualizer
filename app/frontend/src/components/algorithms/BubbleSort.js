import React from "react";
import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";

const BubbleSort = (nums) => {
	// Set up code for tracing the algorithm
	const trace = newTrace(nums);
	var compare = [];

	const msg = new SpeechSynthesisUtterance();
	msg.text = "You are now viewing bubble sort";
	speechSynthesis.speak(msg);

	// Sorting Algorithm with trace capture
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			// Visualize: Comparing A[j] and A[j + 1]
			addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1);
				// Visualize: Swap A[j] and A[j + 1]
				addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
			}
			compare.push([nums[j], nums[j + 1]]);
		}
		// Audio generation and speech
		// for (var iterdata of trace) {
		// 	var array = iterdata["array"];
		// 	var comp = iterdata["groupA"];
		// 	var Swap = iterdata["groupB"];
		// 	console.log(iterdata);
		// 	if (comp.length > 0) {
		// 		const message = new SpeechSynthesisUtterance();
		// 		message.text = array[comp[0]] + " is compared to " + array[comp[1]];
		// 		speechSynthesis.speak(message);
		// 		message.rate = 2;
		// 	}
		// 	if (Swap.length > 0) {
		// 		const message = new SpeechSynthesisUtterance();
		// 		message.text =
		// 			array[Swap[0]] +
		// 			" is lesser than " +
		// 			array[Swap[1]] +
		// 			"and is swapped";
		// 		speechSynthesis.speak(message);
		// 		message.rate = 2;
		// 	}
		// }
		// Visualize: final value is sorted
		addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i]);
	}
	console.table(compare);
	console.log(trace);
	return trace;
};

export const BubbleSortKey = createKey("Comparing", "Swapping");
export const BubbleSortDesc = {
	title: "Bubble Sort",
	description: (
		<p>
			<a
				href="https://en.wikipedia.org/wiki/Bubble_sort"
				target="_blank"
				rel="noopener noreferrer"
			>
				Bubble Sort
			</a>{" "}
			is a simple sorting algorithm that repeatedly steps through the list,
			compares adjacent elements and swaps them if they are in the wrong
			order.The pass through the list is repeated until the list is sorted. The
			algorithm, which is a comparison sort, is named for the way smaller or
			larger elements "bubble" to the top of the list. Although the algorithm is
			simple, it is too slow and impractical for most problems
		</p>
	),
	worstCase: (
		<span>
			O(n<sup>2</sup>)
		</span>
	),
	avgCase: (
		<span>
			O(n<sup>2</sup>)
		</span>
	),
	bestCase: <span>O(n)</span>,
	space: <span>O(1)</span>,
};
export default BubbleSort;
