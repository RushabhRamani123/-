import { Chatlist, Inbox } from "../section"
import Sidebar from "../section/Sidebar"

function Message() {
  return (
    <div className="h-screen overflow-hidden">
        <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  xl:flex">
        {/* Sidebar */}
        
        <Sidebar /> 
        {/* ChatList */}
        <Chatlist />
        {/* Message */}
        <Inbox /> 
        </div>
    </div>
  )
}

export default Message