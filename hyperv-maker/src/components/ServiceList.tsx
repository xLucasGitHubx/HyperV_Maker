"use client";
import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { useRouter } from "next/navigation";

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
	// Ajoutez d'autres services si nécessaire
];

const ServiceList: React.FC = () => {
	const router = useRouter();

	const handleConfigure = (serviceId: string) => {
		// Rediriger vers une page de configuration spécifique, ex: /services/config?type=...
		router.push(`/services/config?service=${serviceId}`);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{servicesData.map((srv) => (
				<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => handleConfigure(srv.id)} />
			))}
		</div>
	);
};

export default ServiceList;
