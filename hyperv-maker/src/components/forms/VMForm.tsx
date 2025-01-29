"use client";
import React, { useState } from "react";

interface VMFormProps {
	onSubmit: (formData: { name: string; ram: number; vcpu: number; vswitch: string }) => void;
	loading?: boolean;
}

const VMForm: React.FC<VMFormProps> = ({ onSubmit, loading = false }) => {
	const [name, setName] = useState("");
	const [ram, setRam] = useState(1024);
	const [vcpu, setVcpu] = useState(1);
	const [vswitch, setVswitch] = useState("default-switch");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ name, ram, vcpu, vswitch });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow max-w-md mx-auto">
			<h2 className="text-xl font-bold">Créer une nouvelle VM</h2>

			{/* Champ Nom de la VM */}
			<label className="flex flex-col">
				<span className="font-semibold mb-1">Nom de la VM</span>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
					placeholder="vm-test-01"
				/>
			</label>

			{/* Champ RAM */}
			<label className="flex flex-col">
				<span className="font-semibold mb-1">RAM (Mo)</span>
				<input
					type="number"
					value={ram}
					onChange={(e) => setRam(Number(e.target.value))}
					required
					min={512}
					className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
				/>
			</label>

			{/* Champ vCPU */}
			<label className="flex flex-col">
				<span className="font-semibold mb-1">vCPU</span>
				<input
					type="number"
					value={vcpu}
					onChange={(e) => setVcpu(Number(e.target.value))}
					required
					min={1}
					className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
				/>
			</label>

			{/* Sélection du VSwitch */}
			<label className="flex flex-col">
				<span className="font-semibold mb-1">VSwitch</span>
				<select
					value={vswitch}
					onChange={(e) => setVswitch(e.target.value)}
					className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200">
					<option value="default-switch">Default Switch</option>
					<option value="vswitch-1">VSwitch 1</option>
					<option value="vswitch-2">VSwitch 2</option>
				</select>
			</label>

			{/* Bouton de soumission */}
			<button
				type="submit"
				disabled={loading}
				className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded 
          hover:bg-blue-600 transition-colors 
          ${loading ? "opacity-50 cursor-not-allowed" : ""}
        `}>
				{loading ? "Création en cours..." : "Créer la VM"}
			</button>
		</form>
	);
};

export default VMForm;
