// src/app/dashboard/page.tsx
"use client";
import React, { useState } from "react";

// ============ Composants existants ============
import VMList from "@/components/VMList";
import VMConfigButton from "@/components/buttons/VMConfigButton";
import VMModal from "@/components/modals/VMModal";
import VSwitchModal from "@/components/modals/VSwitchModal";
import VMDetailsModal from "@/components/modals/VMDetailsModal";

import SRVHostInfo from "@/components/ui/SRVHostInfo";
import VSwitchList from "@/components/ui/VSwitchList";
import ServiceList from "@/components/ServiceList";
import { VM } from "@/types/VM";

// ==============================================

export default function MainDashboard() {
	// === États pour gestion des modals ===
	const [isVMModalOpen, setIsVMModalOpen] = useState(false);
	const [isVSwitchModalOpen, setIsVSwitchModalOpen] = useState(false);
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

	// === État pour la VM sélectionnée (détails) ===
	const [selectedVM, setSelectedVM] = useState<VM | null>(null);

	// === Liste de VM (exemple) ===
	const [vms, setVms] = useState<VM[]>([
		{
			id: "1",
			name: "VM-1",
			cpu: 4,
			cpuUsed: 1,
			ram: 8,
			ramUsed: 2,
			storage: 100,
			storageUsed: 20,
		},
		{
			id: "2",
			name: "VM-2",
			cpu: 2,
			cpuUsed: 1,
			ram: 4,
			ramUsed: 1,
			storage: 50,
			storageUsed: 10,
		},
	]);

	// ========== Fonctions pour les modals =============
	const openVMModal = () => setIsVMModalOpen(true);
	const closeVMModal = () => setIsVMModalOpen(false);

	const openVSwitchModal = () => setIsVSwitchModalOpen(true);
	const closeVSwitchModal = () => setIsVSwitchModalOpen(false);

	const closeDetailsModal = () => setIsDetailsModalOpen(false);

	// ========== Handlers VMs ===============
	// Quand on clique sur une VM
	const handleVMClick = (vm: VM) => {
		setSelectedVM(vm);
		setIsDetailsModalOpen(true);
	};

	// Création d’une VM (depuis VMModal)
	const createVM = async (data: { name: string; ram: number; vcpu: number; vswitch: string }) => {
		setIsVMModalOpen(false);

		// Logique de création ici (appel API si besoin)
		const newVM: VM = {
			id: `vm-${vms.length + 1}`,
			name: data.name,
			ram: data.ram,
			ramUsed: 0,
			storage: 100, // Exemple par défaut
			storageUsed: 0,
			// On ajoute la gestion CPU pour coller au type VM
			cpu: data.vcpu,
			cpuUsed: 0,
		};

		setVms([...vms, newVM]);
	};

	// Création d’un VSwitch (depuis VSwitchModal)
	const createVSwitch = async (data: { name: string }) => {
		setIsVSwitchModalOpen(false);
		// Ajoutez la logique de création ici (appel API)
		console.log("Créer VSwitch:", data.name);
	};

	return (
		<div className="p-6 mt-20">
			{/* ==================== Layout 3 colonnes ==================== */}
			<div className="grid grid-cols-12 gap-4">
				{/* 1) Colonne 1 : VM-LIST */}
				<div className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow-sm">
					<h2 className="text-lg font-bold mb-4">VM-LIST</h2>
					<VMList vms={vms} onVMClick={handleVMClick} />
					{/* Bouton pour ouvrir la modal VM */}
					<VMConfigButton
						title="Add VM"
						helpText="Créer une nouvelle machine virtuelle."
						buttonColor="bg-blue-500"
						hoverButtonColor="hover:bg-blue-600"
						onClick={openVMModal}
					/>
				</div>

				{/* 2) Colonne 2 : SRV-HOST-INFO en haut, VSwitchList en bas */}
				<div className="col-span-12 md:col-span-6 flex flex-col space-y-4">
					<div className="bg-white p-4 rounded shadow-sm">
						<h2 className="text-lg font-bold mb-4 text-center">Infos Hôte</h2>
						<SRVHostInfo />
					</div>
					<div className="bg-white p-4 rounded shadow-sm">
						<h2 className="text-lg font-bold mb-4 text-center">VSWITCH-LIST</h2>
						<VSwitchList />
						{/* Bouton pour ouvrir la modal VSwitch */}
						<VMConfigButton
							title="Add VSwitch"
							helpText="Créer un nouveau switch réseau virtuel."
							buttonColor="bg-green-500"
							hoverButtonColor="hover:bg-green-600"
							onClick={openVSwitchModal}
						/>
					</div>
				</div>

				{/* 3) Colonne 3 : SERVICES-LIST */}
				<div className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow-sm">
					<h2 className="text-lg font-bold mb-4">SERVICES-LIST</h2>
					<ServiceList />
				</div>
			</div>
			{/* ==================== Modals ==================== */}
			{/* Modal pour créer une VM */}
			<VMModal isOpen={isVMModalOpen} onClose={closeVMModal} onSubmit={createVM} />

			{/* Modal pour créer un VSwitch */}
			<VSwitchModal isOpen={isVSwitchModalOpen} onClose={closeVSwitchModal} onSubmit={createVSwitch} />

			{/* Modal pour les détails de la VM */}
			<VMDetailsModal isOpen={isDetailsModalOpen} onClose={closeDetailsModal} vm={selectedVM} />
		</div>
	);
}
