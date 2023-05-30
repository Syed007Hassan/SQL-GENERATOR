interface UserMessage {
  role: string;
  content: string;
}

interface MessageDisplayProps {
  message: UserMessage;
}

const MessageDisplay = ({ message }: MessageDisplayProps) => {
  return (
    <div className="message-display">
      <p id="icon">◉❎</p>
      {/* <p id="icon"> {message.role} </p> */}
      <p id="icon">{message.content}</p>
    </div>
  );
};

export default MessageDisplay;
