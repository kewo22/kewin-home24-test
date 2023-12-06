import React from "react";
import { Link } from "react-router-dom";
import Typography from "./atom/Typography";

export default function Categories() {
  const categories = [
    {
      category: "Möbel",
      route: "",
    },
    {
      category: "Lampen",
      route: "",
    },
    {
      category: "Accessoires",
      route: "",
    },
    {
      category: "Textilien",
      route: "",
    },
    {
      category: "Kinder",
      route: "",
    },
    {
      category: "Küche",
      route: "",
    },
    {
      category: "Bad",
      route: "",
    },
    {
      category: "Weihnachten",
      route: "",
    },
    {
      category: "BUTLERS",
      route: "",
    },
    {
      category: "Marken",
      route: "",
    },
    {
      category: "Shop the Look",
      route: "",
    },
    {
      category: "Store",
      route: "",
    },
    {
      category: "Sale",
      route: "",
    },
  ];

  return (
    <section className="hidden lg:flex flex-row items-center justify-between px-10 lg:px-12 xl:px-20 2xl:px-44 border-b border-b-slate-300">
      {categories.map((category) => {
        return (
          <Link
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
