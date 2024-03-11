import { Chat } from "../../types";
import {useConversation} from "../../zustand/useConversation";

interface Props {
  chat: Chat;
}


export default function Chat({ chat }: Props) {
  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === chat._id

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500": ''}
      `}
      onClick={()=> setSelectedConversation(chat)}
      >
        <div className="flex flex-col flex-1 items-center h-8 justify-center">
          <p className="font-bold text-gray-200">{chat.fullName}</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}
