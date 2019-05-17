const addends = (n, sum = 0) => {
  if (sum === n) {
    return 1
  }
  if (sum > n) {
    return 0
  }

  return addends(n, sum + 1) + addends(n, sum + 2) + addends(n, sum + 3)
}

module.exports = {
  addends,
}
