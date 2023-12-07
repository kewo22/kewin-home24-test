import React from "react";
import { Link } from "react-router-dom";
import Typography from "./atom/Typography";

export default function Categories() {
  const categories = [
    {
      category: "category_1",
      route: "",
    },
    {
      category: "category_2",
      route: "",
    },
    {
      category: "category_3",
      route: "",
    },
    {
      category: "category_4",
      route: "",
    },
    {
      category: "category_5",
      route: "",
    },
    {
      category: "category_6",
      route: "",
    },
    {
      category: "category_7",
      route: "",
    },
    {
      category: "category_8",
      route: "",
    },
    {
      category: "category_9",
      route: "",
    },
    {
      category: "category_10",
      route: "",
    },
    {
      category: "category_11",
      route: "",
    },
    {
      category: "category_12",
      route: "",
    },
  ];

  return (
    <section className="hidden lg:flex flex-row items-center justify-between px-10 lg:px-12 xl:px-20 2xl:px-44 border-b border-b-slate-300">
      {categories.map((category, i) => {
        return (
          <Link
            key={`category-${i}`}
            to={category.route}
            className="grid place-items-center h-12 xl:h-20 border-b-4 border-transparent hover:border-b-primary"
          >
            <Typography text={category.category} className="font-bold" />
          </Link>
        );
      })}
    </section>
  );
}
