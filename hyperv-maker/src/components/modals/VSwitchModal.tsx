// src/components/modals/VSwitchModal.tsx
"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import VSwitchForm from "../forms/VSwitchForm";

interface VSwitchModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: { name: string }) => Promise<void>;
}

const VSwitchModal: React.FC<VSwitchModalProps> = ({ isOpen, onClose, onSubmit }) => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const handleSubmit = async (data: { name: string }) => {
		setLoading(true);
		setMessage("");

		try {
			await onSubmit(data);
			setMessage(`vSwitch "${data.name}" créé avec succès !`);
			setTimeout(() => {
				setMessage("");
				onClose();
			}, 2000);
		} catch (error) {
			console.error(error);
			setMessage("Erreur lors de la création du vSwitch");
		}

		setLoading(false);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-4">Créer un vSwitch</h2>
				<VSwitchForm onSubmit={handleSubmit} loading={loading} />

				{message && <div className="mt-4 p-2 rounded bg-green-100 text-green-700">{message}</div>}
			</div>
		</Modal>
	);
};

export default VSwitchModal;
