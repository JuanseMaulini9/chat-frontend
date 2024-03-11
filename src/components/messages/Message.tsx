
export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img
              src="https://ih1.redbubble.net/image.4155785074.7045/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="user avatar"
        />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hola como va?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        15:04
      </div>
    </div>
  )
}
