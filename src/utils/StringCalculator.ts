export class StringCalculator {

  private static readonly DEFAULT_DELIMITER_REGEX = /,|\n/;
  private static readonly CUSTOM_DELIMITER_PATTERN = /^\/\/(.+)\n/;

  add(inputString: string): number {
    if (!inputString) return 0;
    const { delimiter, numberString } = this.extractDelimiter(inputString);
    const numberList = this.convertNumeralStringToArray(numberString, delimiter);
    return this.calculateSum(numberList);
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
  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
