// src/components/modals/ServiceModal.tsx
"use client";
import React from "react";
import Modal from "@/components/ui/Modal";
import ADForm from "@/app/services/config/ADForm";
import DHCPForm from "@/app/services/config/DHCPForm";
import DNSForm from "@/app/services/config/DNSForm";

interface ServiceModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSaveSuccess: (message: string) => void; // ✅ Ajout du callback de succès
	service: string | null; // "ad" | "dhcp" | "dns" | null
}

export default function ServiceModal({ isOpen, onClose, onSaveSuccess, service }: ServiceModalProps) {
	let formComponent: React.ReactNode = null;

	// ✅ Gestion des formulaires
	switch (service) {
		case "ad":
			formComponent = <ADForm onSuccess={() => onSaveSuccess("Active Directory configuré avec succès !")} />;
			break;
		case "dhcp":
			formComponent = <DHCPForm onSuccess={() => onSaveSuccess("DHCP configuré avec succès !")} />;
			break;
		case "dns":
			formComponent = <DNSForm onSuccess={() => onSaveSuccess("DNS configuré avec succès !")} />;
			break;
		default:
			formComponent = <p className="text-red-500">Service non reconnu.</p>;
			break;
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-4">Configurer {service?.toUpperCase()}</h2>
				{formComponent}
			</div>
		</Modal>
	);
}
