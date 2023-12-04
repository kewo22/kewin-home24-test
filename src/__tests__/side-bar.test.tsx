import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navigation from "../common/ui/Navigation";
import SideNavigation from "../common/ui/SideNavigation";
import AppProvider from "../context/AppContext";

describe("Side nav Component", () => {
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

  it("should be in the document hidden", async () => {
    render(
      <MemoryRouter>
        <SideNavigation />
      </MemoryRouter>
    );

    const sideNav = screen.getByTestId("side-nav");
    expect(sideNav).toBeInTheDocument();
    expect(sideNav).toHaveClass(
      "-left-[350px] sm:-left-[400px] xl:-left-[500px]"
    );
  });

  it("should open side menu", async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <Navigation />
          <SideNavigation />
        </MemoryRouter>
      </AppProvider>
    );

    const sideNav = screen.getByTestId("side-nav");
    const menuBtn = screen.getByTestId("menu-btn");

    fireEvent(
      menuBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(sideNav).toHaveClass("left-0");
  });

  it("should close side menu", async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <Navigation />
          <SideNavigation />
        </MemoryRouter>
      </AppProvider>
    );

    const sideNav = screen.getByTestId("side-nav");
    const sideNavCloseBtn = screen.getByTestId("side-nav-close-btn");

    fireEvent(
      sideNavCloseBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(sideNav).not.toHaveClass("left-0");
  });
});
