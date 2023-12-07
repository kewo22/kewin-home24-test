import { Article } from "../article";

export interface ProductProps {
    article: Article;
}
export interface ProductsProps {
    articles: Article[];
    isLoading: boolean;
}