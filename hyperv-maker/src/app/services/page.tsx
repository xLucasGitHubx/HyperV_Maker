"use client";
import ServiceList from "@/components/ServiceList";

export default function ServicesPage() {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Gestion des Services</h1>
			<ServiceList />
		</div>
	);
}
