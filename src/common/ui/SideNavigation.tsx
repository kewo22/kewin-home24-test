import React, { useContext } from "react";

import { twMerge } from "tailwind-merge";
import { ChevronRight, X } from "lucide-react";

import { AppContext } from "../../context/AppContext";

import Button from "./atom/Button";

export default function SideNavigation() {
  const { app, setApp } = useContext(AppContext);

  const baseClass =
    "fixed z-50 h-full w-[350px] sm:w-[400px] xl:w-[500px] flex flex-col bg-white top-0 left-0 overflow-hidden transition-all ease-out duration-500";
  let visibilityClass = "-left-[350px] sm:-left-[400px] xl:-left-[500px]";

  const onCloseClick = () => {
    setApp({
      ...app,
      isSideNavOpen: false,
    });
  };

  if (app.isSideNavOpen) {
    visibilityClass = "left-0 shadow-2xl";
  }

  const mergedClassName = twMerge(baseClass, visibilityClass);

  return (
    <aside className={mergedClassName} data-testid="side-nav">
      <div className="p-10 flex flex-row items-center justify-between shad">
        <p className="text-3xl">
          HOME <span className="text-primary">24</span>
        </p>
        <Button onClick={onCloseClick} testid="side-nav-close-btn">
          <span className="icon-x text-4xl"></span>
        </Button>
      </div>
      <div className="flex-grow overflow-y-auto p-10 flex flex-col gap-5">
        {app.categories?.list?.map((category, i) => {
          return (
            <a
              key={`category-${i}`}
              href="/s"
              className="flex flex-row items-center justify-between text-xl"
            >
              {category.name} <ChevronRight size={30} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
