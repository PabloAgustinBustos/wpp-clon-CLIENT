import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    const getMessages = async() => {
      if (!selectedConversation) return

      setLoading(true)
      setMessages([])   // Si ya había un chat seleccionado, borra los mensaje para traer los del nuevo chat
      
      try {
        const res = await fetch(`/api/messages/${selectedConversation.id}`)
        const data = await res.json()

        if (!res.ok) throw new Error(data.error)

          setMessages(data.messages)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    } 

    getMessages()
  }, [selectedConversation])

  return { messages, loading }
}

export default useGetMessages