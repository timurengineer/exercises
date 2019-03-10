const {
  bubbleSort,
  selectionSort,
  insertionSort,
  splitInHalf,
  mergeArrays,
  mergeSortRecursive,
  mergeSort,
} = require('./sort')

describe('bubbleSort()', () => {
  it('sorts an array of ints in asc order', () => {
    const sample = [8,2,9,4,5,7,3,1,6]

    expect(bubbleSort(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})

describe('selectionSort()', () => {
  it('sorts an array of ints in asc order', () => {
    const sample = [8,2,9,4,5,7,3,1,6]

    expect(selectionSort(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})

describe('insertionSort()', () => {
  it('sorts an array of ints in asc order', () => {
    const sample = [8,2,9,4,5,7,3,1,6]
    
    expect(insertionSort(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})

describe('splitInHalf()', () => {
  it('split an array in half', () => {
    const sample = [8,2,9,4,5,7,3,1,6]
    
    expect(splitInHalf(sample)).toEqual({
      left: [8,2,9,4],
      right: [5,7,3,1,6],
    })
  })
})

describe('mergeArrays()', () => {
  it('merges two sorted arrays', () => {
    const left = [2,7,9]
    const right = [4,8]
    
    expect(mergeArrays(left, right)).toEqual([2,4,7,8,9])
  })
})

describe('mergeSortRecursive()', () => {
  it('sorts an array of ints in asc order', () => {
    const sample = [8,2,9,4,5,7,3,1,6]
    
    expect(mergeSortRecursive(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})

describe('mergeSort()', () => {
  it('sorts an array of ints in asc order, odd length', () => {
    const sample = [8,2,9,4,5,7,3,1,6]
    
    expect(mergeSort(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })

  it('sorts an array of ints in asc order, even length', () => {
    const sample = [8,2,4,5,7,3,1,6]
    
    expect(mergeSort(sample)).toEqual([1,2,3,4,5,6,7,8])
  })
})
