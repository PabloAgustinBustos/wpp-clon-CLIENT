import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation, { type MessageType } from "../zustand/useConversation"

const useListenMessage = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages} = useConversation()

  useEffect(() => {
    socket?.on("newMessage", (newMessage: MessageType) => {
      console.log("nuevo mensaje")
      setMessages([...messages, newMessage])
    })
  }, [socket, messages, setMessages])


}

export default useListenMessage