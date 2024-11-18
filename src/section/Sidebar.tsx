import { Chat, SignOut } from "phosphor-react"
import DarkModeSwitcher from "../components/DarkModeSwitcher"

function Sidebar() {
  return (
    <div className="flex flex-col border-r border-stroke p-2 dark:border-strokedark ">
        <div className="mx-auto p-2 border border-stroke rounded-md ">
          <Chat size={24} />
        </div>
        <div className="flex flex-col flex-grow"></div>
        <div className="space-y-4.5">
        <DarkModeSwitcher /> 
        <div className="mx-auto p-2 border border-stroke rounded-md ">
          <SignOut size={24} />
        </div>
        </div>
    </div>
  )
}

export default Sidebar