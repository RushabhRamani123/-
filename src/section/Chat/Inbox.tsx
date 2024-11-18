import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import user01 from "../../images/user/user-01.png";
import Dropdown from "../../components/DropDown";
function Inbox() {
  return (
    <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4 ">
      {/* Chat header */}
      <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
        <div className="flex items-center">
          <div className="mr-4.5 h-13 max-w-13 rounded-full overflow-hidden">
            <img
              src={user01}
              className="h-full w-full object-center object-cover"
            />
          </div>
          <div>
            <h5 className="text-black font-medium dark:text-white">Hennry Dhavil</h5>
            <p className="text-sm">Hello brother I am free!</p>
          </div>
        </div>
            <Dropdown /> 
      </div>
      {/* list of message */}
      <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
        <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Rushabh Ramani</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray-2 px-5 py-3 dark:bg-boxdark-2">
                <p>Hey meet me toady!!</p>
            </div>
            <p className="text-sm">1:55pm</p>
        </div>
        <div className="max-w-125 ml-auto">
            <div className="mb-2.5  rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                <p className="text-white">Hello , I will check the shckedule and tell you.</p>
            </div>
            <p className="text-sm">1:56pm</p>
        </div>
      </div> 
      {/* Input */}
      <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark ">
        <form className="flex item-center justify-between space-x-4.5">
            <div className="relative w-full">
                <input type="text" placeholder="Type something here..." className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 text-black placeholder-body outline-none 
                  focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white " />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4 ">
                    <button  className="hover:text-primary">
                    <LinkSimple size={20} /> 
                    </button>
                    <button  className="hover:text-primary">
                        <Smiley size={20} />
                    </button>
                    </div>
            </div>
            <div className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90 ">
                <PaperPlaneTilt size={28} />
            </div>
        </form>
      </div>
    </div>
  );
}

export default Inbox;
