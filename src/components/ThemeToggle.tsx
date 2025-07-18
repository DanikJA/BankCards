import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);

	// При першому завантаженні перевіримо localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem("darkTheme");
		if (savedTheme === "true") {
			setDarkMode(true);
			document.body.classList.add("dark-theme");
		}
	}, []);

	// При зміні теми — оновлюємо body та localStorage
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
		localStorage.setItem("darkTheme", darkMode.toString());
	}, [darkMode]);

	const toggleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<button className="theme-toggle-button" onClick={toggleTheme}>
			{darkMode ? "☀️ " : "🌙 "}
		</button>
	);
};

export default ThemeToggle;
