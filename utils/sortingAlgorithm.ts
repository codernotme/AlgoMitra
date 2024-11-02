export function bubbleSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      steps.push([...array]);
    }
  }
  return steps;
}

export function selectionSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    steps.push([...array]);
  }
  return steps;
}

export function insertionSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
    steps.push([...array]);
  }
  return steps;
}

export function mergeSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];

  function merge(left: number[], right: number[]) {
    const result: number[] = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) result.push(left[i++]);
      else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  function sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));
    const merged = merge(left, right);
    steps.push([...merged]);
    return merged;
  }

  sort(array);
  return steps;
}

export function quickSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];

  function sort(arr: number[], low: number, high: number) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      steps.push([...arr]);
      sort(arr, low, pivotIndex - 1);
      sort(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  sort(array, 0, array.length - 1);
  return steps;
}

export function heapSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];

  function heapify(arr: number[], n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
    steps.push([...array]);
  }
  return steps;
}

export function shellSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      const temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
    }
    steps.push([...array]);
    gap = Math.floor(gap / 2);
  }
  return steps;
}

export function countingSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);

  for (const num of array) count[num]++;
  for (let i = 1; i <= max; i++) count[i] += count[i - 1];
  
  const output = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }
  
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
    steps.push([...array]);
  }
  return steps;
}

export function radixSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];

  function countingSortForRadix(arr: number[], exp: number) {
    const output = new Array(arr.length);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      const index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
  }

  const max = Math.max(...array);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(array, exp);
    steps.push([...array]);
  }
  return steps;
}

export function bucketSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const array = [...arr];
  if (array.length === 0) return steps;

  const max = Math.max(...array);
  const size = Math.floor(max / array.length) + 1;
  const buckets: number[][] = Array.from({ length: size }, () => []);

  for (const num of array) {
    const index = Math.floor(num / size);
    buckets[index].push(num);
  }

  for (const bucket of buckets) {
    if (bucket.length) {
      insertionSort(bucket);
      steps.push([...bucket]);
    }
  }

  return steps;
}

export function timSort(arr: number[]): number[][] {
  const steps: number[][] = [];
  const RUN = 32;

  // Utility function to perform insertion sort on a portion of the array
  function insertionSort(arr: number[], left: number, right: number) {
    for (let i = left + 1; i <= right; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (j >= left && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
      steps.push([...arr]); // Capture the step
    }
  }

  // Merge function to merge two sorted portions of the array
  function merge(arr: number[], left: number, mid: number, right: number) {
    const len1 = mid - left + 1;
    const len2 = right - mid;
    const leftArr = new Array(len1);
    const rightArr = new Array(len2);

    for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
    for (let i = 0; i < len2; i++) rightArr[i] = arr[mid + 1 + i];

    let i = 0, j = 0, k = left;
    while (i < len1 && j < len2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
      steps.push([...arr]); // Capture the step
    }

    while (i < len1) {
      arr[k] = leftArr[i];
      i++;
      k++;
      steps.push([...arr]); // Capture the step
    }

    while (j < len2) {
      arr[k] = rightArr[j];
      j++;
      k++;
      steps.push([...arr]); // Capture the step
    }
  }

  // Sort individual subarrays of size RUN using insertion sort
  for (let i = 0; i < arr.length; i += RUN) {
    insertionSort(arr, i, Math.min(i + RUN - 1, arr.length - 1));
  }

  // Start merging from size RUN, double the size each iteration
  for (let size = RUN; size < arr.length; size = 2 * size) {
    for (let left = 0; left < arr.length; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, arr.length - 1);

      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
  }

  return steps;
}
