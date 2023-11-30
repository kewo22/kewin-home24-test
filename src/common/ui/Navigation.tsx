import React, { useContext } from "react";

import { Menu, Search } from "lucide-react";
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { AppContext } from "../../context/AppContext";

import Button from "./atom/Button";

export default function Navigation() {
  const { app, setApp } = useContext(AppContext);

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
        <div className="flex flex-row items-center gap-2">
          <Button variant="outline" onClick={onMenuClick}>
            <Menu size={28} />
          </Button>
          <p className="text-xl">
            HOME <span className="text-primary">24</span>
          </p>
        </div>
        <div className="flex-grow hidden sm:block">
          <SearchInput />
        </div>
        <div className="flex flex-row items-center gap-5">
          <Button
            customClass="p-0"
            icon={<User size={28} absoluteStrokeWidth={true} />}
          ></Button>

          <Button
            badgeValue="1"
            customClass="p-0"
            icon={<Heart size={28} absoluteStrokeWidth={true} />}
          ></Button>

          <Button
            badgeValue="1"
            customClass="p-0"
            icon={<ShoppingCart size={28} absoluteStrokeWidth={true} />}
          ></Button>
        </div>
      </div>

      <div className="block sm:hidden">
        <SearchInput />
      </div>
    </nav>
  );
}
