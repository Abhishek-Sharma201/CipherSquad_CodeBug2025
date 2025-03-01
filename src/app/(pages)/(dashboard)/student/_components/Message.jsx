import React from "react";

const Message = ({ text, isMine, time }) => {
  return (
    <div
      className={` min-w-[200px] h-[max-content] w-[max-content] flex flex-col items-start justify-between py-1 px-2 relative rounded-md ${isMine ? "self-end" : "self-start"} ${isMine ? "bg-blue-600" : "bg-zinc-500"} `}
    >
      <h3 className="text-[.95rem] mb-5 text-white ">{text}</h3>
      <p className=" text-[.6rem] text-white absolute right-[5px] bottom-1 ">{time}</p>
    </div>
  );
};

export default Message;
