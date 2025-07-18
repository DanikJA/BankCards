import React, { useState, useEffect } from "react";
import { Card } from "../types";
import { CardFilter } from "../components/CardFilter";
import { CardTable } from "../components/CardTable";
import { CreateCardModal } from "../components/CardModal";
import "./CardsPage.css";

export const MyCardsPage: React.FC = () => {
	const [cards, setCards] = useState<Card[]>([]);
	const [filter, setFilter] = useState("");
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const handleDelete = (id: string) => {
		setCards((prev) => prev.filter((card) => card.id !== id));
	};

	const handleSetDefault = (id: string) => {
		setCards((prev) =>
			prev.map((card) => ({
				...card,
				isDefault: card.id === id,
			}))
		);
	};

	const handleCreate = (card: Card) => {
		setCards((prev) => {
			let oldCards = [...prev];
			if (card.isDefault) {
				oldCards = oldCards.map((c) => ({ ...c, isDefault: false }));
			}
			return [...oldCards, card];
		});
	};

	const filteredCards = cards.filter((card) => {
		const lowerFilter = filter.toLowerCase();
		return (
			card.brand.toLowerCase().includes(lowerFilter) ||
			card.last4.includes(lowerFilter)
		);
	});

	return (
		<div className="page-container">
			<h1 className="main-title">My Cards</h1>

			<button onClick={() => setModalOpen(true)} className="add-button">
				Add card
			</button>

			<CardFilter filter={filter} onFilterChange={setFilter} />

			{loading ? (
				<p className="loading-text">Loading...</p>
			) : (
				<CardTable
					cards={filteredCards}
					onDelete={handleDelete}
					onSetDefault={handleSetDefault}
				/>
			)}

			<CreateCardModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onCreate={handleCreate}
			/>
		</div>
	);
};
