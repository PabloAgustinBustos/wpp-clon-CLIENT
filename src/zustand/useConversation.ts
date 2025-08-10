import {create} from "zustand"

export type Conversation = {
  id: string
  fullname: string
  profilePicture: string
}

type Message = {
  id: string
  body: string
  senderID: string
  
}

type ConversationState = {
  selectedConversation: null | Conversation
  messages: Message[],

  setSelectedConversation: (conversation: Conversation | null) => void,
  setMessages: (messages: Message[]) => void
}

const useConversation = create<ConversationState>(set => ({
  selectedConversation: null,
  setSelectedConversation: conversation => set({ selectedConversation: conversation }),

  messages: [],
  setMessages: messages => set({messages})
}))

export default useConversation