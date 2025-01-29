"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

interface VMModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const VMModal: React.FC<VMModalProps> = ({ isOpen, onClose }) => {
	const [vmName, setVmName] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Logique de création de VM, ex: appel API
		console.log("Creating VM:", vmName);
		// Fermer la modal après soumission, si tout est OK
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<h2 className="text-xl font-bold mb-4">Créer une VM</h2>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<label>
					<span>Nom de la VM</span>
					<input
						type="text"
						className="border border-gray-300 rounded px-2 py-1 w-full mt-1"
						value={vmName}
						onChange={(e) => setVmName(e.target.value)}
						required
					/>
				</label>
				{/* Ajoutez d'autres champs: RAM, vCPU, etc. */}
				<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
					Créer
				</button>
			</form>
		</Modal>
	);
};

export default VMModal;
