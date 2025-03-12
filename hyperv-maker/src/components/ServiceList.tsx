// src/components/ServiceList.tsx
"use client";
import React, { useState } from "react";
import ServiceCard from "./cards/ServiceCard";
import ServiceModal from "@/components/modals/ServiceModal";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

const servicesData = [
	{ id: "ad", name: "Active Directory", description: "Gérer les utilisateurs..." },
	{ id: "dhcp", name: "DHCP", description: "Attribuer automatiquement des adresses IP..." },
	{ id: "dns", name: "DNS", description: "Résoudre les noms de domaine en adresses IP." },
];

const ServiceList: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	// ✅ Récupération de `downloadConfig`
	const { downloadConfig } = useServiceConfig();

	// ✅ Gestion de l'ouverture de la modal
	const openServiceModal = (serviceId: string) => {
		setSelectedService(serviceId);
		setIsModalOpen(true);
	};

	// ✅ Fermeture de la modal SANS succès (ex: clic en dehors)
	const closeServiceModal = () => {
		setIsModalOpen(false);
		setSelectedService(null);
	};

	// ✅ Fermeture de la modal AVEC bandeau succès (après enregistrement)
	const handleSuccess = (message: string) => {
		setIsModalOpen(false);
		setSelectedService(null);
		setSuccessMessage(message);

		// Faire disparaître le bandeau après 3 secondes
		setTimeout(() => setSuccessMessage(null), 3000);
	};

	return (
		<div>
			{/* ✅ Bandeau de succès visible uniquement après enregistrement */}
			{successMessage && (
				<div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white text-center py-2 px-6 rounded-lg shadow-lg">
					{successMessage}
				</div>
			)}

			{/* Liste des services */}
			<div>
				{servicesData.map((srv) => (
					<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => openServiceModal(srv.id)} />
				))}
			</div>

			{/* ✅ Bouton Télécharger */}
			<div className="flex justify-center mt-6">
				<button onClick={downloadConfig} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
					Télécharger la configuration
				</button>
			</div>

			{/* ✅ Modal pour configurer le service */}
			<ServiceModal isOpen={isModalOpen} onClose={closeServiceModal} onSaveSuccess={handleSuccess} service={selectedService} />
		</div>
	);
};

export default ServiceList;
