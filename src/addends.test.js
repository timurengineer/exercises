const { addends } = require('./addends')

describe('addends', () => {
  it('returns number of possible solutions', () => {
    expect(addends(3)).toEqual(4)
  })

  it('returns number of possible solutions', () => {
    expect(addends(1)).toEqual(1)
  })
})
