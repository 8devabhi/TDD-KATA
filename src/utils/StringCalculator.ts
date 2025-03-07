export class StringCalculator {
  add(numeralString: string): number {
    if (!numeralString) return 0;
    const splittedNumberList = numeralString.split(",").map(Number);
    if (splittedNumberList?.length === 1) {
      return splittedNumberList[0]
    }
    return (splittedNumberList[0] + splittedNumberList[1]);
  }
}
