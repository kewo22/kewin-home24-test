import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

import { AppContext } from "../../../context/AppContext";
import { Article, ChildCategory } from "../../interfaces/article";

import SideNavigation from "../SideNavigation";
import Navigation from "../Navigation";

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

export default function Root() {
  const { app, setApp } = useContext(AppContext);

  const { loading, error } = useQuery(GET_ARTICLES, {
    onCompleted: (d: any) => {
      setApp({
        ...app,
        categories: d.categories[0].childrenCategories as ChildCategory,
        articles: d.categories[0].categoryArticles.articles as Article[],
      });
    },
  });

  return (
    <div className="font-rubik">
      <Navigation />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
