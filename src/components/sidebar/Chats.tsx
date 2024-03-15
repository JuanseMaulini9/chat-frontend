import useGetChats from "../../hooks/useGetChats";
import Chat from "./Chat";

export default function Chats() {

  const {loading, chats} = useGetChats()
  return (
    <div className="py-2 flex flex-col overflow-auto">

      {chats.map((chat) => (
        <Chat 
          key={chat._id}
          chat={chat}
        />
      ))}

      {loading ? <span className="loading loading-spinner mx-auto" ></span> : null}
    </div>
  )
}
