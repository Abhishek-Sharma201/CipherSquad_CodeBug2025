import { chatData } from "@/constants";
import React from "react";

const ChatBar = () => {
  return (
    <div className="h-full w-[max-content] flex flex-col items-center px-4 justify-start gap-12 border-r border-r-zinc-400">
      <h2 className=" border-b border-b-zinc-400 pb-3 ">Contacts</h2>
      <ul className="h-[max-content] w-full flex flex-col items-center justify-center gap-4">
        {chatData.map((chat, i) => {
          return (
            <li
              key={i}
              className={` ${
                chat.active ? "bg-blue-600 text-white" : ""
              } cursor-pointer text-[.7rem] font-[400] h-[max-content] min-w-[max-content] w-full rounded-md p-2 flex flex-col items-center justify-center gap-4  border border-zinc-400 hover:bg-zinc-400 hover:border-zinc-400`}
            >
              {chat.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatBar;
