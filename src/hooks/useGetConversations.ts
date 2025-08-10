import { useEffect, useState } from "react"
import type { Conversation } from "../zustand/useConversation"

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    const getConversations = async() => {
      setLoading(true)

      try {
        const res = await fetch("/api/messages/conversations")
        const data = await res.json()

        if(data.error) throw new Error(data.error)

        setConversations(data.users)
      } catch (e) {

      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return {loading, conversations}
}

export default useGetConversations