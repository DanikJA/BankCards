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
	const [last4, setLast4] = useState("");
	const [isDefault, setIsDefault] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (last4.length !== 4 || !/^\d{4}$/.test(last4)) {
			alert("Вкажіть 4 останні цифри картки (цифри)");
			return;
		}
		onCreate({
			id: Date.now().toString(),
			brand,
			last4,
			isDefault,
		});
		setBrand("visa");
		setLast4("");
		setIsDefault(false);
		onClose();
	};

	return (
		<div className="modal-overlay">
			<form onSubmit={handleSubmit} className="modal-content">
				<h2>Додати нову картку</h2>

				<label>
					Бренд:
					<select
						value={brand}
						onChange={(e) => setBrand(e.target.value as CardBrand)}
					>
						<option value="visa">Visa</option>
						<option value="mastercard">Mastercard</option>
						<option value="amex">Amex</option>
					</select>
				</label>

				<label>
					Останні 4 цифри:
					<input
						type="text"
						maxLength={4}
						value={last4}
						onChange={(e) => setLast4(e.target.value)}
						pattern="\d{4}"
						required
					/>
				</label>

				<label>
					<input
						type="checkbox"
						checked={isDefault}
						onChange={(e) => setIsDefault(e.target.checked)}
					/>
					Встановити основною
				</label>

				<div className="modal-buttons">
					<button type="submit">Додати</button>
					<button type="button" onClick={onClose}>
						Скасувати
					</button>
				</div>
			</form>
		</div>
	);
};
