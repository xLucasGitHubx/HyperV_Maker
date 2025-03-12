// src/app/services/config/page.tsx
"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import DHCPForm from "./DHCPForm";
import ADForm from "./ADForm";
import DNSForm from "./DNSForm";

export default function ServiceConfigPage() {
	const searchParams = useSearchParams();
	const service = searchParams.get("service");

	// Sélectionne le composant de configuration selon le service
	let formComponent: React.ReactNode;

	switch (service) {
		case "dhcp":
			formComponent = <DHCPForm />;
			break;
		case "ad":
			formComponent = <ADForm />;
			break;
		case "dns":
			formComponent = <DNSForm />;
			break;
		default:
			formComponent = <p className="text-red-500">Service inconnu. Vérifiez l’URL (ex: ?service=dhcp, ad ou dns).</p>;
			break;
	}

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Configuration du service: {service?.toUpperCase()}</h1>
			{formComponent}
		</div>
	);
}
