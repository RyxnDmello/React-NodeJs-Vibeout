import { useReducer, createContext, PropsWithChildren, Dispatch } from "react";

interface Account {
  username: string;
  email: string;
  token: string;
}

interface AuthContext {
  account: AuthState;
  dispatch: Dispatch<AuthAction>;
}

interface AuthAction {
  type: AuthType;
  payload: AuthState;
}

type AuthType = "AUTHENTICATE" | "LOGOUT";
type AuthState = Account | null;

const authReducer = (account: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return action.payload;

    case "LOGOUT":
      return null;

    default:
      return account;
  }
};

export const AuthContext = createContext<AuthContext>({
  account: null,
  dispatch: () => {},
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [account, dispatch] = useReducer(authReducer, null);

  return (
    <AuthContext.Provider value={{ account, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
