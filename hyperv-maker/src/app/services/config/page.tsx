"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ServiceConfigPage() {
	const searchParams = useSearchParams();
	const service = searchParams.get("service"); // ex: "dhcp" ou "ad"

	const [rangeStart, setRangeStart] = useState("");
	const [rangeEnd, setRangeEnd] = useState("");
	// ...autres champs

	useEffect(() => {
		// On peut charger la config existante du service si on a une API
	}, [service]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Envoyer la config vers API...
		console.log("Config service:", service, { rangeStart, rangeEnd });
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Configuration du service: {service?.toUpperCase()}</h1>
			<form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded max-w-md space-y-4">
				{/* Ex: config DHCP */}
				<label className="block">
					<span className="text-gray-700 font-semibold">Plage IP - Début</span>
					<input
						type="text"
						value={rangeStart}
						onChange={(e) => setRangeStart(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
					/>
				</label>
				<label className="block">
					<span className="text-gray-700 font-semibold">Plage IP - Fin</span>
					<input
						type="text"
						value={rangeEnd}
						onChange={(e) => setRangeEnd(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
					/>
				</label>

				<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
					Enregistrer
				</button>
			</form>
		</div>
	);
}
