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
		<>
			{/* Liste des services */}

			<div className="">
				{servicesData.map((srv) => (
					<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => handleConfigure(srv.id)} />
				))}
			</div>

			{/* Bouton Télécharger */}
			<div className="bg-white shadow-md rounded-lg p-4 cursor-pointer mt-4 hover:bg-gray-100 transition-colors flex flex-col items-center justify-center">
				<button onClick={downloadConfig} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
					Télécharger la configuration
				</button>
			</div>
		</>
	);
};

export default ServiceList;
