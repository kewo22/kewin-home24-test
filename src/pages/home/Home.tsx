import React, { useContext } from "react";

import { useErrorBoundary } from "react-error-boundary";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { AppContext } from "../../context/AppContext";

import Categories from "../../common/ui/Categories";
import Products from "../../common/ui/Products";
import { Article, ChildCategory } from "../../common/interfaces/article";

const GET_ARTICLES = gql`
  query GetArticles {
    categories: productLists(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: 10) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
            path
          }
        }
      }
    }
  }
`;

export default function Home() {
  const { app, setApp } = useContext(AppContext);

  const { showBoundary } = useErrorBoundary();

  const { loading } = useQuery(GET_ARTICLES, {
    onCompleted: (d: any) => {
      console.log("🚀 ~ file: Home.tsx:48 ~ Home ~ d:", d)
      setApp({
        ...app,
        categories: d.categories[0].childrenCategories as ChildCategory,
        articles: d.categories[0].categoryArticles.articles as Article[],
      });
    },
    onError: (e: ApolloError) => {
      showBoundary(e.message);
    },
  });

  return (
    <section>
      <Categories />
      {app.articles && <Products articles={app.articles} isLoading={loading} />}
    </section>
  );
}
