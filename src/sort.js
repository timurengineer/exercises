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

module.exports = {
  bubbleSort,
  selectionSort,
}