import React from "react";
import { Card } from "../types";
import "./CardStyles/CardTableRow.css";

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
			<td className="default-label">{card.isDefault ? "isDefault" : ""}</td>
			<td className="action-buttons">
				<button
					onClick={() => onSetDefault(card.id)}
					className="card-table-button"
					style={{ visibility: card.isDefault ? "hidden" : "visible" }}
				>
					Set as default
				</button>
				<button className="deleteBtn" onClick={() => onDelete(card.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};
