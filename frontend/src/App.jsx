import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "@page/AboutUs";
import CRUD from "@page/CRUD";
import ExpoDetails from "@page/ExpoDetails";
import Login from "@page/Login";
import NotFound from "@page/NotFound";
import PanelDetails from "./pages/PanelDetails";
import PanelsList from "@page/PanelsList";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PanelsList />} />
				<Route path="/a-propos" element={<AboutUs />} />
				<Route path="/details" element={<ExpoDetails />} />

				<Route path="/connexion" element={<Login />} />
				<Route path="/admin" element={<CRUD />} />

				<Route path="/panel/:id" element={<PanelDetails />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

