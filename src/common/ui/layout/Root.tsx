import React, { useContext, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

import SideNavigation from "../SideNavigation";
import Navigation from "../Navigation";
import { AppContext } from "../../../context/AppContext";
import { ChildCategory } from "../../interfaces/article";

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
      categoryArticles: articlesList(first: 1) {
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
  //   const { showBoundary } = useErrorBoundary();
  const { loading, error, data } = useQuery(GET_ARTICLES);
  console.log(
    "🚀 ~ file: root.tsx:43 ~ Root ~ data:",
    data?.categories[0].childrenCategories.list
  );

  const { app, setApp } = useContext(AppContext);

  // if (
  //   data &&
  //   data.categories[0] &&
  //   data?.categories[0].childrenCategories &&
  //   data?.categories[0].childrenCategories.list
  // ) {
  //   setApp({
  //     ...app,
  //     categories: data?.categories[0].childrenCategories.list as ChildCategory,
  //   });
  // }

  useEffect(() => {
    setApp({
      ...app,
      categories: data?.categories[0].childrenCategories as ChildCategory,
    });
  }, [data]);

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
