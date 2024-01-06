import { ReactNode, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

interface Action {
  type: string;
  payload?: any;
}

interface State {
  currentUser: any;
  loading: boolean;
  images: string[];
  details: { title: string; description: string };
}

interface ContextProps {
  currentUser: any;
  loading: boolean;
  images: string[];
  details: { title: string; description: string };
  dispatch: React.Dispatch<Action>;
}

const currentUserStorage = localStorage.getItem("currentUser");

const initialState: State = {
  currentUser: currentUserStorage ? JSON.parse(currentUserStorage) : null,
  loading: false,
  images: [],
  details: { title: "", description: "" },
};

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextProps>({
  currentUser: initialState.currentUser,
  loading: initialState.loading,
  images: initialState.images,
  details: initialState.details,
  dispatch: () => {},
});

export const ContextProvider: React.FC<ContextProviderProps> = ({
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
        images: state.images,
        details: state.details,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
