// src/components/modals/VSwitchModal.tsx
"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

interface VSwitchModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: { name: string; type: string }) => void;
}

export default function VSwitchModal({ isOpen, onClose, onSubmit }: VSwitchModalProps) {
	const [name, setName] = useState("");
	const [type, setType] = useState("private"); // Valeur par défaut

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) return;

		// ✅ Envoyer les données du VSwitch
		onSubmit({ name, type });

		// ✅ Réinitialiser les champs et fermer la modal
		setName("");
		setType("private");
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-4">Créer un VSwitch</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Nom du VSwitch */}
					<label className="block">
						<span className="font-semibold">Nom du VSwitch</span>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="block w-full border rounded px-2 py-1 mt-1"
							placeholder="Nom du VSwitch"
							required
						/>
					</label>

					{/* Type de VSwitch */}
					<label className="block">
						<span className="font-semibold">Type de VSwitch</span>
						<select value={type} onChange={(e) => setType(e.target.value)} className="block w-full border rounded px-2 py-1 mt-1" required>
							<option value="private">Private</option>
							<option value="internal">Internal</option>
						</select>
					</label>

					{/* Bouton de soumission */}
					<button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Créer</button>
				</form>
			</div>
		</Modal>
	);
}
