import { createContext } from "react";
import jwt_decode from "jwt-decode";

export const JwtContext = createContext();

export const JwtProvider = ({ children }) => {
  const token = localStorage.getItem("@Habits-Pessoal:Token");

  return <JwtContext.Provider>{children}</JwtContext.Provider>;
};
