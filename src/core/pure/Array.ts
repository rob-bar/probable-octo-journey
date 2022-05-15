export function average(input: number[]): number {
  return input.reduce((a, b) => a + b) / input.length
}

export function mode(array: string[]): string | null {
  if (array.length == 0) return null
  var modeMap: { [key: string]: number } = {}
  var maxEl = array[0],
    maxCount = 1

  for (var i = 0; i < array.length; i++) {
    var el: string = array[i]

    if (modeMap[el] == null) {
      modeMap[el] = 1
    } else {
      modeMap[el]++
    }

    if (modeMap[el] > maxCount) {
      maxEl = el
      maxCount = modeMap[el]
    }
  }
  return maxEl
}
