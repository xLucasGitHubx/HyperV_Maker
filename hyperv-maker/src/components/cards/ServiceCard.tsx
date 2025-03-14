"use client";
import React from "react";

interface ServiceCardProps {
	serviceName: string;
	description: string;
	onConfigure?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceName, description, onConfigure }) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 cursor-pointer mt-4 hover:bg-gray-100 transition-colors">
			<h2 className="font-bold text-lg">{serviceName}</h2>
			<p className="text-sm text-gray-600 mt-1">{description}</p>
			{onConfigure && (
				<button onClick={onConfigure} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
					Configurer
				</button>
			)}
		</div>
	);
};

export default ServiceCard;
