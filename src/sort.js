const bubbleSort = (input) => {
  const result = input.slice()
  let changed = true

  while (changed) {
    changed = false

    for (let i = 0; i < input.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        const temp = result[i]
  
        result[i] = result[i + 1]
        result[i + 1] = temp
        changed = true
      }
    }
  }

  return result
}

const selectionSort = (input) => {
  const result = input.slice()

  if (result.length < 2) {
    return result
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[i]) {
        const temp = result[i]

        result[i] = result[j]
        result[j] = temp
      }
    }
  }

  return result
}

const insertionSort = (input) => {
  const result = input.slice()

  for (let i = 1; i < result.length; i++) {
    const current = result[i]
    let j = null

    for (j = i - 1; j >= 0 && result[j] > current; j--) {
      result[j + 1] = result[j]
    }

    result[j + 1] = current
  }

  return result
}

const splitInHalf = (array) => {
  const mid = Math.floor(array.length / 2)

  return {
    left: array.slice(0, mid),
    right: array.slice(mid)
  }
}

const mergeArrays = (left, right) => {
  const result = []
  const resultLength = left.length + right.length
  let leftIndex = 0
  let rightIndex = 0

  for (let i = 0; i < resultLength; i++) {
    if (leftIndex >= left.length) {
      result.push(right[rightIndex])
      rightIndex++
    } else if (rightIndex >= right.length) {
      result.push(left[leftIndex])
      leftIndex++
    } else if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result
}

const mergeSort = (input) => {
  if (input.length < 2) {
    return input
  }

  const { left, right } = splitInHalf(input)

  return mergeArrays(mergeSort(left), mergeSort(right))
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  splitInHalf,
  mergeArrays,
}
