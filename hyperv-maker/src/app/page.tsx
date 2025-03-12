"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "@/components/cards/ServiceCard";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

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
	const { downloadConfig } = useServiceConfig();

	// ✅ Récupérer le paramètre `success` directement depuis l'URL
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const message = params.get("success");
		if (message) {
			setSuccessMessage(decodeURIComponent(message));

			// ✅ Efface le message après 3 secondes
			setTimeout(() => {
				setSuccessMessage(null);
				router.replace("/services"); // Nettoie l'URL sans recharger la page
			}, 3000);
		}
	}, [router]);

	const handleConfigure = (serviceId: string) => {
		router.push(`/services/config?service=${serviceId}`);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Services</h1>

			{/* ✅ Bandeau de succès */}
			{successMessage && <div className="mb-4 bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md">{successMessage}</div>}

			{/* Grid des services */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
				{servicesData.map((srv) => (
					<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => handleConfigure(srv.id)} />
				))}
			</div>

			{/* Bouton Télécharger */}
			<div className="flex justify-center mt-6">
				<button onClick={downloadConfig} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
					Télécharger la configuration
				</button>
			</div>
		</div>
	);
};

export default ServiceList;
