const ShowBlock = ({ children, data }) => {
	return (
		<>
			{data ? children : false}
		</>
	);
};

export default ShowBlock;