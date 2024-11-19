const Home = () => {
	const throwAnError = () => {
		throw "test";
	};

	const makeFetchRequest = () => {
		fetch("https://non-existant.com");
	};

	return (
		<div className="content">
			<button onClick={() => throwAnError()}>throw an error</button>
			<button onClick={makeFetchRequest}>make a fetch request</button>
		</div>
	);
};

export default Home;
