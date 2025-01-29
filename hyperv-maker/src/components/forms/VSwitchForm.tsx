// src/components/forms/VSwitchForm.tsx
"use client";
import React, { useState } from "react";

interface VSwitchFormProps {
	onSubmit: (formData: { name: string }) => void;
	loading?: boolean;
}

const VSwitchForm: React.FC<VSwitchFormProps> = ({ onSubmit, loading = false }) => {
	const [name, setName] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ name });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
			<label className="flex flex-col">
				<span className="font-semibold mb-1">Nom du vSwitch</span>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-green-200"
					placeholder="vSwitch-01"
				/>
			</label>

			<button
				type="submit"
				disabled={loading}
				className={`bg-green-500 text-white font-semibold py-2 px-4 rounded 
          hover:bg-green-600 transition-colors 
          ${loading ? "opacity-50 cursor-not-allowed" : ""}
        `}>
				{loading ? "Création en cours..." : "Créer le vSwitch"}
			</button>
		</form>
	);
};

export default VSwitchForm;
