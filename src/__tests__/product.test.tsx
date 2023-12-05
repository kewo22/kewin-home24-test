import React from "react";
import { render, screen } from "@testing-library/react";

import { Article } from "../types";

import Product from "../common/ui/Product";

const article: Article = {
  name: "Schlaraffia myNap TFK",
  variantName:
    "Testsieger Stiftung Warentest: Testurteil 'GUT' (1,6), Ausgabe 10/2023, Modell Schlaraffia myNap TFK, Federkernmatratzen, getestete Größe 90 x 200 cm, Härtegrad mittel - 90 x 200cm",
  prices: {
    currency: "EUR",
    regular: {
      value: 25999,
    },
  },
  images: [
    {
      path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000263860-231026-010-IMAGE-P000000001000263860.webp",
    },
  ],
};

describe("Article Component", () => {
  beforeAll(() => {
    it("should render product details", async () => {
      render(<Product article={article} />);

      const articleImage = screen.getByTestId(
        "article-image"
      ) as HTMLImageElement;
      const articleCurrencyValue = screen.getByTestId("article-currency-value");
      const articleName = screen.getByTestId("article-name");

      expect(articleImage.src).toBe(article.images[0].path);
      expect(articleCurrencyValue.textContent).toBe(
        `${article.prices.currency} ${article.prices.regular.value}`
      );
      expect(articleName.textContent).toBe(article.name);
    });
  });
});
