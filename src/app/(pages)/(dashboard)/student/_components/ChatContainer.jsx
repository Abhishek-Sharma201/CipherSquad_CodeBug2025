import React from "react";
import Message from "./Message";

const ChatContainer = ({ chats }) => {
  return (
    <div className="w-full h-full px-4 flex flex-col items-center justify-center gap-4">
      {chats.map((chat, i) => {
        return (
          <Message
            key={i}
            text={chat.chat.message}
            isMine={chat.isMine}
            time={chat.time}
          />
        );
      })}
    </div>
  );
};

export default ChatContainer;
