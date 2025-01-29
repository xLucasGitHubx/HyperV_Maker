"use client";
import React from "react";
import Modal from "@/components/ui/Modal";
import { VM } from "@/types/VM";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrement des éléments nécessaires pour Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface VMDetailsModalProps {
	isOpen: boolean;
	onClose: () => void;
	vm: VM | null;
}

const VMDetailsModal: React.FC<VMDetailsModalProps> = ({ isOpen, onClose, vm }) => {
	if (!vm) return null;

	const ramPercentage = (vm.ramUsed / vm.ram) * 100;
	const storagePercentage = (vm.storageUsed / vm.storage) * 100;

	// Données pour la Circular Progress Bar (Stockage utilisé)
	const storageData = {
		datasets: [
			{
				data: [vm.storageUsed, vm.storage - vm.storageUsed], // Utilisé vs Disponible
				backgroundColor: ["#4CAF50", "#E0E0E0"], // Couleurs : utilisé en vert, disponible en gris
				borderWidth: 2,
			},
		],
	};

	const storageOptions = {
		cutout: "70%", // Permet d'afficher un effet "cercle évidé"
		plugins: {
			legend: {
				display: false, // Masquer la légende
			},
		},
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-4">Détails de {vm.name}</h2>

				{/* Progress Bar for RAM Usage */}
				<div className="mb-6">
					<span className="block text-sm font-semibold mb-1">
						RAM Utilisée: {vm.ramUsed} / {vm.ram} Mo
					</span>
					<div className="w-full bg-gray-200 rounded-full h-4">
						<div className="bg-blue-600 h-4 rounded-full" style={{ width: `${ramPercentage}%` }}></div>
					</div>
				</div>

				{/* Circular Progress for Storage Usage */}
				<div className="mb-6 flex flex-col items-center">
					<h3 className="text-sm font-semibold mb-2">Stockage Utilisé</h3>
					<div className="relative w-32 h-32">
						<Doughnut data={storageData} options={storageOptions} />
						<div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
							{vm.storageUsed} / {vm.storage} Go
						</div>
					</div>
				</div>

				{/* Bouton Fermer */}
				<button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
					Fermer
				</button>
			</div>
		</Modal>
	);
};

export default VMDetailsModal;
