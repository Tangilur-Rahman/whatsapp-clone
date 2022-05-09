import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import "./App.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AccountPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
