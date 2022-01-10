import { createContext, useContext, useState, ReactNode } from "react";
import { History } from "history";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

export interface UserData {
  email: string;
  password: string;
}

interface AuthContextData {
  authToken: string;
  logout: (history: History) => void;
  signIn: (userData: UserData, history: History) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );

  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserData, history: History) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.token);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.token);
        // redirecionamos para a página de login
        history.push("/dashboard");
        //window.location.href = "/dashboard";
      })
      .catch((err) => console.log(err));
  };

  // Função para deslogar da aplicação
  const logout = (history: History) => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    // redirecionando para login
    history.push("/");
    //window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
