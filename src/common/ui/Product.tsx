import React, { useContext, useEffect, useState } from "react";

import { Article } from "../../types";
import Button from "./atom/Button";
import { AppContext } from "../../context/AppContext";

interface ProductProps {
  article: Article;
}

export default function Product(props: ProductProps) {
  const { article } = props;

  const { app, setApp } = useContext(AppContext);

  const [cartBtnText, setBtnText] = useState("Add to cart");

  useEffect(() => {
    const foundIndex = app.cartItems.findIndex((cartItem) => {
      return cartItem.name === article.name;
    });

    foundIndex === -1
      ? setBtnText("Add to cart")
      : setBtnText("Remove from cart");
  }, [app, article.name]);

  const onHeartClick = (article: Article) => {
    const existingWishlists = [...app.wishList];
    const index = existingWishlists.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });

    if (index === -1) {
      setApp({
        ...app,
        wishList: [...app.wishList, article],
      });
      return;
    }

    existingWishlists.splice(index, 1);
    setApp({
      ...app,
      wishList: existingWishlists,
    });
  };

  const checkIfIsAddedToWishlist = (article: Article) => {
    const existingWishlists = [...app.wishList];
    const index = existingWishlists.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });
    return index === -1 ? false : true;
  };

  const onAddToCartClick = (article: Article) => {
    const existingCartItems = [...app.cartItems];
    const index = existingCartItems.findIndex((_article) => {
      return _article.name === article.name; // using name since id not present
    });

    if (index === -1) {
      setBtnText("Remove from cart");
      setApp({
        ...app,
        cartItems: [...app.cartItems, article],
      });
      return;
    }

    setBtnText("Add from cart");
    existingCartItems.splice(index, 1);
    setApp({
      ...app,
      cartItems: existingCartItems,
    });
  };

  const isAddedToWishList = checkIfIsAddedToWishlist(article);
  const heartIconClass = isAddedToWishList
    ? "text-primary"
    : "colors.text.primary";

  return (
    <article
      key={article.name}
      className="shadow-xl flex flex-col items-center gap-5 p-10 relative"
    >
      <button
        className="absolute top-5 right-5"
        onClick={() => {
          onHeartClick(article);
        }}
      >
        <span
          className={`icon-heart text-3xl transition-all ease-in-out duration-200 ${heartIconClass}`}
        ></span>
      </button>
      <img src={article.images[0].path} alt={`img-${article.name}`} />
      <div className="flex-grow flex flex-col gap-2">
        <span className="block text-base 2xl:text-xl font-bold text-center">
          {article.prices.currency} {article.prices.regular.value}
        </span>
        <p className="text-base 2xl:text-xl text-center">{article.name}</p>
      </div>
      <Button
        variant="primary"
        size="xs"
        onClick={() => {
          onAddToCartClick(article);
        }}
      >
        {cartBtnText}
      </Button>
    </article>
  );
}
