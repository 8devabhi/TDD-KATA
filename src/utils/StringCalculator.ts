export class StringCalculator {

  private static readonly DELIMITER_REGEX = /,|\n/;

  add(numeralString: string): number {
    if (!numeralString) return 0;
    const numberList = this.convertNumeralStringToArray(numeralString);
    return this.calculateSum(numberList);
  }
  private convertNumeralStringToArray(numbers: string): number[] {
    return numbers.split(StringCalculator.DELIMITER_REGEX).map(Number);
  }
  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
