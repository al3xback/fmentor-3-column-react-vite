import Header from './components/Header/Header.jsx';
import Cars from './components/Cars/Cars.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<div className="container">
					<Cars />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
