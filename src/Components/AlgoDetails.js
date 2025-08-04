function AlgoDetails({ algo }) {
    // Simulate data (You can move this to a separate file later)
    const content = {
        'bubble-sort': {
            title: 'Bubble Sort',
            description: `Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high. We sort the array using multiple passes. After the first pass, 
the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on. In every pass, 
we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions. 
In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element.If we keep doing this, we get the largest 
(among the remaining elements) at its correct position.`,
            pseudocode: `
function BUBBLESORT(ARRAY)
n = length(ARRAY)  // Get the length of the array
for i from 0 to n-1 do
    swapped = false  // Initialize a flag to check if a swap occurred
    for j from 0 to n-i-2 do
        if ARRAY[j] > ARRAY[j+1] then
        // Swap ARRAY[j] and ARRAY[j+1]
        TEMP = ARRAY[j]
        ARRAY[j] = ARRAY[j+1]
        ARRAY[j+1] = TEMP
        swapped = true  // Set the flag to true if a swap occurred
        end if
    end for
    if not swapped then
    break  // If no swaps occurred, the array is sorted
end for
end function
      `,
            time: 'O(n²) -> Best, Avg., Worst',
            space: 'O(1)'
        },
        'merge-sort': {
            title: 'Merge Sort',
            description: `Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach. It works by recursively dividing the input array into two halves, recursively sorting the two halves and finally merging them back together to obtain the sorted array.`,
            pseudocode:`
//Dividing
MERGE_SORT(array, left, right):
IF left < right:
    mid = (left + right) / 2
    MERGE_SORT(array, left, mid)       // Sort the left half
    MERGE_SORT(array, mid + 1, right) // Sort the right half
    MERGE(array, left, mid, right)    // Merge the two halves

//Merging (Conquer)
MERGE(array, left, mid, right): n1 = mid - left + 1 n2 = right - mid Create temp arrays L[1..n1] and R[1..n2]

FOR i = 1 TO n1:
    L[i] = array[left + i - 1]
FOR j = 1 TO n2:
    R[j] = array[mid + j]

i = 1, j = 1, k = left
WHILE i <= n1 AND j <= n2: //Merging Two Sorted Arrays and coping to the original array
    IF L[i] <= R[j]:
        array[k] = L[i]
        i = i + 1
    ELSE:
        array[k] = R[j]
        j = j + 1
    k = k + 1

Copy remaining elements of L[], if any //Coping the remaining array 
Copy remaining elements of R[], if any`,
            working:`
Here's a step-by-step explanation of how merge sort works:

1. Divide:  Divide the list or array recursively into two halves until it can no more be divided. 
2. Conquer:  Each subarray is sorted individually using the merge sort algorithm. 
3. Merge:  The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged. `,
            time:'O(nlog(n)) -> Best, Avg., Worst',
            space:'O(n)',
        },
        'quick-sort': {
            title: 'Quick Sort',
            description: `QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

It works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.`,
            pseudocode:`
// Dividing
function QuickSort(array, low, high):
    if low < high:
        // Partition the array and get the pivot index
        pivotIndex = Partition(array, low, high)

        // Recursively sort elements before and after the pivot
        QuickSort(array, low, pivotIndex - 1)
        QuickSort(array, pivotIndex + 1, high)
// finding pivot 
// pivot is a element such that the smaller numbers are on left side of the pivot and greater on the right side

function Partition(array, low, high): // Choose the last element as the pivot pivot = array[high] i = low - 1 // Index of smaller element
for j = low to high - 1:
    if array[j] <= pivot:
        i = i + 1
        Swap(array[i], array[j])`,
            working:`
There are mainly three steps in the algorithm:

1. Choose a Pivot: Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).
2. Partition the Array: Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.
3. Recursively Call: Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).
4. Base Case: The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.`,
            time:'O(nlog(n)) -> Average case and Best case only , O(n^2) -> Worst case',
            space:'O(1)',
        },
        'heap-sort': {
            title: 'Heap Sort',
            description: `Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.`,
            pseudocode:`
HEAP_SORT(array):
    BUILD_MAX_HEAP(array)
    for i from length(array) - 1 down to 1:
        SWAP(array[0], array[i])  // Move max element to the end
        HEAPIFY(array, 0, i)      // Restore max-heap property for reduced heap

//BUILD_MAX_HEAP(array): for i from floor(length(array) / 2) - 1 down to 0: HEAPIFY(array, i, length(array))
//Haepify is a process in which the heap maintains its property after any change
//HEAPIFY(array, root, size): largest = root left = 2 * root + 1 right = 2 * root + 2

if left < size and array[left] > array[largest]:
    largest = left
if right < size and array[right] > array[largest]:
    largest = right
if largest != root:
    SWAP(array[root], array[largest])
    HEAPIFY(array, largest, size)`,
            working:`
First convert the array into a max heap using heapify, Please note that this happens in-place. The array elements are re-arranged to follow heap properties. 
Then one by one delete the root node of the Max-heap and replace it with the last node and heapify. Repeat this process while size of heap is greater than 1.
1. Rearrange array elements so that they form a Max Heap.
2. Repeat the following steps until the heap contains only one element:
    2.1. Swap the root element of the heap (which is the largest element in current heap) with the last element of the heap.
    2.2. Remove the last element of the heap (which is now in the correct position). We mainly reduce heap size and do not remove element from the actual array.
    2.3. Heapify the remaining elements of the heap.
3. Finally we get sorted array.`,
            time:'O(nlog(n)) -> Best, Avg.,Worst',
            space:'O(1)',
        },
        'bfs': {
            title: '',
            description: ``,
            pseudocode:``,
            working:``,
            time:'',
            space:'',
        },
        'dfs': {
            title: '',
            description: ``,
            pseudocode:``,
            working:``,
            time:'',
            space:'',
        },
        'dijkstra': {
            title: '',
            description: ``,
            pseudocode:``,
            working:``,
            time:'',
            space:'',
        },
    };

    const data = content[algo] || {
        title: 'Not Found',
        description: 'This algorithm is not documented yet.',
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
            <h5>Description</h5>
            <p>{data.description}</p>

            {data.working && (
                <>
                    <h5>Working</h5>
                    <pre>{data.working}</pre>
                </>
            )}
            {data.pseudocode && (
                <>
                    <h5>Pseudocode:</h5>
                    <pre>{data.pseudocode}</pre>
                </>
            )}
            {data.time && data.space && <h5>Complexities</h5>}
            {data.time && <p><strong>Time Complexity:</strong> {data.time}</p>}
            {data.space && <p><strong>Space Complexity:</strong> {data.space}</p>}
        </div>
    );
}
export default AlgoDetails;
