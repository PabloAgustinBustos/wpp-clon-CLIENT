import { DUMMY_CONVERSATIONS } from "../../_ui_design/dummy_data/dummy";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const {conversations, loading} = useGetConversations()

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((chat) => (
				<Conversation key={chat.id} conversation={chat} />
			))}

			{loading ? (<span className="loading loading-spinner mx-auto"></span>) : null}
		</div>
	);
};
export default Conversations;
