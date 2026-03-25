"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Expand image: ${alt}`}
        className={`group relative block cursor-zoom-in text-left ${frameClassName}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className={imageClassName} />
        <span className="pointer-events-none absolute inset-0 border border-white/0 bg-[rgba(7,10,13,0.02)] transition group-hover:border-white/20 group-hover:bg-[rgba(7,10,13,0.18)] group-focus-visible:border-white/25 group-focus-visible:bg-[rgba(7,10,13,0.2)]" />
        <span className="pointer-events-none absolute bottom-3 left-3 border border-white/15 bg-[rgba(7,10,13,0.74)] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/85 transition group-hover:border-white/30 group-hover:text-white group-focus-visible:border-white/30 group-focus-visible:text-white">
          Click to expand
        </span>
      </button>

      {isOpen && isMounted
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(5,7,10,0.94)] px-4 py-6 sm:px-8"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative flex max-h-[90vh] w-full max-w-[min(94vw,120rem)] flex-col overflow-auto rounded-[0.4rem] border border-white/10 bg-[rgba(8,11,15,0.82)] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.56)] sm:p-4"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-3 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <p className="min-w-0 text-sm leading-6 text-[color:var(--color-text-muted)]">{alt}</p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="shrink-0 border border-white/15 bg-[rgba(12,16,20,0.9)] px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-[rgba(16,21,26,0.96)]"
                    aria-label="Close image preview"
                  >
                    Close
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="max-h-[78vh] w-auto max-w-full bg-black object-contain"
                  />
                </div>
                <p className="mt-3 text-xs leading-6 text-[color:var(--color-text-muted)]">
                  Press <span className="font-mono text-white">Esc</span> or click outside the frame to close.
                </p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
