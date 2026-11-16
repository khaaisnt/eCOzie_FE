import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTimeLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from "@remixicon/react";
import React from "react";

export default function Footer() {
  const linkClassName =
    "relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-lime after:transition-all hover:after:w-full";

  return (
    <footer className="w-full bg-[#F3F6F4] px-4 py-8 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="h-full">
          <div>
            <a
              href="#beranda"
              className="text-2xl font-bold font-unbounded sm:text-3xl"
            >
              eCOzie
            </a>
          </div>
          <div className="mt-8 flex gap-7 text-[#53635B] md:mt-28">
            <RiInstagramLine className="hover:text-brand-strong transition-all cursor-pointer" />
            <RiFacebookCircleLine className="hover:text-brand-strong transition-all cursor-pointer" />
            <RiYoutubeLine className="hover:text-brand-strong transition-all cursor-pointer" />
            <RiWhatsappLine className="hover:text-brand-strong transition-all cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-12 lg:gap-16">
          <div>
            <h5 className="text-xl font-semibold mb-6 uppercase">Explore</h5>
            <ul className="w-auto gap-2 flex flex-col">
              <li>
                <a href="#" className={linkClassName}>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className={linkClassName}>
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className={linkClassName}>
                  Katalog
                </a>
              </li>
              <li>
                <a href="#" className={linkClassName}>
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-6 uppercase">Find Us</h5>
            <div className="max-w-md rounded-2xl border border-gray-300 bg-white p-3">
              <div className="flex gap-2">
                <RiTimeLine />
                <p className="font-semibold">Buka Setiap Hari</p>
              </div>
              <hr className="my-3 text-gray-300" />
              <p>
                Alamat: Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang,
                Jawa Timur 65145.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-300 my-6" />
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
        <p>© 2026 Ecozie</p>
        <p>Dibuat di Malang</p>
      </div>
    </footer>
  );
}
