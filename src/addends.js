const addendsRecursive = (n, sum = 0) => {
  if (sum === n) {
    return 1
  }
  if (sum > n) {
    return 0
  }

  return addendsRecursive(n, sum + 1) + addendsRecursive(n, sum + 2) + addendsRecursive(n, sum + 3)
}

const addends = (n) => {
  let stairs = [1,1,2]

  for (let i = 3; i <= n; i++) {
      stairs[i] = stairs[i - 1] + stairs[i - 2] + stairs[i - 3]
  }

  return stairs[n]
}

module.exports = {
  addendsRecursive,
  addends,
}
