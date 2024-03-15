import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import { useConversation } from "../zustand/useConversation";
import { Message } from "../types";

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage: Message) => {
      setMessages([...messages, newMessage]);
    };

    if (socket) {
      socket.on("newMessage", handleNewMessage);
    }

    return () => {
      if (socket) {
        socket.off("newMessage", handleNewMessage);
      }
    };
  }, [socket, setMessages, messages]);
};
