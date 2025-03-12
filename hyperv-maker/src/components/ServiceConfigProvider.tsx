"use client";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface DHCPConfig {
	ipStart: string;
	ipEnd: string;
}

interface ADConfig {
	domainName: string;
}

interface DNSConfig {
	zoneName: string;
	serverIP: string;
}

interface ServiceConfig {
	dhcp: DHCPConfig;
	ad: ADConfig;
	dns: DNSConfig;
}

interface ServiceConfigContextProps {
	config: ServiceConfig;
	updateDHCPConfig: (data: Partial<DHCPConfig>) => void;
	updateADConfig: (data: Partial<ADConfig>) => void;
	updateDNSConfig: (data: Partial<DNSConfig>) => void;
	downloadConfig: () => void;
}

const ServiceConfigContext = createContext<ServiceConfigContextProps | null>(null);

// Hook pour consommer le contexte
export function useServiceConfig() {
	const context = useContext(ServiceConfigContext);
	if (!context) {
		throw new Error("useServiceConfig must be used within a ServiceConfigProvider");
	}
	return context;
}

// Provider
export default function ServiceConfigProvider({ children }: { children: React.ReactNode }) {
	const [config, setConfig] = useState<ServiceConfig>({
		dhcp: { ipStart: "", ipEnd: "" },
		ad: { domainName: "" },
		dns: { zoneName: "", serverIP: "" },
	});

	const router = useRouter();

	// Fonction pour télécharger la configuration
	const downloadConfig = () => {
		const json = JSON.stringify(config, null, 2);
		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);

		const a = document.createElement("a");
		a.href = url;
		a.download = "services-config.json";
		a.click();
		URL.revokeObjectURL(url);
	};

	// Mettre à jour la config DHCP et rediriger avec notification
	const updateDHCPConfig = (data: Partial<DHCPConfig>) => {
		setConfig((prev) => ({ ...prev, dhcp: { ...prev.dhcp, ...data } }));
		localStorage.setItem("successMessage", "DHCP configuré avec succès !");
		router.push("/services");
	};

	// Mettre à jour la config AD et rediriger avec notification
	const updateADConfig = (data: Partial<ADConfig>) => {
		setConfig((prev) => ({ ...prev, ad: { ...prev.ad, ...data } }));
		localStorage.setItem("successMessage", "Active Directory configuré avec succès !");
		router.push("/services");
	};

	// Mettre à jour la config DNS et rediriger avec notification
	const updateDNSConfig = (data: Partial<DNSConfig>) => {
		setConfig((prev) => ({ ...prev, dns: { ...prev.dns, ...data } }));
		localStorage.setItem("successMessage", "DNS configuré avec succès !");
		router.push("/services");
	};

	return (
		<ServiceConfigContext.Provider
			value={{
				config,
				updateDHCPConfig,
				updateADConfig,
				updateDNSConfig,
				downloadConfig,
			}}>
			{children}
		</ServiceConfigContext.Provider>
	);
}
