import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ChildCategory } from "../common/interfaces/article";
import { Article } from "../types";

export type App = {
  isSideNavOpen: boolean;
  categories: ChildCategory | null;
  articles: Article[];
  wishList: Article[];
};

export interface AppContextInterface {
  app: App;
  setApp: Dispatch<SetStateAction<App>>;
}

const defaultState = {
  app: {
    isSideNavOpen: false,
  },
  setApp: (state: App) => {},
} as AppContextInterface;

export const AppContext = createContext<AppContextInterface>(defaultState);

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [app, setApp] = useState<App>({
    isSideNavOpen: false,
    categories: null,
    articles: [],
    wishList: [],
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
}
