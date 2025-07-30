import React, { createContext, useContext, useEffect, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";

type AuthUser = {
  id: string
  fullname: string
  email: string
  profilePicture: string
  gender: string
}

const AuthContext = createContext<{
  authUser: AuthUser | null,
  setAuthUser: Dispatch<SetStateAction<AuthUser | null>>
  isLoading: boolean
}>({
  authUser: null,
  setAuthUser: () => {},
  isLoading: true
})

interface IProps {
  children: ReactElement
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await fetch("/api/auth/me")
        const data = await res.json()

        if (!res.ok) throw new Error(data.message)
        
        console.log(data)

        setAuthUser(data.user)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAuthUser()
  }, [])

  return (<AuthContext.Provider value={{
    authUser,
    setAuthUser,
    isLoading
  }}>
    {children}
  </AuthContext.Provider>)
}