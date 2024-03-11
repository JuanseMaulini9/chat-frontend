import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Chat } from "../types";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { loading, chats };
};

export default useGetConversation;
