import { ReactNode, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

interface Action {
  type: string;
  payload?: any;
}

interface contextProviderProps {
  children: ReactNode;
}

interface ContextType {
  currentUser: any;
  loading: boolean;
  dispatch: React.Dispatch<Action>;
}

const currentUserStorage = localStorage.getItem("currentUser");

const initialState = {
  currentUser: currentUserStorage ? JSON.parse(currentUserStorage) : null,
  loading: false,
};

export const Context = createContext<ContextType>({
  currentUser: null,
  loading: false,
  dispatch: () => null,
});

export const ContextProvider: React.FC<contextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [state.currentUser]);

  return (
    <Context.Provider
      value={{
        currentUser: state.currentUser,
        loading: state.loading,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
