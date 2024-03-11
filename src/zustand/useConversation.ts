import { create } from "zustand";
import { Message, Chat } from "../types";

interface ConversationState {
  selectedConversation: Chat | null;
  setSelectedConversation: (selectedConversation: Chat | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
