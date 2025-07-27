"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const images = [
  { src: "/a1.jpg", alt: "Image 1" },
  { src: "/a2.jpg", alt: "Image 2" },
  { src: "/a4.jpg", alt: "Image 2" },
  { src: "/a5.jpg", alt: "Image 2" },
  { src: "/a6.jpg", alt: "Image 2" },
  { src: "/a7.jpg", alt: "Image 2" },
  { src: "/a8.jpg", alt: "Image 2" },
  { src: "/a9.jpg", alt: "Image 2" },
  { src: "/a10.jpg", alt: "Image 2" },
  { src: "/a11.jpg", alt: "Image 2" },
  { src: "/a12.jpg", alt: "Image 2" },
  { src: "/a13.jpg", alt: "Image 2" },
  { src: "/a14.jpg", alt: "Image 2" },
  { src: "/a15.jpg", alt: "Image 2" },
  { src: "/a16.jpg", alt: "Image 2" },
  { src: "/a17.jpg", alt: "Image 2" },
  { src: "/a18.jpg", alt: "Image 2" },
  { src: "/a19.jpg", alt: "Image 2" },
  { src: "/a20.jpg", alt: "Image 2" },
  { src: "/a21.jpg", alt: "Image 2" },
  { src: "/a22.jpg", alt: "Image 2" },
  { src: "/a23.jpg", alt: "Image 2" },
  { src: "/a24.jpg", alt: "Image 2" },
];

type Media = { src: string; title: string; type: "image" };

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<Media | null>(null);

  const openModal = (media: Media) => {
    setActiveMedia(media);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-[#0a1a3a] mb-6">Gallery</h1>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer group"
            onClick={() =>
              openModal({
                src: img.src,
                title: "",
                type: "image",
              })
            }
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0"
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60 p-4">
          {activeMedia && (
            <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-4">
              <Image
                src={activeMedia.src}
                alt={activeMedia.title}
                width={800}
                height={500}
                className="w-full rounded"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-blue-600 hover:underline"
              >
                Close
              </button>
            </Dialog.Panel>
          )}
        </div>
      </Dialog>
    </div>
  );
}