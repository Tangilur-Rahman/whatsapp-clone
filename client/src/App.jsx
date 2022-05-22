import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AccountPage from "./Pages/AccountPage/AccountPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="account" element={<AccountPage />} />
					<Route path="*" element={<AccountPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
