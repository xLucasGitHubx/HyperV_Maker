// src/app/services/page.tsx
"use client";
import React from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import { useRouter } from "next/navigation";
import { useServiceConfig } from "@/components/ServiceConfigProvider"; // <-- Import du contexte pour télécharger la config

const servicesData = [
	{
		id: "ad",
		name: "Active Directory",
		description: "Gérer les utilisateurs et les ordinateurs dans un domaine.",
	},
	{
		id: "dhcp",
		name: "DHCP",
		description: "Attribuer automatiquement des adresses IP aux machines.",
	},
	{
		id: "dns",
		name: "DNS",
		description: "Résoudre les noms de domaine en adresses IP.",
	},
];

const ServiceList: React.FC = () => {
	const router = useRouter();
	const { downloadConfig } = useServiceConfig(); // <-- Récupération de la fonction pour télécharger

	const handleConfigure = (serviceId: string) => {
		router.push(`/services/config?service=${serviceId}`);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Services</h1>

			{/* Grid des services */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
				{servicesData.map((srv) => (
					<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => handleConfigure(srv.id)} />
				))}
			</div>

			{/* Bouton Télécharger en bas des services */}
			<div className="flex justify-center mt-6">
				<button onClick={downloadConfig} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
					Télécharger la configuration
				</button>
			</div>
		</div>
	);
};

export default ServiceList;
