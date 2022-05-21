const TextContainer = ({ obj, currentUser }) => {
	return (
		<>
			<div className="text-container">
				<p
					className={
						currentUser.email === obj.receiverEmail ? "my-text" : "other"
					}
				>
					{obj.message}
				</p>
			</div>
		</>
	);
};

export default TextContainer;
