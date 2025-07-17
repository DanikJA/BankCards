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
			setCards([
				{ id: "1", brand: "visa", last4: "1234", isDefault: true },
				{ id: "2", brand: "mastercard", last4: "5678", isDefault: false },
				{ id: "3", brand: "amex", last4: "9012", isDefault: false },
			]);
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
			let newCards = [...prev];
			if (card.isDefault) {
				newCards = newCards.map((c) => ({ ...c, isDefault: false }));
			}
			return [...newCards, card];
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
			<h1 className="main-title">Менеджмент платіжних карток</h1>

			<button onClick={() => setModalOpen(true)} className="create-button">
				Додати картку
			</button>

			<CardFilter filter={filter} onFilterChange={setFilter} />

			{loading ? (
				<p className="loading-text">Завантаження...</p>
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
