const TextContainer = ({ obj }) => {
   
	return (
		<>
			<div className="text-container">
				<p className={obj.check ? "my-text" : "other"}>{obj.text}</p>
			</div>
		</>
	);
};

export default TextContainer;
