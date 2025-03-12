// src/components/VMList.tsx
"use client";
import React from "react";
import VMCard from "./cards/VMCard";
import { VM } from "../types/VM";

interface VMListProps {
	vms: VM[];
	onVMClick: (vm: VM) => void;
}

const VMList: React.FC<VMListProps> = ({ vms, onVMClick }) => {
	return (
		<div>
			{vms.map((vm) => (
				<VMCard key={vm.id} vm={vm} onClick={onVMClick} />
			))}
		</div>
	);
};

export default VMList;
