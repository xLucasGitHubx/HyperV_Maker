// src/components/ui/SRVHostInfo.tsx
"use client";
import React from "react";
// import { Doughnut } from "react-chartjs-2"; // si tu veux Chart.js

const SRVHostInfo: React.FC = () => {
	// Exemple de variables
	const totalStorage = 500; // en Go
	const usedStorage = 250;
	const totalRAM = 32; // en Go
	const usedRAM = 16;

	// Calcul du pourcentage pour l'affichage
	const storageUsagePercent = (usedStorage / totalStorage) * 100;
	const ramUsagePercent = (usedRAM / totalRAM) * 100;

	return (
		<div>
			{/* Conteneur flex pour Stockage & RAM côte à côte */}
			<div className="flex flex-row items-center justify-between space-x-4">
				{/* Stockage */}
				<div className="w-1/2 bg-red-100 p-2 text-center rounded">
					<p className="font-semibold text-red-700">Stockage Utilisé</p>
					<p>
						{usedStorage} Go / {totalStorage} Go ({storageUsagePercent.toFixed(1)}%)
					</p>
				</div>

				{/* RAM */}
				<div className="w-1/2 bg-yellow-100 p-2 text-center rounded">
					<p className="font-semibold text-yellow-700">RAM Utilisée</p>
					<p>
						{usedRAM} Go / {totalRAM} Go ({ramUsagePercent.toFixed(1)}%)
					</p>
				</div>
			</div>
		</div>
	);
};

export default SRVHostInfo;
