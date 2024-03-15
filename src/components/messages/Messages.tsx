import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useEffect, useRef } from "react"
import { useListenMessages } from "../../hooks/useListenMessages"

export default function Messages() {
  
  const {messages, loading} = useGetMessages()
  const lastMessageRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    setTimeout(()=>{
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100)
  }, [messages])
  
  useListenMessages()
  return (
    <>
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id}
         ref={lastMessageRef}
        >
          <Message  message={message}/>
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
    </>
    
  )
}
