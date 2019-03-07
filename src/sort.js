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

module.exports = {
  bubbleSort,
}
