export class StringCalculator {
  add(numeralString: string): number {
    if (!numeralString) return 0;
    const splittedNumberList = numeralString.split(",").map(Number);
    return (splittedNumberList[0] + splittedNumberList[1]);
  }
}
