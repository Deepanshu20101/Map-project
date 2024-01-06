interface State {
  currentUser: any;
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action) => {
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

export default reducer;
