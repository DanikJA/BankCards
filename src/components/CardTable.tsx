import React from "react";
import { Card } from "../types";
import { CardTableRow } from "./CardTableRow";
import "./CardStyles/CardTable.css";

interface CardTableProps {
	cards: Card[];
	onDelete: (id: string) => void;
	onSetDefault: (id: string) => void;
}

export const CardTable: React.FC<CardTableProps> = ({
	cards,
	onDelete,
	onSetDefault,
}) => {
	if (cards.length === 0)
		return <p className="no-cards-message">No cards found</p>;
	return (
		<table className="card-table">
			<thead>
				<tr>
					<th>Brand</th>
					<th>Last4</th>
					<th>Default</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{cards.map((card) => (
					<CardTableRow
						key={card.id}
						card={card}
						onDelete={onDelete}
						onSetDefault={onSetDefault}
					/>
				))}
			</tbody>
		</table>
	);
};
