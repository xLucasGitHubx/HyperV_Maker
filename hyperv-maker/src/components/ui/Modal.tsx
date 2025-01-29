"use client";
import React from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null; // Si la modal n'est pas ouverte, ne rien afficher

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black bg-opacity-50"
			onClick={onClose} // Fermer en cliquant sur l'overlay
		>
			<div
				className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
				onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la modal
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
