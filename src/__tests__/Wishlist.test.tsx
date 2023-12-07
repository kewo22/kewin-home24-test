import React from "react";
import { render, screen } from "@testing-library/react";

import WishList from "../pages/wishlist/Wishlist";
import AppProvider from "../context/AppContext";

describe("Wishlist Component", () => {
  it("should render empty wishlist", () => {
    render(
      <AppProvider>
        <WishList />
      </AppProvider>
    );
    const emptyWishlistSection = screen.getByTestId("empty-wishlist-section");

    expect(emptyWishlistSection).toBeInTheDocument();
  });
});
