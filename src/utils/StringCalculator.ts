export class StringCalculator {
  add(numeralString: string): number {
    if (!numeralString) return 0;
    return numeralString.split(",").map(Number).reduce((prev, next) => prev + next, 0);
  }
}
