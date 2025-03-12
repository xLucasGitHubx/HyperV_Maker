// src/components/modals/VMModal.tsx
"use client";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import VMForm from "../forms/VMForm";
import { VM } from "@/types/VM";

interface VMModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: { name: string; ram: number; vcpu: number; vswitch: string }) => Promise<void>;
}

const VMModal: React.FC<VMModalProps> = ({ isOpen, onClose, onSubmit }) => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const handleSubmit = async (data: { name: string; ram: number; vcpu: number; vswitch: string }) => {
		setLoading(true);
		setMessage("");

		try {
			await onSubmit(data);
			setMessage(`VM "${data.name}" créé avec succès !`);
			// Fermer la modal après un court délai pour laisser le temps au message d'être lu
			setTimeout(() => {
				setMessage("");
				onClose();
			}, 2000);
		} catch (error) {
			console.error(error);
			setMessage("Erreur lors de la création de la VM");
		}

		setLoading(false);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-4">Créer une nouvelle VM</h2>
				<VMForm onSubmit={handleSubmit} loading={loading} />

				{message && <div className="mt-4 p-2 rounded bg-green-100 text-green-700">{message}</div>}
			</div>
		</Modal>
	);
};

export default VMModal;
