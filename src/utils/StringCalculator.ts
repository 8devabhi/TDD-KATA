export class StringCalculator {

  private static readonly DEFAULT_DELIMITER_REGEX = /,|\n/;
  private static readonly CUSTOM_DELIMITER_PATTERN = /^\/\/(.+)\n/;
  private callCount = 0;

  add(inputString: string): number {
    this.callCount++;
    if (!inputString) return 0;
    const { delimiter, numberString } = this.extractDelimiter(inputString);
    const numberList = this.convertNumeralStringToArray(numberString, delimiter);
    this.throwIfNegative(numberList);
    return this.calculateSum(numberList);
  }
  public getCalledCount(): number {
    return this.callCount;
  }
  private convertNumeralStringToArray(numeralString: string, delimiter: RegExp): number[] {
    return numeralString.split(delimiter).map(Number);
  }
  private extractDelimiter(numeralString: string): { delimiter: RegExp; numberString: string } {
    const match = numeralString.match(StringCalculator.CUSTOM_DELIMITER_PATTERN);

    if (match) {
      const customDelimiter = match[1];
      const numberString = numeralString.replace(StringCalculator.CUSTOM_DELIMITER_PATTERN, "");
      return { delimiter: new RegExp(customDelimiter), numberString };
    }

    return { delimiter: StringCalculator.DEFAULT_DELIMITER_REGEX, numberString: numeralString };
  }
  private throwIfNegative(numberArray: number[]): void {
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
