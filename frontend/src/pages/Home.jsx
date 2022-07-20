import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main id="MainHome">
			<h1>Home</h1>
			<p>Home page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default Home;
