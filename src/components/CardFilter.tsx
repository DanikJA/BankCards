import React from "react";
import "./CardFilter.css";

interface CardFilterProps {
	filter: string;
	onFilterChange: (value: string) => void;
}

export const CardFilter: React.FC<CardFilterProps> = ({
	filter,
	onFilterChange,
}) => (
	<input
		type="text"
		placeholder="Фільтрувати за брендом або останніми 4 цифрами"
		value={filter}
		onChange={(e) => onFilterChange(e.target.value)}
		className="card-filter"
	/>
);
