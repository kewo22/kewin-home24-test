import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { Article } from "../types";
import { ChildCategory } from "../common/interfaces/article";

export type App = {
  isSideNavOpen: boolean;
  categories: ChildCategory | null;
  articles: Article[];
  wishList: Article[];
  cartItems: Article[];
};

export interface AppContextInterface {
  app: App;
  setApp: Dispatch<SetStateAction<App>>;
}

const defaultState = {
  app: {
    isSideNavOpen: false,
    categories: null,
    articles: [],
    wishList: [],
    cartItems: [],
  },
  setApp: (state: App) => {},
} as AppContextInterface;

export const AppContext = createContext<AppContextInterface>(defaultState);

export type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [app, setApp] = useState<App>({
    isSideNavOpen: false,
    categories: null,
    articles: [],
    wishList: [],
    cartItems: [],
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
}
