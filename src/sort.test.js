const { bubbleSort } = require('./sort')

describe('bubbleSort()', () => {
  it('sorts an array of ints', () => {
    const sample = [8,2,9,4,5,7,3,1,6]

    expect(bubbleSort(sample)).toEqual([1,2,3,4,5,6,7,8,9])
  })
})