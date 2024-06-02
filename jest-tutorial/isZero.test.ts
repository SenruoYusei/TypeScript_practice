import { isZero } from "./isZero";

test("0 を渡したら true になること", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("1 を渡したら false になること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});