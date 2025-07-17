import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MyCardsPage } from "./pages/CardsPage";
import "./App.css";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/my-cards" element={<MyCardsPage />} />
				<Route path="*" element={<Navigate to="/my-cards" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
