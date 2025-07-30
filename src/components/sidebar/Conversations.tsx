import { DUMMY_CONVERSATIONS } from "../../_ui_design/dummy_data/dummy";
import Conversation from "./Conversation";

const Conversations = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{DUMMY_CONVERSATIONS.map((chat) => (
				<Conversation key={chat.id} conversation={chat} />
			))}
		</div>
	);
};
export default Conversations;
