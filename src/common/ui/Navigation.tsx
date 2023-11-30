import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { Menu, Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { AppContext } from "../../context/AppContext";

import Button from "./atom/Button";

export default function Navigation() {
  const { app, setApp } = useContext(AppContext);
  console.log("🚀 ~ file: navigation.tsx:14 ~ Navigation ~ app:", app);

  const wishListRef = useRef<HTMLSpanElement | null>(null);
  const shoppingCartRef = useRef<HTMLSpanElement | null>(null);

  if (shoppingCartRef && shoppingCartRef.current) {
    if (app.cartItems.length) {
      shoppingCartRef.current.classList.add("btn-badge");
      shoppingCartRef.current.setAttribute(
        "data-value",
        app.cartItems.length.toString()
      );
    } else {
      shoppingCartRef.current.classList.remove("btn-badge");
    }
  }

  if (wishListRef && wishListRef.current) {
    if (app.wishList.length) {
      wishListRef.current.classList.add("btn-badge");
      wishListRef.current.setAttribute(
        "data-value",
        app.wishList.length.toString()
      );
    } else {
      wishListRef.current.classList.remove("btn-badge");
    }
  }

  const onMenuClick = () => {
    setApp({
      ...app,
      isSideNavOpen: true,
    });
  };

  const SearchInput = () => {
    return (
      <div className="border border-slate-300 flex flex-row rounded-full h-12 p-1">
        <input type="text" className="w-full outline-none rounded-full pl-3" />
        <button className="h-full rounded-full w-11 flex items-center justify-center bg-primary">
          <Search size={18} color="#ffffff" />
        </button>
      </div>
    );
  };

  return (
    <nav className="py-5 px-10 lg:px-12 xl:px-20 2xl:px-44 flex flex-col gap-5 sm:gap-0 border-b border-b-slate-300">
      <div className="flex flex-row justify-between gap-6 lg:gap-10 xl:gap-28">
        <div className="flex flex-row items-center gap-4">
          <Button variant="outline" onClick={onMenuClick}>
            <Menu size={28} />
          </Button>

          <Link to="/" className="text-2xl">
            HOME <span className="text-primary font-bold">24</span>
          </Link>
        </div>
        <div className="flex-grow hidden sm:block">
          <SearchInput />
        </div>
        <div className="flex flex-row items-center gap-5">
          <Button customClass="p-0">
            <span className="icon-user text-4xl"></span>
          </Button>

          <Link to="/wishlist" className="relative">
            <span className="icon-heart text-4xl" ref={wishListRef}></span>
          </Link>

          <Link to="/shopping-cart" className="relative">
            <span
              className="icon-shopping-cart text-4xl"
              ref={shoppingCartRef}
            ></span>
          </Link>
        </div>
      </div>

      <div className="block sm:hidden">
        <SearchInput />
      </div>
    </nav>
  );
}
