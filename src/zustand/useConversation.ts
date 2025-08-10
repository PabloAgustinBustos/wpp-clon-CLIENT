import {create} from "zustand"

export type Conversation = {
  id: string
  fullname: string
  profilePicture: string
}

export type MessageType = {
  id: string
  body: string
  senderId: string
  
}

type ConversationState = {
  selectedConversation: null | Conversation
  messages: MessageType[],

  setSelectedConversation: (conversation: Conversation | null) => void,
  setMessages: (messages: MessageType[]) => void
}

const useConversation = create<ConversationState>(set => ({
  selectedConversation: null,
  setSelectedConversation: conversation => set({ selectedConversation: conversation }),

  messages: [],
  setMessages: messages => set({messages})
}))

export default useConversation