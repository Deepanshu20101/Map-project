interface State {
  currentUser: any;
  loading: boolean;
  images: string[];
  details: { title: string; description: string; price: number };
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
    case "UPDATE_IMAGES":
      return { ...state, images: [...state.images, action.payload] };
    case "UPDATE_DETAILS":
      return { ...state, details: { ...state.details, ...action.payload } };
    case "RESET_IMAGES":
      return { ...state, images: [] };
    case "RESET_DETAILS":
      return { ...state, details: { title: "", description: "" } };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
