"use client";

import { type ReactNode, useId, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className="w-full rounded-2xl border border-[#d6dfda] bg-white px-4 py-4 sm:px-5">
      <h2>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 text-left font-semibold text-[#242d28] cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <svg
            aria-hidden="true"
            className={`h-4 w-4 cursor-pointer shrink-0 transition-transform ${isOpen ? "rotate-0" : "-rotate-90"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h2>

      <div id={panelId} hidden={!isOpen}>
        <hr className="my-4 border-0 border-t border-[#d6dfda]" />
        <div className="text-sm leading-5 text-[#343c38]">{children}</div>
      </div>
    </section>
  );
}
