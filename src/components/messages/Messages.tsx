import { DUMMY_MESSAGES } from "../../_ui_design/dummy_data/dummy";
import useChatScroll from "../../hooks/useChatScroll";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessage from "../../hooks/useListenMessage";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
	const { messages, loading } = useGetMessages()
	const ref = useChatScroll(messages) as React.RefObject<HTMLDivElement>

	useListenMessage()

	return (
		<div className='px-4 flex-1 overflow-auto' ref={ref}>
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
