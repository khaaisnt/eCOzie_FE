"use client";

import React, { useState } from "react";
import { RiWhatsappLine } from "@remixicon/react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName =
    "relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-lime after:transition-all hover:after:w-full";

  return (
    <header className="relative flex flex-wrap items-center justify-between bg-white px-5 py-4 sm:px-8 lg:px-14">
      <Link
        href="/beranda"
        className="text-2xl font-bold font-unbounded sm:text-3xl"
      >
        eCOzie
      </Link>

      <button
        type="button"
        className="rounded-lg p-2 text-2xl text-brand-strong lg:hidden"
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
      </button>

      <nav
        id="navbar-menu"
        className={`${isMenuOpen ? "flex" : "hidden"} order-3 w-full pt-4 lg:order-0 lg:flex lg:w-auto lg:pt-0`}
      >
        <ul className="flex w-full text-center flex-col gap-4 lg:w-auto lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
          <li>
            <Link
              href="/"
              aria-current="page"
              className={`${linkClassName} after:w-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/tentang"
              className={linkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/katalog"
              className={linkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              Katalog
            </Link>
          </li>
          <li>
            <Link
              href="/kontak"
              className={linkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
          </li>
          <li className="pt-2 lg:hidden">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-strong px-6 py-2 text-white transition-colors hover:bg-action-hover"
            >
              <RiWhatsappLine />
              Hubungi Kami
            </button>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="hidden items-center gap-2 rounded-xl px-8 py-2 text-brand-strong outline outline-gray-300 transition-all hover:bg-brand-strong hover:text-white lg:flex cursor-pointer"
      >
        <RiWhatsappLine />
        Hubungi Kami
      </button>
    </header>
  );
}
