// src/components/cards/VMCard.tsx
"use client";
import React from "react";

interface VMCardProps {
	vm: {
		id: string;
		name: string;
		ram: number;
		ramUsed: number;
		storage: number;
		storageUsed: number;
	};
	onClick: (vm: any) => void;
}

const VMCard: React.FC<VMCardProps> = ({ vm, onClick }) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 cursor-pointer mt-4 hover:bg-gray-100 transition-colors" onClick={() => onClick(vm)}>
			<h3 className="text-lg font-semibold">{vm.name}</h3>
			<p className="text-sm text-gray-600">RAM: {vm.ram} Mo</p>
			<p className="text-sm text-gray-600">Stockage: {vm.storage} Go</p>
		</div>
	);
};

export default VMCard;
