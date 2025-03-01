import React from "react";
import ChatBar from "../_components/ChatBar";
import ChatLayout from "../_components/ChatLayout";

const Messages = () => {
  return (
    <div className="h-[100dvh] w-full py-4 flex flex-col items-start justify-between gap-4 ">
      <div className="h-full w-full flex items-start justify-between gap-4">
        <ChatBar />
        <ChatLayout />
      </div>
    </div>
  );
};

export default Messages;
