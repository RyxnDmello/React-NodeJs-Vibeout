import { useReducer, createContext, PropsWithChildren, Dispatch } from "react";

interface Account {
  username: string;
  email: string;
}

interface AuthReducerAction {
  type: AuthReducerType;
  payload: AuthReducerState;
}

interface AuthContext {
  state: AuthReducerState;
  dispatch: Dispatch<AuthReducerAction>;
}

type AuthReducerType = "AUTHENTICATE" | "LOGOUT";
type AuthReducerState = Account | null;

const authReducer = (state: AuthReducerState, action: AuthReducerAction) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return action.payload;

    case "LOGOUT":
      return null;

    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContext>({
  state: null,
  dispatch: () => {},
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(authReducer, null);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
