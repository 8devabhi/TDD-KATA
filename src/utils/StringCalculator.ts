export class StringCalculator {
  add(numeralString: string): number {
    if (!numeralString) return 0;
    return numeralString.split(/,|\n/).map(Number).reduce((sum, num) => sum + num, 0);
  }
}
