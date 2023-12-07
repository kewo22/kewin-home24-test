import React from "react";
import { render, screen } from "@testing-library/react";

import AppProvider from "../context/AppContext";
import Cart from "../pages/cart/Cart";

describe("Cart Component", () => {
  it("should render empty cart", () => {
    render(
      <AppProvider>
        <Cart />
      </AppProvider>
    );
    const emptyCartSection = screen.getByTestId("empty-cart-section");

    expect(emptyCartSection).toBeInTheDocument();
  });
});
