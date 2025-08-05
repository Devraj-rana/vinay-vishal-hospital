"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
	{ id: 1, src: "/a1.jpg", alt: "Hospital Reception Area", category: "facilities" },
	{ id: 2, src: "/a2.jpg", alt: "Modern Patient Room", category: "facilities" },
	{ id: 4, src: "/a4.jpg", alt: "Advanced Medical Equipment", category: "equipment" },
	{ id: 5, src: "/a5.jpg", alt: "Surgical Suite", category: "equipment" },
	{ id: 6, src: "/a6.jpg", alt: "Diagnostic Center", category: "equipment" },
	{ id: 7, src: "/a7.jpg", alt: "Patient Consultation Room", category: "facilities" },
	{ id: 8, src: "/a8.jpg", alt: "Medical Laboratory", category: "equipment" },
	{ id: 9, src: "/a9.jpg", alt: "Hospital Corridor", category: "facilities" },
	{ id: 10, src: "/a10.jpg", alt: "Emergency Department", category: "facilities" },
	{ id: 11, src: "/a11.jpg", alt: "ICU Unit", category: "facilities" },
	{ id: 12, src: "/a12.jpg", alt: "Radiology Department", category: "equipment" },
	{ id: 13, src: "/a13.jpg", alt: "Pharmacy Section", category: "services" },
	{ id: 14, src: "/a14.jpg", alt: "Physiotherapy Center", category: "services" },
	{ id: 15, src: "/a15.jpg", alt: "Medical Staff Area", category: "facilities" },
	{ id: 16, src: "/a16.jpg", alt: "Hospital Garden", category: "facilities" },
	{ id: 17, src: "/a17.jpg", alt: "Conference Room", category: "facilities" },
	{ id: 18, src: "/a18.jpg", alt: "Rehabilitation Center", category: "services" },
	{ id: 19, src: "/a19.jpg", alt: "Medical Equipment Storage", category: "equipment" },
	{ id: 20, src: "/a20.jpg", alt: "Patient Waiting Area", category: "facilities" },
	{ id: 21, src: "/a21.jpg", alt: "Blood Bank", category: "services" },
	{ id: 22, src: "/a22.jpg", alt: "Hospital Cafeteria", category: "facilities" },
	{ id: 23, src: "/a23.jpg", alt: "Medical Records Department", category: "services" },
	{ id: 24, src: "/a24.jpg", alt: "Hospital Exterior", category: "facilities" },
];

export default function Gallery() {
	const [activeCategory, setActiveCategory] = useState<string>("all");
	const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

	const categories = [
		{ id: "all", name: "All Images", icon: "🏥", count: images.length },
		{ id: "facilities", name: "Facilities", icon: "🏢", count: images.filter((img) => img.category === "facilities").length },
		{ id: "equipment", name: "Equipment", icon: "⚕️", count: images.filter((img) => img.category === "equipment").length },
		{ id: "services", name: "Services", icon: "🩺", count: images.filter((img) => img.category === "services").length },
	];

	const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24 lg:py-32">
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-black/20">
					<div className="absolute inset-0" style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}} />
				</div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						{/* Trust Badge */}
						<div className="inline-flex items-center bg-emerald-500/90 px-6 py-3 rounded-full mb-8">
							<svg className="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
							</svg>
							<span className="text-lg font-bold">Our Medical Facilities</span>
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
							Medical Facilities
							<span className="text-emerald-400 block mt-2">Gallery</span>
						</h1>
						
						<p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
							Explore our state-of-the-art medical facilities, advanced equipment, and comprehensive services. 
							Experience the excellence in healthcare that you can trust.
						</p>

						{/* Statistics */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
							<div className="text-center group cursor-pointer">
								<div className="relative">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110"
										style={{
											textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
										}}>
										{images.length}
									</div>
									<div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>
								<div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Gallery Images</div>
							</div>
							<div className="text-center group cursor-pointer">
								<div className="relative">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110"
										style={{
											textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
										}}>
										15+
									</div>
									<div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>
								<div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Departments</div>
							</div>
							<div className="text-center group cursor-pointer">
								<div className="relative">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110"
										style={{
											textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
										}}>
										25+
									</div>
									<div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>
								<div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Years Experience</div>
							</div>
							<div className="text-center group cursor-pointer">
								<div className="relative">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110"
										style={{
											textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
										}}>
										24/7
									</div>
									<div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>
								<div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Emergency Care</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Category Filters */}
			<section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-200 border-2 flex items-center gap-3 hover:scale-105
                ${activeCategory === category.id
										? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white border-blue-500 shadow-blue-200'
										: 'bg-white text-slate-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-blue-100'}
              `}
							>
								<span className="text-xl">{category.icon}</span>
								<span>{category.name}</span>
								<span className={`text-xs rounded-full px-2 py-1 font-bold ${
									activeCategory === category.id 
										? 'bg-white/20 text-white' 
										: 'bg-blue-100 text-blue-700'
								}`}>
									{category.count}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Grid */}
			<section className="py-16 sm:py-20 lg:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{filteredImages.map((image) => (
							<div
								key={image.id}
								className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group border border-gray-100 relative"
								onClick={() => setSelectedImage(image)}
							>
								<div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
									<Image
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-0 animate-fadein"
										width={400}
										height={400}
										style={{ transition: 'opacity 0.3s' }}
										onLoad={(e) => (e.currentTarget.style.opacity = '1')}
									/>
								</div>
								<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 text-xs font-bold text-emerald-700 shadow-lg border border-emerald-200">
									{image.category}
								</div>
								<div className="p-6">
									<h3 className="font-bold text-slate-800 text-base line-clamp-2 leading-relaxed">
										{image.alt}
									</h3>
									<div className="mt-3 flex items-center text-blue-600 text-sm font-semibold">
										<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
										</svg>
										View Details
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Modal */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadein">
					<div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-blue-100 relative">
						<div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-blue-600 to-emerald-500">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
									</svg>
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">{selectedImage.alt}</h3>
									<p className="text-white/80 text-sm font-medium capitalize">{selectedImage.category}</p>
								</div>
							</div>
							<button
								onClick={() => setSelectedImage(null)}
								className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl font-bold transition-colors hover:scale-105"
								aria-label="Close"
							>
								×
							</button>
						</div>
						<div className="p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
							<Image
								src={selectedImage.src}
								alt={selectedImage.alt}
								className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-lg border border-gray-100"
								width={800}
								height={600}
							/>
						</div>
						<div className="px-8 pb-8 flex items-center justify-between">
							<span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 text-sm font-bold capitalize shadow-lg border border-emerald-300">
								<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
								</svg>
								{selectedImage.category}
							</span>
							<div className="text-slate-500 text-sm">
								<span className="font-medium">Medical Facility</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}