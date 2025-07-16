import React from "react";
import { Card } from "../types";

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
		<tr>
			<td>{card.brand.toUpperCase()}</td>
			<td>**** **** **** {card.last4}</td>
			<td>{card.isDefault ? "Основна" : ""}</td>
			<td>
				{!card.isDefault && (
					<button
						onClick={() => onSetDefault(card.id)}
						style={{ marginRight: 8 }}
					>
						Встановити основною
					</button>
				)}
				<button onClick={() => onDelete(card.id)}>Видалити</button>
			</td>
		</tr>
	);
};
