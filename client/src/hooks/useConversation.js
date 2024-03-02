import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversaion: null,
  setSelectedConversaion: (selectedConversaion) => set({ selectedConversaion }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
export default useConversation;
