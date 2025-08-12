function AlgoDetails({ algo }) {
    // Simulate data (You can move this to a separate file later)
    const content = {
        'linear-search' : {
            title: 'Linear Search',
            description:`
The linear search algorithm, also known as sequential search, is a fundamental method for locating a specific element within a list or array. It operates by sequentially examining each element of the list, starting from the beginning,until either the target element is found or the entire list has been traversed.
`,
            working: `
1. Initialization: The search begins at the first element of the list (typically at index 0).
2. Comparison: The current element is compared with the target value being searched for.
3. Match Found: If the current element matches the target, the search is successful, and the index or position of the found element is returned. The algorithm then terminates.
4. No Match: If the current element does not match the target, the search proceeds to the next element in the list. 
5. Iteration: Steps 2-4 are repeated for each subsequent element until either a match is found or the end of the list is reached.
6. Element Not Found: If the end of the list is reached without finding the target element, the search is unsuccessful, and a special value (e.g., -1 or null) is returned to indicate that the element is not present`,
            pseudocode: `
FUNCTION LinearSearch(list, target_value):
  FOR EACH element IN list:
    IF element IS EQUAL TO target_value THEN:
      RETURN the index/position of element
    END IF
  END FOR
  RETURN -1 (indicating target_value not found)
END FUNCTION`,
            time: 'O(n) -> Avg.,Worst , O(1) -> Best case',
            space: 'O(1)'
        },
        'binary-search':{
            title:'Binary Search',
            description: `Binary search is an efficient algorithm used to find the position of a target value within a sorted array or list. It operates on the principle of "divide and conquer," significantly reducing the search space in each step.`,
            working: `
Below is the step-by-step algorithm for Binary Search:

1. Divide the search space into two halves by finding the middle index "mid". 
2. Compare the middle element of the search space with the key. 
3. If the key is found at middle element, the process is terminated.
4. If the key is not found at middle element, choose which half will be used as the next search space.
    -> If the key is smaller than the middle element, then the left side is used for next search.
    -> If the key is larger than the middle element, then the right side is used for next search.
5. This process is continued until the key is found or the total search space is exhausted.`,
            pseudocode: `
FUNCTION binarySearch(array, target_value):
  SET low_index = 0
  SET high_index = length(array) - 1

  WHILE low_index <= high_index:
    SET mid_index = low_index + (high_index - low_index) / 2  // Calculate middle index (integer division)

    IF array[mid_index] == target_value:
      RETURN mid_index  // Target found at mid_index
    ELSE IF array[mid_index] < target_value:
      SET low_index = mid_index + 1  // Target is in the right half, discard left
    ELSE: // array[mid_index] > target_value
      SET high_index = mid_index - 1  // Target is in the left half, discard right

  RETURN -1  // Target not found in the array
END FUNCTION`,
            time: `log(n) -> Best, Avg., Worst`,
            space: 'O(1)'
        },
        'bubble-sort': {
            title: 'Bubble Sort',
            description: `Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high. We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on. In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions. In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element.If we keep doing this, we get the largest (among the remaining elements) at its correct position.`,
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
            description: `QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.It works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.`,
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
        'inorder-traversal': {
            title: 'Inorder Traversal',
            description: `
Inorder traversal is a depth-first traversal method that follows this sequence:

1. Left subtree is visited first.
2. Root node is processed next.
3. Right subtree is visited last.`,
            pseudocode:`
PROCEDURE InorderTraversal(node):
    IF node IS NOT NULL:
        // Traverse the left subtree
        InorderTraversal(node.left)

        // Visit the current node (e.g., print its value)
        VISIT node.value

        // Traverse the right subtree
        InorderTraversal(node.right)
END PROCEDURE`,
            working:`
1. Visit the left subtree:
    Recursively traverse the left subtree of the current node, applying the inorder traversal logic (left, root, right) to it.
2. Visit the root:
    Once the left subtree is fully traversed, process (e.g., print or store) the value of the current node.
3. Visit the right subtree:
    Finally, recursively traverse the right subtree, again applying the inorder traversal logic.`,
            time:'O(n) -> all',
            space:'O(1)',
        },
        'preorder-traversal': {
    title: 'Preorder Traversal',
    description: `
Preorder traversal is a depth-first traversal method that visits nodes in this sequence:

1. Root node is processed first.
2. Left subtree is visited next.
3. Right subtree is visited last.`,
    pseudocode:`
PROCEDURE PreorderTraversal(node):
    IF node IS NOT NULL:
        // Visit the current node (e.g., print its value)
        VISIT node.value

        // Traverse the left subtree
        PreorderTraversal(node.left)

        // Traverse the right subtree
        PreorderTraversal(node.right)
END PROCEDURE`,
    working:`
1. Visit the root:
    Process (e.g., print or store) the value of the current node first.
2. Visit the left subtree:
    Recursively traverse the left subtree using the preorder logic (root, left, right).
3. Visit the right subtree:
    After finishing the left subtree, recursively traverse the right subtree.`,
    time: 'O(n) -> all',
    space: 'O(1)',
},

        'postorder-traversal': {
            title: 'Postorder Traversal',
            description: `
Postorder traversal is a depth-first traversal method that processes nodes in this order:

    1. Left subtree is visited first.
    2. Right subtree is visited next.
    3. Root node is processed last.`,
            pseudocode:`
PROCEDURE PostorderTraversal(node):
    IF node IS NOT NULL:
        // Traverse the left subtree
        PostorderTraversal(node.left)

        // Traverse the right subtree
        PostorderTraversal(node.right)

        // Visit the current node (e.g., print its value)
        VISIT node.value
END PROCEDURE`,
            working:`
1. Visit the left subtree:
    Recursively process all nodes in the left subtree using postorder logic (left, right, root).
2. Visit the right subtree:
    After the left subtree is completed, recursively process all nodes in the right subtree.
3. Visit the root:
    Finally, process the current node after both subtrees have been traversed.`,
            time: 'O(n) -> all',
            space: 'O(1)',
        },

        'level-order-traversal': {
            title: 'Level Order Traversal',
            description: `
Level Order Traversal is a breadth-first traversal method that visits nodes level by level from top to bottom, left to right.`,
            pseudocode:`
PROCEDURE LevelOrderTraversal(root):
    IF root IS NULL:
        RETURN

    INITIALIZE queue
    ENQUEUE root INTO queue

    WHILE queue IS NOT EMPTY:
        node = DEQUEUE queue
        VISIT node.value

        IF node.left IS NOT NULL:
            ENQUEUE node.left

        IF node.right IS NOT NULL:
            ENQUEUE node.right
END PROCEDURE`,
            working:`
1. Use a queue data structure:
    Start by enqueuing the root node.
2. Visit each node in FIFO order:
    Dequeue a node, process it, and enqueue its left and right children if they exist.
3. Traverse level by level:
    Continue the process until the queue is empty, ensuring nodes are visited level by level from left to right.`,
            time: 'O(n) -> all',
            space: 'O(n) -> worst case (full last level)',
        },

        'binary-tree': {
            title: 'Binary Tree',
            description: `A binary tree is a fundamental data structure in computer science that organizes data in a hierarchical fashion. Each element in the tree is called a node, and each node can have at most two children: a left child and a right child. 
            
Binary trees use specific terms to describe their structure and components: 

* Root: The top node with no parent.
* Node: The basic element containing data and pointers to children.
* Parent: A node with children.
* Child: A node connected to a parent.
* Sibling: Nodes sharing a parent.
* Leaf: A node with no children.
* Internal Node: A node with at least one child.
* Depth of a Node: Edges from root to node.
* Height of a Tree: Edges on the longest path from root to a leaf.
* Subtree: A part of the tree that is also a binary tree. `,
            operations:`
Common operations performed on binary trees including these
1. insertion
2. deletion
3. searching
4. Traversal methods includes 
    4.1. In-order
    4.2. Pre-order
    4.3. Post-order
    4.4. Level-order `,
            types:`
Various types of binary trees exist, such as 
1. Full BT
2. Complete BT
3. Perfect BT
4. Balanced BT (AVL Trees and Red-Black Trees)`,
            advantages:`Binary trees offer advantages such as efficient searching and sorting in balanced trees and a natural 
representation of hierarchical data. They are also flexible and can be memory-efficient. `,
            disadvantages:`Drawbacks include poor performance in unbalanced trees and memory overhead from pointers in linked 
representations. Balancing self-balancing trees can be complex. `,
            application:`Binary trees are used in numerous applications like file systems, search engines, sorting algorithms,
and databases. They also appear in data compression and machine learning. `,
        },
        'n-array-tree': {
            title: 'N-ary Tree',
            description: `An N-ary tree is a generalization of a binary tree where each node can have at most N children instead of just two. It is commonly used to represent hierarchical data such as organizational structures or file systems.

Terms used:
* Root, Node, Parent, Child, Sibling, Leaf: same as binary tree.
* Degree of a node: Number of children it has.
* Arity of the tree: The maximum degree of any node in the tree.`,
            operations: `
Common operations include:
1. Insertion and deletion of nodes
2. Searching for a value
3. Pre-order, post-order, and level-order traversals (generalized for N children)
            `,
            types: `
Types of N-ary trees may include:
1. Ternary Tree (each node has up to 3 children)
2. Quad Tree (4 children, often used in spatial indexing)
3. General N-ary Trees`,
            advantages: `Useful for representing naturally hierarchical data with more than two branches per node, making it more flexible than binary trees.`,
            disadvantages: `Can be complex to implement and manage, especially in memory-limited environments or when balancing is needed.`,
            application: `Used in file systems, AI (game trees), decision trees, and representing XML/HTML documents.`,
        },
    'perfect-binary-tree': {
        title: 'Perfect Binary Tree',
        description: `A perfect binary tree is a binary tree in which all interior nodes have exactly two children and all leaf nodes are at the same level.`,
        operations: `
Same as binary tree:
1. Insertion (usually results in new perfect tree only if done in specific order)
2. Deletion
3. Traversals: In-order, Pre-order, Post-order, Level-order`,
        types: `
Perfect binary trees are a subset of:
1. Full binary trees
2. Complete binary trees`,
            advantages: `Efficient use of space, predictable structure, optimal search and traversal time.`,
            disadvantages: `Not flexible; insertion or deletion of a single node breaks perfection.`,
            application: `Used in applications like heap sort, balanced tree design, and hardware/system modeling.`,
        },

        'complete-binary-tree': {
            title: 'Complete Binary Tree',
            description: `A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.`,
            operations: `
1. Efficient insertion and deletion at the end
2. Supports heap operations efficiently
3. Standard traversals available`,
            types: `
Complete binary trees can also be:
1. Full binary tree (if all levels are filled)
2. Heap (min-heap or max-heap based on order)`,
            advantages: `Memory-efficient storage in arrays, ensures O(log n) performance for insert/delete in heaps.`,
            disadvantages: `Strict structure may require reordering when inserting or deleting nodes.`,
            application: `Common in heap implementations (priority queues), scheduling systems, and binary heaps.`,
        },

        'binary-search-tree': {
            title: 'Binary Search Tree (BST)',
            description: `A BST is a binary tree where each node's left subtree contains values less than the node, and the right subtree contains values greater than the node.

BST Property:
* For every node:
    left.value < node.value < right.value`,
            operations: `
1. Insertion (based on value)
2. Deletion (with 0, 1, or 2 children cases)
3. Searching
4. Traversals for sorted data (in-order yields sorted order)`,
            types: `
BST variations include:
1. AVL Tree
2. Red-Black Tree
3. Splay Tree`,
            advantages: `Enables fast lookups, insertions, and deletions in average O(log n) time when balanced.`,
            disadvantages: `Can degrade to O(n) if not balanced (e.g., inserting sorted data).`,
            application: `Used in databases, dictionaries, and other structures requiring fast search, insert, and delete operations.`,
        },

        'avl-tree': {
            title: 'AVL Tree',
            description: `An AVL Tree is a self-balancing Binary Search Tree where the difference between heights of left and right subtrees (balance factor) is at most 1 for all nodes.`,
            operations: `
1. Insertion with rebalancing (rotations)
2. Deletion with rebalancing
3. Searching (O(log n))
4. Traversals (In-order, Pre-order, etc.)`,
            types: `
Rotations used:
1. Left Rotation
2. Right Rotation
3. Left-Right Rotation
4. Right-Left Rotation`,
            advantages: `Guarantees O(log n) operations due to strict balancing.`,
            disadvantages: `Slightly more complex insertion and deletion due to rotations.`,
            application: `Used in memory-intensive and time-critical applications where consistently fast lookup is important.`,
        },
        'red-black-tree': {
            title: 'Red-Black Tree',
            description: `A Red-Black Tree is a self-balancing BST where each node has an extra bit for color (red or black), ensuring balanced height via specific rules.

Properties:
1. Every node is either red or black.
2. Root is always black.
3. Red nodes cannot have red children.
4. Every path from a node to its descendant null nodes must have the same number of black nodes.`,
            operations: `
1. Insertion and deletion with color flips and rotations
2. Searching (O(log n))
3. Traversals (standard DFS, BFS)`,
            types: `
Red-black tree is a type of binary search tree with:
1. Automatic balancing
2. Rules-driven color enforcement`,
            advantages: `Efficiently keeps tree balanced without as many rotations as AVL trees.`,
            disadvantages: `Slightly more complex logic; may be less strictly balanced than AVL.`,
            application: `Used in Linux kernel, Java TreeMap, C++ STL maps/sets, and database indices.`,
        },
        'full-binary-tree': {
            title: 'Full Binary Tree',
            description: `A full binary tree (also known as a proper or strictly binary tree) is a binary tree in which every node has either **0 or 2 children** — never exactly one.

This ensures a strict structure where each internal node always has two children, and all leaf nodes are at the same or different levels.`,
            operations: `
Full binary trees support all standard binary tree operations:
1. Insertion (maintaining full property often requires specific construction)
2. Deletion
3. Searching
4. Traversals: In-order, Pre-order, Post-order, Level-order`,
            types: `
Full binary tree is:
1. A subtype of general binary tree
2. Often a base for complete or perfect binary trees`,
            advantages: `Predictable structure, easier to calculate number of nodes (Total nodes = 2L - 1, where L = number of leaf nodes).`,
            disadvantages: `Not flexible for arbitrary insertions/deletions — any change must preserve the strict "0 or 2 children" rule.`,
            application: `Used in compiler design (syntax trees), expression trees, and in theoretical computer science for modeling binary logic structures.`,
},
    'dfs': {
        title: 'Depth First Search (DFS)',
        description: `
DFS is a graph traversal algorithm that explores as far as possible along a branch before backtracking. 
It is typically implemented using recursion or an explicit stack.`,
        pseudocode: `
PROCEDURE DFS(node, visited):
    MARK node AS visited
    VISIT node
    FOR each neighbor in node.neighbors:
        IF neighbor NOT visited:
            DFS(neighbor, visited)
END PROCEDURE`,
        working: `
1. Start from a source node and mark it as visited.
2. Recursively explore each unvisited neighbor.
3. Backtrack when no unvisited neighbors remain.
4. Continue until all reachable nodes are visited.`,
        time: 'O(V + E) → visit all vertices and edges once',
        space: 'O(V) → recursion stack or explicit stack',
    },

    'bfs': {
        title: 'Breadth First Search (BFS)',
        description: `
BFS explores a graph level by level, visiting all neighbors of a node before moving deeper. 
It uses a queue for tracking the next vertex to explore.`,
        pseudocode: `
PROCEDURE BFS(start):
    INITIALIZE queue
    MARK start AS visited
    ENQUEUE start
    WHILE queue NOT empty:
        node = DEQUEUE
        VISIT node
        FOR each neighbor of node:
            IF neighbor NOT visited:
                MARK neighbor AS visited
                ENQUEUE neighbor
END PROCEDURE`,
        working: `
1. Initialize a queue with the starting node.
2. Visit and mark nodes as visited when dequeued.
3. Enqueue unvisited neighbors for future processing.
4. Continue until all reachable nodes are processed.`,
        time: 'O(V + E)',
        space: 'O(V)',
    },

    'dijkstra': {
        title: 'Dijkstra’s Algorithm',
        description: `
Dijkstra’s algorithm finds the shortest path from a single source to all other vertices in a weighted graph with non-negative edge weights.`,
        pseudocode: `
PROCEDURE Dijkstra(graph, source):
    distance[source] = 0
    FOR all vertices v ≠ source:
        distance[v] = ∞
    INITIALIZE min-priority-queue Q with (source, 0)
    WHILE Q NOT empty:
        u = EXTRACT-MIN from Q
        FOR each neighbor v of u:
            IF distance[u] + weight(u, v) < distance[v]:
                distance[v] = distance[u] + weight(u, v)
                UPDATE Q with (v, distance[v])
END PROCEDURE`,
        working: `
1. Initialize distances to ∞ except source = 0.
2. Use a priority queue to repeatedly extract the closest unvisited node.
3. Relax its edges and update neighbor distances.
4. Continue until all nodes have been processed.`,
        time: 'O((V + E) log V) with min-heap',
        space: 'O(V + E)',
    },

    'bellman-ford': {
        title: 'Bellman-Ford Algorithm',
        description: `
Bellman-Ford computes shortest paths from a single source, even with negative edge weights, and detects negative weight cycles.`,
        pseudocode: `
PROCEDURE BellmanFord(graph, source):
    distance[source] = 0
    FOR all vertices v ≠ source:
        distance[v] = ∞
    FOR i = 1 TO V-1:
        FOR each edge (u, v) with weight w:
            IF distance[u] + w < distance[v]:
                distance[v] = distance[u] + w
    FOR each edge (u, v) with weight w:
        IF distance[u] + w < distance[v]:
            REPORT negative cycle
END PROCEDURE`,
        working: `
1. Initialize distances with ∞ except source = 0.
2. Relax all edges V-1 times.
3. Check for changes in a V-th iteration to detect negative cycles.`,
        time: 'O(V * E)',
        space: 'O(V)',
    },

    'floyds-warshall': {
        title: 'Floyd-Warshall Algorithm',
        description: `
Floyd-Warshall computes shortest paths between all pairs of vertices in a weighted graph. Handles negative weights but not negative cycles.`,
        pseudocode: `
PROCEDURE FloydWarshall(dist):
    FOR k = 1 TO V:
        FOR i = 1 TO V:
            FOR j = 1 TO V:
                IF dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
END PROCEDURE`,
        working: `
1. Initialize a matrix with direct edge weights or ∞ if no edge.
2. Iteratively improve paths by checking if a vertex k can be used to shorten the path i→j.
3. After V iterations, matrix contains shortest distances.`,
        time: 'O(V³)',
        space: 'O(V²)',
    },

    'kruskal-for-mst': {
        title: 'Kruskal’s Algorithm (MST)',
        description: `
Kruskal’s algorithm finds a Minimum Spanning Tree by sorting edges by weight and adding them if they don’t form a cycle (using DSU).`,
        pseudocode: `
PROCEDURE Kruskal(edges, V):
    SORT edges by weight
    INITIALIZE DSU
    MST = []
    FOR each edge (u, v, w) in sorted order:
        IF FIND(u) ≠ FIND(v):
            UNION(u, v)
            ADD edge to MST
    RETURN MST
END PROCEDURE`,
        working: `
1. Sort all edges by weight.
2. Use Disjoint Set Union to avoid cycles.
3. Add edges until V-1 edges are chosen.`,
        time: 'O(E log E)',
        space: 'O(V)',
    },

    'tarjan_s-for-bridges': {
        title: 'Tarjan’s Algorithm for Bridges',
        description: `
Tarjan’s bridge-finding algorithm uses DFS timestamps to find edges whose removal increases the number of connected components.`,
        pseudocode: `
PROCEDURE TarjanBridge(u, parent):
    visited[u] = true
    disc[u] = low[u] = time++
    FOR each v in neighbors of u:
        IF v == parent: CONTINUE
        IF NOT visited[v]:
            TarjanBridge(v, u)
            low[u] = MIN(low[u], low[v])
            IF low[v] > disc[u]:
                REPORT (u, v) is a bridge
        ELSE:
            low[u] = MIN(low[u], disc[v])
END PROCEDURE`,
        working: `
1. Perform DFS and assign discovery times.
2. Track the lowest reachable vertex from each node.
3. If a child’s low value is greater than parent’s discovery time, the edge is a bridge.`,
        time: 'O(V + E)',
        space: 'O(V)',
    },

    'tarjan_s-for-articulation': {
        title: 'Tarjan’s Algorithm for Articulation Points',
        description: `
Finds articulation points (cut vertices) whose removal increases the number of connected components.`,
        pseudocode: `
PROCEDURE TarjanAP(u, parent):
    visited[u] = true
    disc[u] = low[u] = time++
    childCount = 0
    FOR each v in neighbors of u:
        IF v == parent: CONTINUE
        IF NOT visited[v]:
            childCount++
            TarjanAP(v, u)
            low[u] = MIN(low[u], low[v])
            IF parent != NULL AND low[v] >= disc[u]:
                REPORT u as articulation point
        ELSE:
            low[u] = MIN(low[u], disc[v])
    IF parent == NULL AND childCount > 1:
        REPORT u as articulation point
END PROCEDURE`,
        working: `
1. Use DFS timestamps and low values.
2. Root is articulation point if it has >1 DFS child.
3. Non-root u is articulation point if any child v has low[v] ≥ disc[u].`,
        time: 'O(V + E)',
        space: 'O(V)',
    },

    'kosaraju_s-for-scc': {
        title: 'Kosaraju’s Algorithm (SCC)',
        description: `
Kosaraju’s algorithm finds all Strongly Connected Components (SCCs) in a directed graph using two DFS passes.`,
        pseudocode: `
PROCEDURE Kosaraju(G):
    INITIALIZE empty stack
    FOR each vertex v in G:
        IF v NOT visited:
            DFS1(v, stack)
    TRANSPOSE G to GT
    RESET visited
    WHILE stack NOT empty:
        v = POP stack
        IF v NOT visited:
            DFS2(v) → forms an SCC
END PROCEDURE`,
        working: `
1. First DFS to fill vertices in stack by finishing times.
2. Reverse graph edges.
3. DFS in order of decreasing finish times to get SCCs.`,
        time: 'O(V + E)',
        space: 'O(V + E)',
    },

    'graph-coloring': {
        title: 'Graph Coloring',
        description: `
Assign colors to vertices so that no two adjacent vertices share the same color, minimizing the number of colors used.`,
        pseudocode: `
PROCEDURE GraphColoring(G):
    color[] = UNASSIGNED
    FOR each vertex u in G:
        availableColors = {all colors}
        FOR each neighbor v of u:
            IF color[v] is assigned:
                REMOVE color[v] from availableColors
        color[u] = FIRST available color
END PROCEDURE`,
        working: `
1. Process vertices in some order.
2. Assign the smallest available color not used by adjacent vertices.
3. Continue until all vertices are colored.`,
        time: 'O(V²) for adjacency matrix, O(V + E) for adjacency list with efficient color tracking',
        space: 'O(V)',
    },
    'segment-tree': {
    title: 'Segment Tree',
    description: `
A Segment Tree is a binary tree data structure used for storing information about intervals or segments.
It allows efficient querying and updating of range-based operations such as sum, minimum, or maximum in an array.
It is especially useful when there are multiple queries and updates on an array.`,
    pseudocode: `
PROCEDURE BuildTree(arr, tree, node, start, end):
    IF start == end:
        tree[node] = arr[start]
    ELSE:
        mid = (start + end) / 2
        BuildTree(arr, tree, 2*node, start, mid)
        BuildTree(arr, tree, 2*node+1, mid+1, end)
        tree[node] = tree[2*node] + tree[2*node+1]   // For sum query

PROCEDURE Query(tree, node, start, end, L, R):
    IF R < start OR end < L:
        RETURN 0   // No overlap
    IF L <= start AND end <= R:
        RETURN tree[node]  // Complete overlap
    mid = (start + end) / 2
    leftQuery = Query(tree, 2*node, start, mid, L, R)
    rightQuery = Query(tree, 2*node+1, mid+1, end, L, R)
    RETURN leftQuery + rightQuery

PROCEDURE Update(arr, tree, node, start, end, idx, val):
    IF start == end:
        arr[idx] = val
        tree[node] = val
    ELSE:
        mid = (start + end) / 2
        IF idx <= mid:
            Update(arr, tree, 2*node, start, mid, idx, val)
        ELSE:
            Update(arr, tree, 2*node+1, mid+1, end, idx, val)
        tree[node] = tree[2*node] + tree[2*node+1]
    `,
    working: `
1.Build Phase: Recursively divide the array into halves until each segment contains one element (leaf node).
2.Query Phase: For a given range, check if it overlaps with the current node's range.
   - If no overlap, return 0 (or infinity/min/max depending on problem).
   - If complete overlap, return the value stored in the current node.
   - If partial overlap, recursively query left and right children and combine results.
3.Update Phase: Update the element in the array and reflect the change in all relevant parent nodes.
    `,
    time: 'O(N) to build, O(log N) for query and update',
    space: 'O(4N) to store the segment tree array',
},
'trie': {
    title: 'Trie (Prefix Tree)',
    description: `
A tree-like data structure used to store strings, where each node represents a character of the string. 
Efficient for prefix-based searches, autocomplete systems, and dictionary word lookups.`,
    pseudocode: `
PROCEDURE Insert(root, word):
    node = root
    FOR each char c in word:
        IF node.children[c] does not exist:
            node.children[c] = new Node()
        node = node.children[c]
    node.isEndOfWord = TRUE

PROCEDURE Search(root, word):
    node = root
    FOR each char c in word:
        IF node.children[c] does not exist:
            RETURN FALSE
        node = node.children[c]
    RETURN node.isEndOfWord

PROCEDURE StartsWith(root, prefix):
    node = root
    FOR each char c in prefix:
        IF node.children[c] does not exist:
            RETURN FALSE
        node = node.children[c]
    RETURN TRUE`,
    working: `
1. Each node contains links to child nodes for each possible character and a flag marking end of word.
2. Insertion: Traverse character by character, creating nodes as needed.
3. Search: Traverse down the tree; return true if final node marks end of word.
4. Prefix search: Similar to search but without requiring end-of-word flag.`,
    time: 'O(L) per operation, where L is the length of the string/prefix',
    space: 'O(ALPHABET_SIZE × N × L) in worst case (N = number of words, L = avg length)',
},

'dsu': {
    title: 'Disjoint Set Union (Union-Find)',
    description: `
A data structure that keeps track of elements split into disjoint sets. 
Supports two main operations: finding the set a particular element belongs to, and uniting two sets.`,
    pseudocode: `
PROCEDURE Find(x):
    IF parent[x] != x:
        parent[x] = Find(parent[x])  // Path compression
    RETURN parent[x]

PROCEDURE Union(x, y):
    rootX = Find(x)
    rootY = Find(y)
    IF rootX != rootY:
        IF rank[rootX] < rank[rootY]:
            parent[rootX] = rootY
        ELSE IF rank[rootX] > rank[rootY]:
            parent[rootY] = rootX
        ELSE:
            parent[rootY] = rootX
            rank[rootX] += 1`,
    working: `
1. Initially, each element is its own parent.
2. Find(x): Recursively find the root of x, compressing the path to speed future queries.
3. Union(x, y): Attach the smaller rank tree under the root of the larger rank tree.
4. Used in Kruskal's algorithm, network connectivity, cycle detection, etc.`,
    time: 'O(α(N)) per operation (α = inverse Ackermann function, very slow growing)',
    space: 'O(N) for parent and rank arrays',
}  
};

    const data = content[algo] || {
        title: 'Not Found',
        description: 'This algorithm is not documented yet.',
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
            <h5>Description</h5>
            <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.description}</pre>

            {data.working && (
                <>
                    <h5>Working</h5>
                    <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.working}</pre>
                </>
            )}
            {data.operations && (
                <>
                <h5>Operations</h5>
                <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.operations}</pre>
                </>
            )}
            {data.types && (
                <>
                <h5>Types</h5>
                <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.types}</pre>
                </>
            )}
            {data.advantages && (
                <>
                <h5>Advantages</h5>
                <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.advantages}</pre>
                </>
            )}
            {data.disadvantages && (
                <>
                <h5>Disadvantages</h5>
                <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.disadvantages}</pre>
                </>
            )}
            {data.pseudocode && (
                <>
                    <h5>Pseudocode:</h5>
                    <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{data.pseudocode}</pre>
                </>
            )}
            {data.time && data.space && <h5>Complexities</h5>}
            {data.time && <p><strong>Time Complexity:</strong> {data.time}</p>}
            {data.space && <p><strong>Space Complexity:</strong> {data.space}</p>}
        </div>
    );
}
export default AlgoDetails;
