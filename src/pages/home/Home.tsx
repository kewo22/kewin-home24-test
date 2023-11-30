import React from "react";

import { gql, useQuery } from "@apollo/client";

import Categories from "../../common/ui/Categories";
import Product from "../../common/ui/Product";

const GET_DOGS = gql`
  query GetDogs {
    categories: productLists(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: 50) {
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
  const { loading, error, data } = useQuery(GET_DOGS);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  console.log("🚀 ~ file: Home.tsx:40 ~ Home ~ data:", data);

  return (
    <div>
      <section>
        <Categories />
        <Product />
      </section>
    </div>
  );
}
