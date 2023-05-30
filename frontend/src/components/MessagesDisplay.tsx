import MessageDisplay from "./MessageDisplay";

interface UserMessage {
  role: string;
  content: string;
}

interface MessagesDisplayProps {
  userMessages: UserMessage[];
}

// interface UserMessage has two properties: role and content
// interface MessagesDisplayProps has one property: userMessages
// userMessages is an array of UserMessage objects
const MessagesDisplay = ({ userMessages }: MessagesDisplayProps) => {
  return (
    <div className="messages-display">
      {userMessages.map((userMessage, index) => (
        <MessageDisplay key={index} message={userMessage} />
      ))}
    </div>
  );
};

export default MessagesDisplay;
