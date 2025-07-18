import React from "react";
import "./CardStyles/CardFilter.css";

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
		placeholder="Search"
		value={filter}
		onChange={(e) => onFilterChange(e.target.value)}
		className="card-filter"
	/>
);
