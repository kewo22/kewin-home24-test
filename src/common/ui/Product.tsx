import React, { useContext, useEffect, useState } from "react";

import { Article } from "../interfaces/article";
import { ProductProps } from "../interfaces/props/product-props";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

import Button from "./atom/Button";

export default function Product(props: ProductProps) {
  const { article } = props;

  const { t } = useTranslation();

  const { app, setApp } = useContext(AppContext);

  const [cartBtnText, setBtnText] = useState("add_to_cart");

  useEffect(() => {
    const foundIndex = app.cartItems.findIndex((cartItem) => {
      return cartItem.name === article.name;
    });

    foundIndex === -1
      ? setBtnText("add_to_cart")
      : setBtnText("remove_from_cart");
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
      data-testid="product-article"
    >
      <Button
        customClass="absolute top-5 right-5"
        onClick={() => {
          onHeartClick(article);
        }}
        testid="add-to-wishlist-btn"
      >
        <span
          className={`icon-heart text-3xl transition-all ease-in-out duration-200 ${heartIconClass}`}
        ></span>
      </Button>
      <img
        src={article.images[0].path}
        alt={`img-${article.name}`}
        data-testid="article-image"
      />
      <div className="flex-grow flex flex-col gap-2">
        <span
          className="block text-base font-bold text-center"
          data-testid="article-currency-value"
        >
          {article.prices.currency} {article.prices.regular.value}
        </span>
        <p className="text-base text-center" data-testid="article-name">
          {article.name}
        </p>
      </div>
      <Button
        variant="primary"
        size="xs"
        onClick={() => {
          onAddToCartClick(article);
        }}
        testid="add-to-cart-btn"
      >
        {t(cartBtnText)}
      </Button>
    </article>
  );
}
