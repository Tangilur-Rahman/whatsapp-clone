const TextContainer = ({ obj }) => {
	return (
		<>
			<div className="text-container">
				<p className={obj.senderID ? "other" : "my-text"}>{obj.message}</p>
			</div>
		</>
	);
};

export default TextContainer;
