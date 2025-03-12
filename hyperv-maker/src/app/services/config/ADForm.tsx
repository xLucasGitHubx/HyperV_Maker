"use client";
import React, { useState, useEffect } from "react";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

export default function ADForm() {
	const { config, updateADConfig } = useServiceConfig();
	const [domainName, setDomainName] = useState("");

	// ✅ Attendre que le composant soit monté avant d'utiliser `config`
	useEffect(() => {
		setDomainName(config.ad?.domainName || ""); // Évite une erreur d'accès à `config.ad`
	}, [config.ad]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateADConfig({ domainName });
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
