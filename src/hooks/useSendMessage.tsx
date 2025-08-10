import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async (message: string) => {
    if (!selectedConversation) return

    setLoading(true)

    try {
      const res = await fetch(`/api/messages/send/${selectedConversation.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({message})
      })

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      setMessages([...messages, data.newMessage])
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    sendMessage, loading
  }
}

export default useSendMessage