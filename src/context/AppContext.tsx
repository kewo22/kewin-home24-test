import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { Article, ChildCategory } from "../common/interfaces/article";

export type App = {
  isSideNavOpen: boolean;
  categories: ChildCategory | null;
  articles: Article[];
  wishList: Article[];
  cartItems: Article[];
  isLoading: {
    articles: boolean;
  };
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
    isLoading: {
      articles: false,
    },
  },
  setApp: (state: App) => {},
} as AppContextInterface;

export const AppContext = createContext<AppContextInterface>(defaultState);

export type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [app, setApp] = useState<App>(defaultState.app);

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
}
