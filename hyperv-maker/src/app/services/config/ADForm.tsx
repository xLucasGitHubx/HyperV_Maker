"use client";
import React, { useState } from "react";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

interface ADFormProps {
	onSuccess: () => void; // ✅ Ajout du callback de succès
}

export default function ADForm({ onSuccess }: ADFormProps) {
	const { config, updateADConfig } = useServiceConfig();
	const [domainName, setDomainName] = useState(config.ad.domainName);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateADConfig({ domainName });

		// ✅ Déclencher le message de succès et fermer la modal
		onSuccess();
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded">
			<label className="block mb-2">
				<span className="font-semibold">Nom de domaine</span>
				<input
					type="text"
					value={domainName}
					onChange={(e) => setDomainName(e.target.value)}
					className="block w-full border rounded px-2 py-1 mt-1"
					placeholder="mondomaine.local"
					required
				/>
			</label>

			<button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Enregistrer</button>
		</form>
	);
}
