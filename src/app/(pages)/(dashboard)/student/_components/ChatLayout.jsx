import React from "react";
import ChatContainer from "./ChatContainer";
import { chatData } from "@/constants";

const ChatLayout = () => {
  return (
    <div className=" w-full h-full flex flex-col items-start justify-between gap-4 ">
      <h2 className="w-full border-b border-b-zinc-800 pb-3">Messanger Name</h2>
      <ChatContainer chats={chatData} />
      <form className="w-full h-[max-content] py-2 flex items-center justify-center gap-4 border-t border-t-zinc-800">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="type your message here..."
          className=" rounded-md w-[max-content] lg:w-[450px] h-[6dvh] px-4 border border-zinc-400 outline-none text-[.9rem] bg-zinc-200 text-zinc-900 "
        />
        <button
          type="submit"
          className=" h-[5dvh] w-[max-content] px-4 text-[.8rem] rounded-md bg-blue-700 text-white border-none outline-none "
        >
          send
        </button>
      </form>
    </div>
  );
};

export default ChatLayout;
