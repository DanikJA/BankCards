import React from "react";
import { Card } from "../types";
import "./CardTableRow.css";

interface CardTableRowProps {
	card: Card;
	onDelete: (id: string) => void;
	onSetDefault: (id: string) => void;
}

export const CardTableRow: React.FC<CardTableRowProps> = ({
	card,
	onDelete,
	onSetDefault,
}) => {
	return (
		<tr className="card-table-row">
			<td>{card.brand.toUpperCase()}</td>
			<td>{card.last4}</td>
			<td className="default-label">{card.isDefault ? "Основна" : ""}</td>
			<td>
				{!card.isDefault && (
					<button
						onClick={() => onSetDefault(card.id)}
						className="card-table-button"
					>
						Встановити основною
					</button>
				)}
				<button onClick={() => onDelete(card.id)}>Видалити</button>
			</td>
		</tr>
	);
};
