import React from "react";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gray-50">
			{/* En-tête */}
			<header className="bg-blue-600 text-white py-4 shadow">
				<div className="container mx-auto px-6 flex justify-between items-center">
					<h1 className="text-xl font-bold">HyperV Maker</h1>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<a href="#presentation" className="hover:underline">
									Présentation
								</a>
							</li>
							<li>
								<a href="#Objectifs" className="hover:underline">
									Objectifs
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			{/* Section Cool */}
			<section className="text-center py-20 bg-blue-100">
				<h2 className="text-4xl font-bold mb-4 text-gray-700">Simplifiez le Déploiement de vos Machines Virtuelles</h2>
				<p className="text-lg text-gray-600 mb-6">Une solution intuitive pour gérer vos environnements virtuels avec un seul clic.</p>
				<a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
					Contactez-Nous
				</a>
			</section>

			{/* Présentation */}
			<section id="presentation" className="container mx-auto px-6 py-16">
				<h3 className="text-3xl font-bold mb-6">Présentation du Projet</h3>
				<p className="text-lg leading-relaxed text-gray-700">
					Notre projet HyperV Maker vise à simplifier le déploiement et la gestion de machines virtuelles. Grâce à une interface conviviale et des
					scripts automatisés, les utilisateurs peuvent configurer et déployer des environnements virtuels en quelques clics.
				</p>
			</section>

			{/* Objectifs */}
			<section id="Objectifs" className="bg-gray-100 py-16">
				<div className="container mx-auto px-6">
					<h3 className="text-3xl font-bold mb-6">Objectifs 🎯</h3>
					<ul className="space-y-6">
						<li className="bg-white shadow p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-2">1. Automatisation et simplicité d’utilisation</h4>
							<p className="text-gray-700">
								L’objectif principal d’HyperV Maker est de rendre la gestion et le déploiement des machines virtuelles accessibles à tous, même aux
								non-spécialistes. Grâce à une interface intuitive et épurée, les utilisateurs peuvent, en quelques clics, configurer et déployer des
								environnements virtuels sans se perdre dans des détails techniques complexes. L’automatisation est au cœur du projet : chaque action,
								qu’il s’agisse de la création d’une VM vierge ou de l’ajout de services comme DHCP ou Active Directory, est simplifiée pour économiser
								du temps et réduire les erreurs humaines.
							</p>
						</li>
						<li className="bg-white shadow p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-2">2. Flexibilité pour répondre aux besoins variés</h4>
							<p className="text-gray-700">
								HyperV Maker ne se limite pas à une solution standardisée : il offre aux utilisateurs la possibilité de personnaliser leurs machines
								virtuelles selon leurs besoins spécifiques. Cela inclut des configurations matérielles comme la RAM ou les vCPU, ainsi que
								l’intégration de services essentiels. Cette flexibilité permet d’adresser une large gamme d’utilisateurs, des petites entreprises
								cherchant une solution rapide aux équipes techniques ayant besoin d’un outil puissant et adaptable.
							</p>
						</li>
						<li className="bg-white shadow p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-2">3. Fiabilité et efficacité opérationnelle</h4>
							<p className="text-gray-700">
								En intégrant des technologies modernes (React pour le front-end, API REST pour le backend, et scripts PowerShell ou Python), HyperV
								Maker garantit une performance robuste et une interopérabilité fluide. L’optimisation des ressources, la gestion des risques, et les
								tests rigoureux contribuent à offrir une solution fiable, même dans des environnements à forte charge. En éliminant les points de
								friction traditionnels, HyperV Maker permet aux entreprises de se concentrer sur leurs objectifs stratégiques sans être freinées par
								des contraintes technologiques.
							</p>
						</li>
					</ul>
				</div>
			</section>

			{/* Section Contact */}
			<section id="contact" className="container mx-auto px-6 py-16">
				<h3 className="text-3xl font-bold mb-6">Contactez-Nous</h3>
				<p className="text-lg text-gray-700 mb-6">
					Pour toute question ou demande de démo, contactez-nous à{" "}
					<a href="mailto:contact@hypervmaker.com" className="text-blue-600 underline hover:text-blue-800">
						contact@hypervmaker.com
					</a>
					.
				</p>
			</section>

			{/* Pied de Page */}
			<footer className="bg-blue-600 text-white py-6">
				<div className="container mx-auto text-center">
					<p>&copy; 2024 HyperV Maker. Tous droits réservés.</p>
				</div>
			</footer>
		</main>
	);
}
