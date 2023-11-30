import React, { useContext } from "react";

import { twMerge } from "tailwind-merge";
import { ChevronRight, X } from "lucide-react";

import { AppContext } from "../../context/AppContext";

import Button from "./atom/Button";

export default function SideNavigation() {
  const { app, setApp } = useContext(AppContext);
  console.log("🚀 ~ file: SideNavigation.tsx:12 ~ SideNavigation ~ app:", app);

  const baseClass =
    "fixed z-50 h-[100dvh] w-[500px] flex flex-col bg-white top-0 left-0 shadow-2xl overflow-hidden transition-all ease-out duration-500";
  let visibilityClass = "-left-[500px]";

  const onCloseClick = () => {
    setApp({
      ...app,
      isSideNavOpen: false,
    });
  };

  if (app.isSideNavOpen) {
    visibilityClass = "left-0";
  }

  const mergedClassName = twMerge(baseClass, visibilityClass);

  return (
    <aside className={mergedClassName}>
      <div className="p-10 flex flex-row items-center justify-between">
        <p className="text-3xl">
          HOME <span className="text-primary">24</span>
        </p>
        <Button icon={<X size={30} />} onClick={onCloseClick} />
      </div>
      <div className="flex-grow overflow-y-auto p-10 flex flex-col gap-5">
        {app.categories?.list.map((category, i) => {
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