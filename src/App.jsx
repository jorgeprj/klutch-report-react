import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from './routes/index.jsx';
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
	return (
		<div>
			<Router>
				<Navbar/>
				<AppRoutes />
			</Router>
		</div>
	)
}
export default App