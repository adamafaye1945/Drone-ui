export function areAllNumbers(arr: string[]): boolean {
  return arr.every((item) => {
    const num = Number(item); // Explicit conversion to number
    return !isNaN(num) && item.trim() !== ""; // Ensure it's a valid number and not empty
  });
}
export function convertBackToNumberArray(item: string[]): [number, number] {
  return [Number(item[0]), Number(item[1])];
}

export const generateRandomID = (): string =>
  Math.random().toString(36).substring(2, 8);

export function isValidInput(input: string): boolean {
  return /^[A-Za-z0-9]+$/.test(input);
}
