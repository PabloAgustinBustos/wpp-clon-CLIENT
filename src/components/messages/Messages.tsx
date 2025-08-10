import { DUMMY_MESSAGES } from "../../_ui_design/dummy_data/dummy";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
	const { messages, loading } = useGetMessages()

	console.log(messages)

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			
			{!loading && messages.map((message) => (
				<Message key={message.id} message={message} />
			))}

			{!loading && messages.length < 1 && (
				<p className="text-center text-white">Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;
