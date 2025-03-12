// src/components/ui/VSwitchList.tsx
"use client";
import React, { useState } from "react";
import VSwitchModal from "@/components/modals/VSwitchModal";

interface VSwitch {
	id: string;
	name: string;
	type: string;
}

// ✅ Données mockées initiales
const mockVSwitches: VSwitch[] = [
	{ id: "vsw-1", name: "VSwitch 1", type: "private" },
	{ id: "vsw-2", name: "VSwitch 2", type: "internal" },
	{ id: "vsw-3", name: "VSwitch 3", type: "private" },
];

const VSwitchList: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [vSwitches, setVSwitches] = useState<VSwitch[]>(mockVSwitches);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleAddVSwitch = (newVSwitch: { name: string; type: string }) => {
		// ✅ Ajouter le VSwitch à la liste avec un ID unique
		const newEntry: VSwitch = { id: `vsw-${vSwitches.length + 1}`, ...newVSwitch };
		setVSwitches((prev) => [...prev, newEntry]);
	};

	return (
		<div className="p-4 bg-white shadow rounded">
			<h2 className="text-lg font-bold mb-4">VSwitch List</h2>

			{/* ✅ Liste des VSwitch créés */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{vSwitches.length > 0 ? (
					vSwitches.map((vs) => (
						<div key={vs.id} className="bg-teal-100 rounded p-3 text-teal-900 border border-teal-300">
							<strong>{vs.name}</strong> <br />
							<span className="text-sm text-gray-600">Type: {vs.type}</span>
						</div>
					))
				) : (
					<p className="text-gray-500">Aucun VSwitch disponible.</p>
				)}
			</div>

			{/* ✅ Bouton pour ouvrir la modal */}
			<div className="mt-4 flex justify-center">
				<button onClick={openModal} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
					Ajouter un VSwitch
				</button>
			</div>

			{/* ✅ Modal pour créer un VSwitch */}
			<VSwitchModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddVSwitch} />
		</div>
	);
};

export default VSwitchList;
