import { createContext, useContext, useEffect, useRef, useState, type ReactElement } from "react"
import io, { Socket } from "socket.io-client"
import { useAuthContext } from "./AuthContext"

interface ISocketContext {
  socket: Socket | null
  onlineUsers: string[] 
}

const SocketContext = createContext<ISocketContext | undefined>(undefined)

export const useSocketContext = () => {
  const context = useContext(SocketContext)

  if (context === undefined) {
    throw new Error("useSocketContext must be used within a provider for it")
  }

  return context
}

interface IProps {
  children: ReactElement
}

// Cambiar la URL de prod
const socketURL = import.meta.env.MODE === "development" ? "http://localhost:3001" : "/"

const SocketContextProvider: React.FC<IProps> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null)
  const [onlineUsers, setOnlineUsers] = useState<string[]>([])
  const { authUser, isLoading } = useAuthContext()

  useEffect(() => {
    // Verifica que esté autenticado
    if (authUser && !isLoading) {
      // Si lo está, se conecta al socket
      const socket = io(socketURL, {
        query: {
          userId: authUser.id
        }
      })

      socketRef.current = socket

      // Cada vez que un cliente se conecta, se actualiza el state
      socket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users)
      })

      return () => {
        socket.close()
        socketRef.current = null
      }
    } else if (!authUser && !isLoading) {
      if (socketRef.current) {
        socketRef.current = null
      }
    }
  }, [authUser, isLoading])

  return (
    <SocketContext.Provider value={{socket: socketRef.current, onlineUsers}}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider