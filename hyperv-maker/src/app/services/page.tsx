// a supprimer la page n'est pas utiliser dans le projet

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "@/components/cards/ServiceCard";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

const servicesData = [
	{ id: "ad", name: "Active Directory", description: "Gérer les utilisateurs..." },
	{ id: "dhcp", name: "DHCP", description: "Attribuer automatiquement des adresses IP..." },
	{ id: "dns", name: "DNS", description: "Résoudre les noms de domaine en adresses IP." },
];

export default function ServiceList() {
	const router = useRouter();
	const { downloadConfig } = useServiceConfig();

	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	useEffect(() => {
		// 1️⃣ Lire le message dans localStorage
		const message = localStorage.getItem("successMessage");
		if (message) {
			setSuccessMessage(message);

			// 2️⃣ L’effacer après 3s et le supprimer de localStorage
			setTimeout(() => {
				setSuccessMessage(null);
				localStorage.removeItem("successMessage");
			}, 3000);
		}
	}, []);

	const handleConfigure = (serviceId: string) => {
		router.push(`/services/config?service=${serviceId}`);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Services</h1>

			{/* Bandeau de succès (si on a lu un message) */}
			{successMessage && <div className="mb-4 bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md">{successMessage}</div>}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
				{servicesData.map((srv) => (
					<ServiceCard key={srv.id} serviceName={srv.name} description={srv.description} onConfigure={() => handleConfigure(srv.id)} />
				))}
			</div>

			<div className="flex justify-center mt-6">
				<button onClick={downloadConfig} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
					Télécharger la configuration
				</button>
			</div>
		</div>
	);
}
