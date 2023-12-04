import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AppProvider from "../context/AppContext";

import Navigation from "../common/ui/Navigation";
import Product from "../common/ui/Product";
import { Article } from "../common/interfaces/article";

describe("Navigation Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it("renders navigation", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it("should have empty search input", () => {
    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;
    expect(searchInput.value).toBe("");
  });

  it("should have menu button", () => {
    const menuBtn = screen.getByTestId("menu-btn");
    expect(menuBtn).toBeInTheDocument();
  });

  it("should have logo", () => {
    const menuBtn = screen.getByTestId("logo");
    expect(menuBtn).toBeInTheDocument();
  });

  it("should have user button", () => {
    const menuBtn = screen.getByTestId("user-btn");
    expect(menuBtn).toBeInTheDocument();
  });

  it("should have user wishlist", () => {
    const menuBtn = screen.getByTestId("wishlist-btn");
    expect(menuBtn).toBeInTheDocument();
  });

  it("should have user shopping cart", () => {
    const menuBtn = screen.getByTestId("shopping-cart-btn");
    expect(menuBtn).toBeInTheDocument();
  });
});

describe("Navigation Component Context Update", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should be empty initially", () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </AppProvider>
    );
    const wishListIcon = screen.getByTestId("wishlist-icon");
    const wishListValue = wishListIcon.getAttribute("data-value");
    expect(wishListIcon).not.toHaveClass("btn-badge");
    expect(wishListValue).toBeNull();
  });

  it("should add counter badge for cart btn", async () => {
    const article: Article = {
      name: "string",
      variantName: "string",
      prices: {
        currency: "",
        regular: {
          value: 100,
        },
      },
      images: [
        {
          path: "",
        },
      ],
    };

    render(
      <AppProvider>
        <MemoryRouter>
          <Navigation />
          <Product article={article} />
        </MemoryRouter>
      </AppProvider>
    );

    fireEvent(
      screen.getByTestId("add-to-cart-btn"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const cartIcon = screen.getByTestId("shopping-cart-icon");
    const wishListValue = cartIcon.getAttribute("data-value");
    expect(cartIcon).toHaveClass("btn-badge");
    expect(wishListValue).toBe("1");
  });

  it("should add counter badge for wishlist", async () => {
    const article: Article = {
      name: "string",
      variantName: "string",
      prices: {
        currency: "",
        regular: {
          value: 100,
        },
      },
      images: [
        {
          path: "",
        },
      ],
    };

    render(
      <AppProvider>
        <MemoryRouter>
          <Navigation />
          <Product article={article} />
        </MemoryRouter>
      </AppProvider>
    );

    fireEvent(
      screen.getByTestId("add-to-wishlist-btn"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const wishList = screen.getByTestId("wishlist-icon");
    const wishListValue = wishList.getAttribute("data-value");
    expect(wishList).toHaveClass("btn-badge");
    expect(wishListValue).toBe("1");
  });

  it("should toggle aside menu", async () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const menuBtn = screen.getByTestId("menu-btn");
    fireEvent(
      menuBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  // test('calls onClick prop when clicked', () => {
  //   const handleClick = jest.fn()
  //   render(<Button onClick={handleClick}>Click Me</Button>)
  //   fireEvent.click(screen.getByText(/click me/i))
  //   expect(handleClick).toHaveBeenCalledTimes(1)
  // })
});
