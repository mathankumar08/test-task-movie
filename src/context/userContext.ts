import { createContext, useContext } from "react"

export type GlobalContent = {
  isAuthenticated: boolean
  setIsAuthenticated:(c: boolean) => void
}
export const UserContext = createContext<GlobalContent>({
    isAuthenticated: false, // set a default value
    setIsAuthenticated: () => {},
})
export const useUserContext = () => useContext(UserContext)