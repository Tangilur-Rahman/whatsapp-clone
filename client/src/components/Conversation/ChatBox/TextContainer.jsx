const TextContainer = ({ obj, currentUser }) => {
	console.log(obj);

	return (
		<>
			<div className="text-container">
				<p className={obj.senderID ? "my-text" : "other"}>{obj.message}</p>
			</div>
		</>
	);
};

export default TextContainer;
