"use client";
import React, { useState } from "react";
import { useServiceConfig } from "@/components/ServiceConfigProvider";

export default function DHCPForm() {
	const { config, updateDHCPConfig } = useServiceConfig();
	const [ipStart, setIpStart] = useState(config.dhcp.ipStart);
	const [ipEnd, setIpEnd] = useState(config.dhcp.ipEnd);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateDHCPConfig({ ipStart, ipEnd });
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded">
			<label className="block mb-2">
				<span className="font-semibold">Plage IP - Début</span>
				<input
					type="text"
					value={ipStart}
					onChange={(e) => setIpStart(e.target.value)}
					className="block w-full border rounded px-2 py-1 mt-1"
					placeholder="192.168.1.1"
					required
				/>
			</label>

			<label className="block mb-2">
				<span className="font-semibold">Plage IP - Fin</span>
				<input
					type="text"
					value={ipEnd}
					onChange={(e) => setIpEnd(e.target.value)}
					className="block w-full border rounded px-2 py-1 mt-1"
					placeholder="192.168.1.255"
					required
				/>
			</label>

			<button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Enregistrer</button>
		</form>
	);
}
