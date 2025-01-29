// src/app/dashboard/page.tsx
"use client";
import React, { useState } from "react";
import VMConfigButton from "@/components/buttons/VMConfigButton";
import VMModal from "@/components/modals/VMModal";
import VSwitchModal from "@/components/modals/VSwitchModal";
import VMList from "@/components/VMList";
import VMDetailsModal from "@/components/modals/VMDetailsModal";
import { VM } from "@/types/VM";

export default function MainDashboard() {
	const [isVMModalOpen, setIsVMModalOpen] = useState(false);
	const [isVSwitchModalOpen, setIsVSwitchModalOpen] = useState(false);
	const [selectedVM, setSelectedVM] = useState<VM | null>(null);
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

	// Exemple de données VMs
	const [vms, setVms] = useState<VM[]>([
		{
			id: "vm-1",
			name: "VM-1",
			ram: 4096,
			ramUsed: 2048,
			storage: 100,
			storageUsed: 50,
		},
		{
			id: "vm-2",
			name: "VM-2",
			ram: 8192,
			ramUsed: 4096,
			storage: 200,
			storageUsed: 150,
		},
		// Ajoutez d'autres VMs si nécessaire
	]);

	const openVMModal = () => setIsVMModalOpen(true);
	const closeVMModal = () => setIsVMModalOpen(false);

	const openVSwitchModal = () => setIsVSwitchModalOpen(true);
	const closeVSwitchModal = () => setIsVSwitchModalOpen(false);

	const handleVMClick = (vm: VM) => {
		setSelectedVM(vm);
		setIsDetailsModalOpen(true);
	};

	const closeDetailsModal = () => setIsDetailsModalOpen(false);

	const createVM = async (data: { name: string; ram: number; vcpu: number; vswitch: string }) => {
		setIsVMModalOpen(false);
		// Ajoutez la logique de création de VM ici (appel API)
		const newVM: VM = {
			id: `vm-${vms.length + 1}`,
			name: data.name,
			ram: data.ram,
			ramUsed: 0,
			storage: 100, // Exemple par défaut
			storageUsed: 0,
		};
		setVms([...vms, newVM]);
	};

	const createVSwitch = async (data: { name: string }) => {
		setIsVSwitchModalOpen(false);
		// Ajoutez la logique de création de VSwitch ici (appel API)
		console.log("Créer VSwitch:", data.name);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">Mon Tableau de Bord</h1>

			<div className="flex space-x-4 mb-6">
				{/* Bouton pour ouvrir la modal VM */}
				<VMConfigButton
					title="Add VM"
					helpText="Créer une nouvelle machine virtuelle."
					buttonColor="bg-blue-500"
					hoverButtonColor="hover:bg-blue-600"
					onClick={openVMModal}
				/>

				{/* Bouton pour ouvrir la modal VSwitch */}
				<VMConfigButton
					title="Add VSwitch"
					helpText="Créer un nouveau switch réseau virtuel."
					buttonColor="bg-green-500"
					hoverButtonColor="hover:bg-green-600"
					onClick={openVSwitchModal}
				/>
			</div>

			{/* Liste des VMs */}
			<VMList vms={vms} onVMClick={handleVMClick} />

			{/* Modal pour créer une VM */}
			<VMModal isOpen={isVMModalOpen} onClose={closeVMModal} onSubmit={createVM} />

			{/* Modal pour créer un VSwitch */}
			<VSwitchModal isOpen={isVSwitchModalOpen} onClose={closeVSwitchModal} onSubmit={createVSwitch} />

			{/* Modal pour les détails de la VM */}
			<VMDetailsModal isOpen={isDetailsModalOpen} onClose={closeDetailsModal} vm={selectedVM} />
		</div>
	);
}
