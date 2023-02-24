import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("render correctly", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  it("accept and render initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
    act(() => {
      result.current.decrement();
      result.current.decrement();
    });
    expect(result.current.count).toBe(9);
  });
});
