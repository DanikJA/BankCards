import React from "react";

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
		style={{ padding: "8px", marginBottom: "12px", width: "100%" }}
	/>
);
