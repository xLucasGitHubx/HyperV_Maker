"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

interface VSwitchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const VSwitchModal: React.FC<VSwitchModalProps> = ({ isOpen, onClose }) => {
	const [switchName, setSwitchName] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Logique de création de VSwitch
		console.log("Creating VSwitch:", switchName);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<h2 className="text-xl font-bold mb-4">Créer un VSwitch</h2>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<label>
					<span>Nom du vSwitch</span>
					<input
						type="text"
						className="border border-gray-300 rounded px-2 py-1 w-full mt-1"
						value={switchName}
						onChange={(e) => setSwitchName(e.target.value)}
						required
					/>
				</label>
				{/* Autres champs éventuels */}
				<button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
					Créer
				</button>
			</form>
		</Modal>
	);
};

export default VSwitchModal;
