"use client";
import React, { useState } from "react";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

interface DNSFormProps {
	onSuccess: () => void; // ✅ Callback pour afficher le bandeau succès et fermer la modal
}

export default function DNSForm({ onSuccess }: DNSFormProps) {
	const { config, updateDNSConfig } = useServiceConfig();
	const [zoneName, setZoneName] = useState(config.dns.zoneName);
	const [serverIP, setServerIP] = useState(config.dns.serverIP);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateDNSConfig({ zoneName, serverIP });

		// ✅ Déclenche le message de succès et ferme la modal
		onSuccess();
	};
	return (
		<form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded">
			<label className="block mb-2">
				<span className="font-semibold">Nom de la zone</span>
				<input
					type="text"
					value={zoneName}
					onChange={(e) => setZoneName(e.target.value)}
					className="block w-full border rounded px-2 py-1 mt-1"
					placeholder="example.com"
					required
				/>
			</label>

			<button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Enregistrer</button>
		</form>
	);
}
