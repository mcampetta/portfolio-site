"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  frameClassName: string;
  imageClassName: string;
};

export function LightboxImage({
  src,
  alt,
  width,
  height,
  frameClassName,
  imageClassName,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={`group relative block text-left ${frameClassName}`}>
        <Image src={src} alt={alt} width={width} height={height} className={imageClassName} />
        <span className="pointer-events-none absolute right-3 top-3 border border-white/15 bg-[rgba(7,10,13,0.7)] px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/85 transition group-hover:border-white/30 group-hover:text-white">
          Expand
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(5,7,10,0.92)] px-4 py-6 sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 border border-white/15 bg-[rgba(7,10,13,0.76)] px-3 py-2 text-sm font-semibold text-white transition hover:border-white/30"
          >
            Close
          </button>
          <div className="max-h-full max-w-[min(92vw,120rem)]" onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[88vh] w-auto max-w-full border border-white/10 bg-black object-contain shadow-[0_28px_80px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
