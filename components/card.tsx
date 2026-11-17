"use client";

import { RiAddLine, RiInformationLine } from "@remixicon/react";
import Image from "next/image";

export type WasteCategory = "Kertas" | "Plastik" | "Organik" | "Kaca" | "Logam";

export interface WasteCardProps {
  name: string;
  category: WasteCategory;
  image: string;
  description: string;
  requirements: string[];
  processing: string;
  pricePerKg: number;
}

interface CardProps extends WasteCardProps {
  onCalculate: () => void;
}

const categoryStyles: Record<WasteCategory, string> = {
  Kertas: "border-[#f2a28c] bg-[#fff4ef] text-[#c9654c]",
  Plastik: "border-[#55c9e8] bg-[#effbff] text-[#1683a1]",
  Organik: "border-[#55cf9c] bg-[#effbf5] text-[#16885b]",
  Kaca: "border-[#62c6a0] bg-[#effbf5] text-[#16885b]",
  Logam: "border-[#aab5bf] bg-[#f2f5f7] text-[#596773]",
};

const rupiah = new Intl.NumberFormat("id-ID");

export default function Card({
  name,
  category,
  image,
  description,
  requirements,
  processing,
  pricePerKg,
  onCalculate,
}: CardProps) {
  return (
    <article
      draggable={false}
      className="flex h-full w-68 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white sm:w-[18rem]"
    >
      <Image
        src={image}
        alt={name}
        width={480}
        height={180}
        draggable={false}
        className="h-28 w-full object-cover sm:h-32 rounded-2xl"
      />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-medium leading-snug">{name}</h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-medium uppercase ${categoryStyles[category]}`}
          >
            {category}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-relaxed text-[#69776f]">
          {description}
        </p>

        <div className="mt-4 rounded-xl bg-[#f3f6f4] p-3 text-xs">
          <div className="mb-2 flex items-center gap-2 font-semibold">
            <RiInformationLine
              aria-hidden="true"
              className="shrink-0 text-brand-primary"
            />
            <span>Informasi sampah</span>
          </div>
          <hr className="mb-2 border-[#d6dfda]" />
          <p className="font-medium">Syarat dan Ketentuan</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[#69776f]">
            {requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
          <p className="mt-2 font-medium">Hasil pengolahan</p>
          <p className="mt-0.5 leading-relaxed text-[#69776f]">{processing}</p>
        </div>

        <div className="mt-auto">
          <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#d6dfda] pt-3">
            <p className="whitespace-nowrap font-bold">
              Rp. {rupiah.format(pricePerKg)}
              <span className="ml-1 text-xs font-normal text-[#69776f]">
                /kg
              </span>
            </p>
            <button
              type="button"
              onClick={onCalculate}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-brand-primary px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-brand-strong"
            >
              <RiAddLine aria-hidden="true" />
              Hitung
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
