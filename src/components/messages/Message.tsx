import { useAuthContext } from "../../context/AuthContext"
import { Message } from "../../types"
import { extraxtTime } from "../../utils/extractTime"

interface Props {
  message : Message
}

export default function Message({message}: Props) {
  const {authUser} = useAuthContext()
  const formattedTime = extraxtTime(message.createdAt)
  const fromMe = message.senderId === authUser?._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.content}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  )
}
