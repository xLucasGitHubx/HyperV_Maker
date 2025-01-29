"use client";
import React, { useState } from "react";
import VMConfigButton from "@/components/buttons/VMConfigButton";
import VMModal from "@/components/modals/VMModal";
import VSwitchModal from "@/components/modals/VSwitchModal";

export default function MainDashboard() {
	const [isVMModalOpen, setIsVMModalOpen] = useState(false);
	const [isVSwitchModalOpen, setIsVSwitchModalOpen] = useState(false);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">Mon Tableau de Bord</h1>

			<div className="flex space-x-4">
				{/* Bouton pour ouvrir la modal VM */}
				<VMConfigButton
					title="Add VM"
					helpText="Créer une nouvelle machine virtuelle."
					buttonColor="bg-blue-500"
					hoverButtonColor="hover:bg-blue-600"
					onClick={() => setIsVMModalOpen(true)}
				/>

				{/* Bouton pour ouvrir la modal VSwitch */}
				<VMConfigButton
					title="Add VSwitch"
					helpText="Créer un nouveau switch réseau virtuel."
					buttonColor="bg-green-500"
					hoverButtonColor="hover:bg-green-600"
					onClick={() => setIsVSwitchModalOpen(true)}
				/>
			</div>

			{/* Modal pour la VM */}
			<VMModal isOpen={isVMModalOpen} onClose={() => setIsVMModalOpen(false)} />

			{/* Modal pour le VSwitch */}
			<VSwitchModal isOpen={isVSwitchModalOpen} onClose={() => setIsVSwitchModalOpen(false)} />
		</div>
	);
}
