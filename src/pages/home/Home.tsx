import React, { useContext } from "react";

import { gql, useQuery } from "@apollo/client";

import Categories from "../../common/ui/Categories";
import Product from "../../common/ui/Product";
import { AppContext } from "../../context/AppContext";
import { ChildCategory } from "../../common/interfaces/article";

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

export default function Home() {
  // const { loading, error, data } = useQuery(GET_ARTICLES);
  // const { app, setApp } = useContext(AppContext);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`; handle this with err boundary

  // console.log(
  //   "🚀 ~ file: root.tsx:43 ~ Root ~ data:",
  //   data?.categories[0].childrenCategories.list
  // );

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

  return (
    <div>
      <section>
        <Categories />
        <Product />
      </section>
    </div>
  );
}
