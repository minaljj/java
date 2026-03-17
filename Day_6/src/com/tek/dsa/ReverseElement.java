package com.tek.dsa;

import java.util.Arrays;
import java.util.List;

public class ReverseElement {
	public static void main(String[] args) {
		reverse();
		second();
		streamsSecondLargest();
		duplicate();
	}

	private static void duplicate() {
		// TODO Auto-generated method stub
		int[] arr = { 1, 2, 3, 2, 4, 5, 3 };
		Arrays.sort(arr);
		System.out.print("Duplicates: ");

		for (int i = 0; i < arr.length; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[i] == arr[j]) {
					System.out.print(arr[i] + " ");
				}
			}
		}

	}

	private static void streamsSecondLargest() {
		// TODO Auto-generated method stub
		List<Integer> sort = Arrays.asList(10, 50, 60, 30, 20);
		List<Integer> sortedElement = sort.stream().sorted().toList();
		System.out.println("Print sorted element using stream" + sortedElement);
		Integer secondLargest = sortedElement.get(sortedElement.size() - 2);
		System.out.println("Second largest = " + secondLargest);

	}

	private static void second() {
		// TODO Auto-generated method stub

		int[] arr = { 10, 50, 20, 40, 30 };

		Arrays.sort(arr);
		System.out.println("Second Largest: " + arr[arr.length - 2]);

	}

	private static void reverse() {
		// TODO Auto-generated method stub
		int arr[] = { 10, 20, 30 };
//		
		for (int i = arr.length - 1; i >= 0; i--) {
			System.out.println(arr[i] + "");
		}
		System.out.println("--------");
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}
}
