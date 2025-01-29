"use client";
import React, { useState } from "react";
import VMForm from "@/components/forms/VMForm";

export default function VMConfigPage() {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	// Exemple d'appel API fictif
	const createVM = async (data: { name: string; ram: number; vcpu: number; vswitch: string }) => {
		setLoading(true);
		setMessage("");
		try {
			// Exemple d'appel vers une API (non implémentée ici)
			// await fetch("/api/vm", { method: "POST", body: JSON.stringify(data) });
			await new Promise((resolve) => setTimeout(resolve, 1500)); // simule un délai
			setMessage(`VM "${data.name}" créée avec succès !`);
		} catch (error) {
			console.error(error);
			setMessage("Erreur lors de la création de la VM");
		}
		setLoading(false);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Configuration d'une nouvelle VM</h1>
			<VMForm onSubmit={createVM} loading={loading} />

			{message && <div className="mt-4 p-2 rounded bg-green-100 text-green-700">{message}</div>}
		</div>
	);
}
