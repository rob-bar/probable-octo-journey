export function average(input: number[]): number {
  return input.reduce((a, b) => a + b) / input.length
}
