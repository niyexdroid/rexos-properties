"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Props = {
  name: string;
  images: string[];
  heroFirst?: boolean; // if true, first image is large left layout like existing page
  className?: string;
};

export default function PropertyGallery({
  name,
  images,
  heroFirst = true,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, images.length, close]);

  if (!images?.length) return null;

  return (
    <div className={className}>
      {/* Grid layout replicating original design */}
      {heroFirst ? (
        <div className="grid grid-cols-12 gap-3">
          <button
            type="button"
            onClick={() => openAt(0)}
            className="col-span-12 md:col-span-7 relative h-64 md:h-[360px] rounded-lg overflow-hidden group focus:outline-none"
            aria-label="Open image gallery"
          >
            <Image
              src={images[0]}
              alt={`${name} image 1`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-3">
            {images.slice(1, 3).map((img, idx) => (
              <button
                type="button"
                key={idx + 1}
                onClick={() => openAt(idx + 1)}
                className="relative h-32 md:h-[174px] rounded-lg overflow-hidden group focus:outline-none"
                aria-label={`Open image ${idx + 2}`}
              >
                <Image
                  src={img}
                  alt={`${name} image ${idx + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openAt(i)}
              className="relative h-40 rounded-lg overflow-hidden group focus:outline-none"
              aria-label={`Open image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center px-4 py-3 text-white">
            <span className="text-sm opacity-80">
              Image {index + 1} of {images.length}
            </span>
            <div className="flex gap-2 items-center">
              <button
                onClick={() =>
                  setIndex((i) => (i - 1 + images.length) % images.length)
                }
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
                aria-label="Previous image"
              >
                ◀
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
                aria-label="Next image"
              >
                ▶
              </button>
              <button
                onClick={close}
                className="ml-2 p-2 rounded-full bg-white/15 hover:bg-white/25"
                aria-label="Close gallery"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.225 4.811A1 1 0 0 1 7.64 3.396L12 7.757l4.36-4.36a1 1 0 1 1 1.415 1.415L13.414 9.17l4.36 4.36a1 1 0 0 1-1.415 1.414L12 10.586l-4.36 4.358a1 1 0 0 1-1.415-1.413l4.36-4.36-4.36-4.36Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              key={index}
              src={images[index]}
              alt={`${name} image enlarged ${index + 1}`}
              fill
              className="object-contain select-none"
              priority
            />
          </div>
          <div className="px-4 py-4 flex overflow-x-auto gap-2 bg-black/70">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Select image ${i + 1}`}
                className={`relative h-16 w-24 rounded overflow-hidden border ${
                  i === index
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
