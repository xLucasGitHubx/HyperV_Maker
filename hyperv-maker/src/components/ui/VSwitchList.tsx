// src/components/ui/VSwitchList.tsx
"use client";
import React from "react";

interface VSwitch {
	id: string;
	name: string;
}

const mockVSwitches: VSwitch[] = [
	{ id: "vsw-1", name: "VSwitch 1" },
	{ id: "vsw-2", name: "VSwitch 2" },
	{ id: "vsw-3", name: "VSwitch 3" },
];

const VSwitchList: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{mockVSwitches.map((vs) => (
				<div key={vs.id} className="bg-teal-100 rounded p-3 text-teal-900">
					{vs.name}
				</div>
			))}
		</div>
	);
};

export default VSwitchList;
