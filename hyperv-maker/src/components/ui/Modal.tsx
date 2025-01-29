// src/components/ui/Modal.tsx
"use client";
import React from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={onClose} // Ferme la modal si on clique en dehors
		>
			<div
				className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
				onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dans la modal
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
