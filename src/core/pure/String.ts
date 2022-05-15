export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function zeroFill(i: number): string {
  return (i < 10 ? "0" : "") + i
}
