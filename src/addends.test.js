const { addendsRecursive, addends } = require('./addends')

describe('addendsRecursive', () => {
  it('returns number of possible solutions', () => {
    expect(addendsRecursive(3)).toEqual(4)
  })

  it('returns number of possible solutions', () => {
    expect(addendsRecursive(1)).toEqual(1)
  })
})

describe('addends', () => {
  it('returns number of possible solutions', () => {
    expect(addends(3)).toEqual(4)
  })

  it('returns number of possible solutions', () => {
    expect(addends(1)).toEqual(1)
  })
})
