export class StringCalculator {
  /** Default delimiters: comma (,) and newline (\n) */
  private static readonly DEFAULT_DELIMITER_REGEX = /,|\n/;
  /** Pattern to detect and extract custom delimiters from input (e.g., "//;\n1;2") */
  private static readonly CUSTOM_DELIMITER_PATTERN = /^\/\/(.+)\n/;
  /** Counter to track how many times `add()` method has been invoked */
  private callCount = 0;

  /**
   * Parses a string of numbers, applies custom delimiters if specified,
   * validates the input, and returns the sum of the numbers.
   *
   * @param inputString - The string containing numbers separated by delimiters.
   * @returns The sum of the numbers in the input string.
   * @throws If negative numbers are found, an exception is thrown.
   */
  add(inputString: string): number {
    this.incrementCallCount();
    if (!inputString) return 0;
    const { delimiter, numberString } = this.extractDelimiter(inputString);
    const numberList = this.convertNumeralStringToArray(
      numberString,
      delimiter
    );
    this.throwIfNegative(numberList);
    return this.calculateSum(this.filterValidNumbers(numberList));
  }
  /**
   * Returns the number of times `add()` method has been called.
   *
   * @returns The total count of `add()` method invocations.
   */
  public getCalledCount(): number {
    return this.callCount;
  }
  /**
   * Increments the counter tracking the number of times `add()` is called.
   */
  private incrementCallCount(): void {
    this.callCount++;
  }
  /**
   * Converts a formatted numeral string into an array of numbers
   * using the specified delimiter.
   *
   * @param numeralString - The string of numbers separated by a delimiter.
   * @param delimiter - A regular expression representing the delimiter(s).
   * @returns An array of parsed numbers.
   */
  private convertNumeralStringToArray(
    numeralString: string,
    delimiter: RegExp
  ): number[] {
    return numeralString.split(delimiter).map(Number);
  }
  /**
   * Extracts the delimiter from the input string if a custom delimiter is specified.
   * Otherwise, returns the default delimiter.
   *
   * @param numeralString - The input string, which may start with a custom delimiter.
   * @returns An object containing the resolved delimiter and the cleaned number string.
   */
  private extractDelimiter(numeralString: string): {
    delimiter: RegExp;
    numberString: string;
  } {
    const match = numeralString.match(
      StringCalculator.CUSTOM_DELIMITER_PATTERN
    );

    if (!match) {
      return {
        delimiter: StringCalculator.DEFAULT_DELIMITER_REGEX,
        numberString: numeralString,
      };
    }

    const { delimiterPattern, numberString } = this.parseCustomDelimiters(
      match[1],
      numeralString
    );
    return { delimiter: new RegExp(delimiterPattern), numberString };
  }
  /**
   * Parses custom delimiters from the input string and returns the delimiter pattern
   * along with the cleaned number string.
   */
  private parseCustomDelimiters(
    delimiters: string,
    numeralString: string
  ): { delimiterPattern: string; numberString: string } {
    const multipleDelimiterMatch = delimiters.match(/\[([^\]]+)]/g);

    if (multipleDelimiterMatch) {
      // Extract delimiters from [delim1][delim2] and escape special regex characters
      const delimiterList = multipleDelimiterMatch.map((d) =>
        this.escapeRegex(d.slice(1, -1))
      );
      return {
        delimiterPattern: delimiterList.join("|"),
        numberString: numeralString.replace(
          StringCalculator.CUSTOM_DELIMITER_PATTERN,
          ""
        ),
      };
    }

    // Single-character delimiter case
    return {
      delimiterPattern: this.escapeRegex(delimiters),
      numberString: numeralString.replace(
        StringCalculator.CUSTOM_DELIMITER_PATTERN,
        ""
      ),
    };
  }
  /**
   * Escapes special regex characters in delimiters.
   */
  private escapeRegex(delimiter: string): string {
    return delimiter.replace(/[-/\\^$*+?.()|{}]/g, "\\$&");
  }
  /**
   * Checks if the given array contains negative numbers and throws an error if found.
   *
   * @param numberArray - The array of numbers to validate.
   * @throws If negative numbers are found, an exception is thrown listing them.
   */
  private throwIfNegative(numberArray: number[]): void {
    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
  /**
   * Filters out numbers greater than 1000.
   * @param numbers - The list of numbers extracted from the input string.
   * @returns A new array excluding numbers greater than 1000.
   */
  private filterValidNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num <= 1000);
  }
  /**
   * Calculates the sum of an array of numbers.
   *
   * @param numbers - The array of numbers to sum up.
   * @returns The total sum of the numbers.
   */
  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
