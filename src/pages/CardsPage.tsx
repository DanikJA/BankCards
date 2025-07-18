import React, { useState, useEffect } from "react";
import { Card } from "../types";
import { CardFilter } from "../components/CardFilter";
import { CardTable } from "../components/CardTable";
import { CreateCardModal } from "../components/CardModal";
import "../components/CardStyles/CardsPage.css";
import ThemeToggle from "../components/ThemeToggle";

const LOCAL_STORAGE_KEY = "myCards";

export const MyCardsPage: React.FC = () => {
	const [cards, setCards] = useState<Card[]>([]);
	const [filter, setFilter] = useState("");
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	// Читання localStorage
	useEffect(() => {
		const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
		console.log("Loading from localStorage:", stored);
		if (stored) {
			try {
				const parsed = JSON.parse(stored) as Card[];
				setCards(parsed);
			} catch (error) {
				console.error("Error parsing cards from localStorage", error);
			}
		}
		setLoading(false);
	}, []);

	// Запис у localStorage (тільки коли cards не порожній або явно змінений)
	useEffect(() => {
		if (!loading && cards.length > 0) {
			console.log("Saving cards to localStorage:", cards);
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
		}
	}, [cards, loading]);

	const handleDelete = (id: string) => {
		setCards((prev) => {
			const newCards = prev.filter((card) => card.id !== id);
			// Явно оновлюємо localStorage при видаленні
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCards));
			return newCards;
		});
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
			let updatedCards = [...prev];
			if (card.isDefault) {
				updatedCards = updatedCards.map((c) => ({ ...c, isDefault: false }));
			}
			return [...updatedCards, card];
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
			<ThemeToggle />
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
