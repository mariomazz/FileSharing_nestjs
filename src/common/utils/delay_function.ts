export function delay(fn: () => void, ms: number) {
  return new Promise(() => setTimeout(fn, ms));
}
