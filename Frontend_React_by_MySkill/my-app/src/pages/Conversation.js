import Chatbox from "../Chatbox";

const messages = [
  "Anyone here?",
  "Hi, welcome to the chat. You can build this feature using React state.",
];

function Messages(props) {
  const messages = props.messages;
  return (
    <>
      {messages.length > 0 && (
        <h6>You have {messages.length} messages in your conversation.</h6>
      )}
    </>
  );
}

export default function Conversation() {
  return (
    <div className="All-page">
      <h4>Inbox</h4>
      <Messages messages={messages} />
      <Chatbox />
    </div>
  );
}
