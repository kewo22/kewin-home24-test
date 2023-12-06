import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../common/ui/atom/Button";

describe("Button Component", () => {
  it("should render button and click fires", () => {
    const onClickButton = jest.fn();

    render(<Button onClick={onClickButton} testid="btn" />);
    const btn = screen.getByTestId("btn");

    fireEvent.click(btn);

    expect(onClickButton).toHaveBeenCalled();
  });

  it("should render children", () => {
    render(<Button testid="btn" children={<>Click</>} />);

    const btn = screen.getByTestId("btn");

    expect(btn.textContent).toBe("Click");
  });

  it("should render large btn", () => {
    render(<Button testid="btn" size="lg" />);

    const btn = screen.getByTestId("btn");

    expect(btn).toHaveClass("px-7 py-5 text-xl");
  });

  it("should render disabled btn", () => {
    const onClickButton = jest.fn();

    render(<Button testid="btn" onClick={onClickButton} isDisabled />);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

    expect(btn).toHaveAttribute("disabled");
    expect(onClickButton).not.toHaveBeenCalled();
  });

  it("should render primary btn", () => {
    render(<Button testid="btn" variant="primary" />);

    const btn = screen.getByTestId("btn");

    expect(btn).toHaveClass("bg-primary text-white border border-slate-300");
  });

  it("should render outline btn", () => {
    render(<Button testid="btn" variant="outline" />);

    const btn = screen.getByTestId("btn");

    expect(btn).toHaveClass("bg-transparent border border-slate-300");
  });
});
