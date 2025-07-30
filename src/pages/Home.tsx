import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='
				flex 
				w-full 
				h-[80vh] 
				md:max-w-screen-md 
				md:h-[550px] 
				rounded-lg 
				overflow-hidden  
				bg-clip-padding 
				backdrop-filter 
				backdrop-blur-lg 
			'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
