import { pipe } from "./index";

describe("pipe", () => {
  it("should transform value using functions provided to to-operators", () => {
    const result = pipe("string")
      .to(s => s + "-test")
      .out(s => s.length * 2);

    expect(result).toEqual("string-test".length * 2);
  });

  it("should call curried functions with arguments provided to to-operators", () => {
    const addParsed = (a: number, b: string, radix: number = 16) =>
      a + parseInt(b, radix);
    const result = pipe("13")
      .to(parseInt, 10)
      .to(String.prototype.replace.call, "")
      .out(addParsed, "10", 10);
    expect(result).toEqual(23);
  });
});
