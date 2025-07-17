import React, { useState } from "react";
import { CardBrand, Card } from "../types";
import "./CardModal.css";

interface CreateCardModalProps {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (card: Card) => void;
}

export const CreateCardModal: React.FC<CreateCardModalProps> = ({
	isOpen,
	onClose,
	onCreate,
}) => {
	const [brand, setBrand] = useState<CardBrand>("visa");
	const [fullCardNumber, setFullCardNumber] = useState("");
	const [isDefault, setIsDefault] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!/^\d{12,19}$/.test(fullCardNumber)) {
			alert("Введіть повний номер картки");
			return;
		}
		const correctNumber = fullCardNumber.slice(-4);

		onCreate({
			id: Date.now().toString(),
			brand,
			last4: correctNumber,
			isDefault,
		});
		setBrand("visa");
		setIsDefault(false);
		setFullCardNumber("");
		onClose();
	};

	return (
		<div className="modal-overlay">
			<form onSubmit={handleSubmit} className="modal-content">
				<h2>Add New Card</h2>

				<label>
					Brand:
					<select
						className="options"
						value={brand}
						onChange={(e) => setBrand(e.target.value as CardBrand)}
					>
						<option value="visa">Visa</option>
						<option value="mastercard">Mastercard</option>
						<option value="amex">Amex</option>
					</select>
				</label>

				<label>
					Card Number:
					<input
						type="text"
						maxLength={16}
						value={fullCardNumber}
						onChange={(e) => setFullCardNumber(e.target.value)}
						placeholder="Enter full card number"
						required
					/>
				</label>

				<label>
					<input
						type="checkbox"
						checked={isDefault}
						onChange={(e) => setIsDefault(e.target.checked)}
					/>
					Set the main
				</label>

				<div className="modal-buttons">
					<button type="submit">Add Card</button>
					<button type="button" onClick={onClose}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};
