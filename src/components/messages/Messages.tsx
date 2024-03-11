import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
export default function Messages() {
  const {messages, loading} = useGetMessages()
  console.log('Messages:', messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}
