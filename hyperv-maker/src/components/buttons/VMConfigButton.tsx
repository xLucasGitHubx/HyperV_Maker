"use client";
import React from "react";
import { Plus } from "lucide-react";

interface VMConfigButtonProps {
	title?: string;
	helpText?: string;
	Icon?: React.ElementType;
	onClick?: () => void; // on remplace la navigation par un callback
	buttonColor?: string;
	hoverButtonColor?: string;
}

const VMConfigButton: React.FC<VMConfigButtonProps> = ({
	title = "Add VM / Add VSwitch",
	helpText = "Créer une nouvelle machine virtuelle ou ajouter un switch réseau.",
	Icon = Plus,
	onClick,
	buttonColor = "bg-blue-500",
	hoverButtonColor = "hover:bg-blue-600",
}) => {
	return (
		<div
			className="bg-white shadow-md rounded-lg p-4 cursor-pointer mt-4 hover:bg-gray-100 transition-colors flex flex-col items-center justify-center"
			role="region"
			aria-label="Configuration VM">
			<button
				onClick={(e) => {
					e.preventDefault(); // Empêche tout comportement par défaut (utile si wrapped dans un <a>)
					e.stopPropagation(); // Empêche l'événement de remonter
					console.log(`Bouton cliqué : ${title}`);
					if (onClick) onClick();
				}}
				className={`
          flex items-center justify-center
          ${buttonColor} text-white font-bold
          py-2 px-4 rounded-xl
          transition-colors duration-200
          ${hoverButtonColor}
        `}
				aria-label={title}>
				<Icon className="w-6 h-6 mr-2" aria-hidden="true" />
				{title}
			</button>
			<p className="text-sm text-gray-500 mt-2 text-center">{helpText}</p>
		</div>
	);
};

export default VMConfigButton;
