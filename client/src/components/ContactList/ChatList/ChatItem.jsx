const ChatItem = () => {
	return (
		<>
			<div className="chat-item">
				<div className="profile">
					<img src="/assets/tangil.jpg" alt="chat-item-logo" />
					<div className="details">
						<h6>Tangilur Rahman</h6>
						<p>Hello Everyone !</p>
					</div>
				</div>
				<div className="date">
					<p>12.24 pm</p>
				</div>
			</div>
		</>
	);
};

export default ChatItem;
