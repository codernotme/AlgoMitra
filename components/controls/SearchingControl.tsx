export type SearchResult = {
  index: number; // Found index, or -1 if not found
  steps: number; // Number of steps taken to find the result
  path?: number[]; // Path taken (useful for graph-based searches like DFS, BFS, A*)
};

// Linear Search
export function linearSearch(arr: number[], target: number): SearchResult {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) {
      return { index: i, steps };
    }
  }
  return { index: -1, steps };
}

// Binary Search (Assumes sorted array)
export function binarySearch(arr: number[], target: number): SearchResult {
  let left = 0,
    right = arr.length - 1,
    steps = 0;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return { index: mid, steps };
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return { index: -1, steps };
}

// Depth-First Search (DFS) for graph traversal
export function depthFirstSearch(
  graph: number[][],
  start: number,
  target: number
): SearchResult {
  const stack = [start];
  const visited = new Set<number>();
  let steps = 0;
  const path: number[] = [];

  while (stack.length) {
    const node = stack.pop();
    if (node === undefined) break;
    steps++;
    if (visited.has(node)) continue;
    visited.add(node);
    path.push(node);

    if (node === target) return { index: node, steps, path };

    for (const neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
  return { index: -1, steps, path };
}

// Breadth-First Search (BFS) for graph traversal
export function breadthFirstSearch(
  graph: number[][],
  start: number,
  target: number
): SearchResult {
  const queue = [start];
  const visited = new Set<number>();
  let steps = 0;
  const path: number[] = [];

  while (queue.length) {
    const node = queue.shift();
    if (node === undefined) break;
    steps++;
    if (visited.has(node)) continue;
    visited.add(node);
    path.push(node);

    if (node === target) return { index: node, steps, path };

    for (const neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  return { index: -1, steps, path };
}

// Jump Search (Assumes sorted array)
export function jumpSearch(arr: number[], target: number): SearchResult {
  const length = arr.length;
  let step = Math.floor(Math.sqrt(length));
  let steps = 0;
  let prev = 0;

  while (arr[Math.min(step, length) - 1] < target) {
    steps++;
    prev = step;
    step += Math.floor(Math.sqrt(length));
    if (prev >= length) return { index: -1, steps };
  }

  for (let i = prev; i < Math.min(step, length); i++) {
    steps++;
    if (arr[i] === target) return { index: i, steps };
  }
  return { index: -1, steps };
}

// Interpolation Search (Assumes sorted and uniformly distributed array)
export function interpolationSearch(
  arr: number[],
  target: number
): SearchResult {
  let low = 0,
    high = arr.length - 1,
    steps = 0;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    steps++;
    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    if (arr[pos] === target) return { index: pos, steps };
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  return { index: -1, steps };
}

// Exponential Search (Assumes sorted array)
export function exponentialSearch(arr: number[], target: number): SearchResult {
  if (arr[0] === target) return { index: 0, steps: 1 };
  let steps = 1;
  let bound = 1;

  while (bound < arr.length && arr[bound] < target) {
    steps++;
    bound *= 2;
  }
  const result = binarySearch(
    arr.slice(bound / 2, Math.min(bound + 1, arr.length)),
    target
  );
  return {
    index: result.index === -1 ? -1 : result.index + bound / 2,
    steps: steps + result.steps,
  };
}

// Best-First Search (Greedy Search)
export function bestFirstSearch(
  graph: number[][],
  start: number,
  target: number,
  heuristic: (node: number) => number
): SearchResult {
  const queue = [{ node: start, cost: 0 }];
  const visited = new Set<number>();
  let steps = 0;
  const path: number[] = [];

  while (queue.length) {
    steps++;
    queue.sort((a, b) => heuristic(a.node) - heuristic(b.node));
    const { node } = queue.shift()!;
    if (visited.has(node)) continue;
    visited.add(node);
    path.push(node);

    if (node === target) return { index: node, steps, path };

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) queue.push({ node: neighbor, cost: steps });
    }
  }
  return { index: -1, steps, path };
}

// A* Search
export function aStarSearch(
  graph: number[][],
  start: number,
  target: number,
  heuristic: (node: number) => number
): SearchResult {
  const openSet = new Set<number>([start]);
  const cameFrom = new Map<number, number>();
  const gScore = new Map<number, number>().set(start, 0);
  const fScore = new Map<number, number>().set(start, heuristic(start));
  let steps = 0;
  const path: number[] = [];

  while (openSet.size > 0) {
    let current: number | null = null;

    for (let node of openSet) {
      if (
        current === null ||
        (fScore.get(node) ?? Infinity) < (fScore.get(current) ?? Infinity)
      ) {
        current = node;
      }
    }
    steps++;
    if (current === null || current === target) break;

    openSet.delete(current);
    for (let neighbor of graph[current]) {
      const tentativeGScore = (gScore.get(current) ?? Infinity) + 1;
      if (tentativeGScore < (gScore.get(neighbor) ?? Infinity)) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentativeGScore);
        fScore.set(neighbor, tentativeGScore + heuristic(neighbor));
        openSet.add(neighbor);
      }
    }
  }

  if (!cameFrom.has(target)) return { index: -1, steps, path };

  let node = target;
  while (node !== start) {
    path.push(node);
    node = cameFrom.get(node)!;
  }
  path.push(start);
  return { index: target, steps, path: path.reverse() };
}

// Fibonacci Search (Assumes sorted array)
export function fibonacciSearch(arr: number[], target: number): SearchResult {
  const length = arr.length;
  let fibM2 = 0,
    fibM1 = 1,
    fibM = fibM2 + fibM1,
    steps = 0;

  while (fibM < length) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    steps++;
    const i = Math.min(offset + fibM2, length - 1);
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 -= fibM2;
      fibM2 = fibM - fibM1;
    } else return { index: i, steps };
  }

  if (fibM1 && arr[offset + 1] === target) return { index: offset + 1, steps };
  return { index: -1, steps };
}
