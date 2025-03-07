export class StringCalculator {

  private static readonly DELIMITER_REGEX = /,|\n/;

  add(numeralString: string): number {
    if (!numeralString) return 0;
    const numberList = this.convertNumeralStringToArray(numeralString);
    return this.calculateSum(numberList);
  }
  private convertNumeralStringToArray(numeralString: string): number[] {
    let delimiterRegex = StringCalculator.DELIMITER_REGEX;
    if (numeralString.startsWith("//")) {
      const match = numeralString.match(/^\/\/(.+)\n/);
      if (match) {
        delimiterRegex = new RegExp(`[${match[1]}]`);
        numeralString = numeralString.replace(/^\/\/.+\n/, "");
      }
    }
    return numeralString.split(delimiterRegex).map(Number);
  }
  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
