const ChatItem = ({obj}) => {

	const {name,profilePic,lastText,lastTextTime} = obj;
	return (
		<>
			<div className="chat-item">
				<div className="profile">
					<img src={profilePic} alt="chat-item-logo" />
					<div className="details">
						<h6>{name}</h6>
						<p>{lastText}</p>
					</div>
				</div>
				<div className="date">
					<p>{lastTextTime}</p>
				</div>
			</div>
		</>
	);
};

export default ChatItem;
