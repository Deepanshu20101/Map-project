import { ReactNode, createContext, useEffect, useReducer } from "react";

interface AuthState {
  currentUser: any;
  loading: boolean;
}

interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  currentUser: any;
  loading: boolean;
  dispatch: React.Dispatch<AuthAction>;
}

const currentUserStorage = localStorage.getItem("currentUser");

const initialState = {
  currentUser: currentUserStorage ? JSON.parse(currentUserStorage) : null,
  loading: false,
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: false,
  dispatch: () => {},
});

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [state.currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        loading: state.loading,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
