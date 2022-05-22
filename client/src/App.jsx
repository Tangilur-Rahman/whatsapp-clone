import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import "./App.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					
					<Route path="/" element={<Navigate to = "dashboard" />} />
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="/account" element={<AccountPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
