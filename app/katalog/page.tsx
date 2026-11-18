"use client";

import Card, { type WasteCardProps } from "@/components/card";
import {
  RiAddLine,
  RiCloseLine,
  RiCloudyLine,
  RiFlashlightLine,
  RiRecycleLine,
  RiSubtractLine,
} from "@remixicon/react";
import { useRef, useState } from "react";

interface CalculatorEntry {
  id: number;
  item: WasteCardProps;
  weight: number | "";
}

const co2PerKg = 2.11;
const energySavedPerKg = 8.13;
const rupiahFormatter = new Intl.NumberFormat("id-ID");
const decimalFormatter = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const wasteItems: WasteCardProps[] = [
  {
    name: "Kardus",
    category: "Kertas",
    image: "/photos/cardboard.png",
    description:
      "Kardus kemasan barang, kardus paket, dan kardus bekas elektronik.",
    requirements: [
      "Tidak basah atau lembap",
      "Bersih dari sisa makanan",
      "Dilipat agar mudah disimpan",
    ],
    processing: "Dapat diolah menjadi kardus baru dan bahan kertas kemasan.",
    pricePerKg: 1200,
  },
  {
    name: "Botol Plastik PET",
    category: "Plastik",
    image: "/photos/plasticBottles.png",
    description: "Botol air mineral dan botol bekas minuman.",
    requirements: [
      "Kosong dari sisa cairan",
      "Bersih dan kering",
      "Tutup dipisahkan",
    ],
    processing:
      "Dapat diolah kembali menjadi bahan baku produk plastik daur ulang.",
    pricePerKg: 4000,
  },
  {
    name: "Kertas HVS",
    category: "Kertas",
    image: "/photos/papers.png",
    description:
      "Kertas dokumen, kertas fotokopi, kertas tugas, dan kertas cetak.",
    requirements: [
      "Tidak basah atau berminyak",
      "Bersih dari sampah lain",
      "Disusun agar mudah ditimbang",
    ],
    processing: "Dapat didaur ulang menjadi kertas baru.",
    pricePerKg: 1500,
  },
  {
    name: "Minyak Jelantah",
    category: "Organik",
    image: "/photos/oilBottles.png",
    description: "Minyak goreng bekas dari aktivitas memasak.",
    requirements: [
      "Sudah dalam kondisi dingin",
      "Disimpan dalam wadah tertutup",
      "Tidak tercampur air atau bahan lain",
    ],
    processing: "Dapat dimanfaatkan sebagai bahan baku biodiesel.",
    pricePerKg: 5000,
  },
  {
    name: "Plastik HDPE",
    category: "Plastik",
    image: "/photos/detergent.png",
    description:
      "Botol plastik tebal seperti botol sabun, sampo, dan deterjen.",
    requirements: [
      "Kosong dari sisa cairan",
      "Bersih dan kering",
      "Aman dari bahan berbahaya",
    ],
    processing: "Dapat didaur ulang menjadi produk plastik baru.",
    pricePerKg: 2500,
  },
  {
    name: "Buku Bekas",
    category: "Kertas",
    image: "/photos/books.png",
    description: "Buku bacaan dan buku tulis bekas yang sudah tidak digunakan.",
    requirements: [
      "Kering dan tidak berjamur",
      "Sampul dipisahkan bila berbeda bahan",
      "Disusun agar mudah ditimbang",
    ],
    processing: "Dapat didaur ulang menjadi bahan kertas baru.",
    pricePerKg: 1000,
  },
  {
    name: "Botol Kaca",
    category: "Kaca",
    image: "/photos/glassBottles.png",
    description: "Botol kaca minuman atau kemasan yang sudah tidak digunakan.",
    requirements: [
      "Kosong dan bersih",
      "Tidak tercampur keramik",
      "Dikemas aman agar tidak pecah",
    ],
    processing: "Dapat dilebur dan dibentuk kembali menjadi produk kaca.",
    pricePerKg: 500,
  },
  {
    name: "Kaleng Aluminium",
    category: "Logam",
    image: "/photos/cans.png",
    description: "Kaleng minuman berbahan aluminium yang sudah kosong.",
    requirements: [
      "Kosong dari sisa minuman",
      "Bersih dan kering",
      "Tidak tercampur sampah lain",
    ],
    processing: "Dapat dilebur kembali menjadi bahan baku aluminium.",
    pricePerKg: 7000,
  },
  {
    name: "Logam Bekas",
    category: "Logam",
    image: "/photos/metals.png",
    description: "Benda logam bekas yang dapat dipilah untuk didaur ulang.",
    requirements: [
      "Pisahkan berdasarkan jenis logam",
      "Pastikan tidak mengandung bahan berbahaya",
      "Bersihkan dari material lain",
    ],
    processing: "Dapat diproses kembali menjadi bahan baku logam.",
    pricePerKg: 4000,
  },
];

const CatalogPage = () => {
  const [calculatorEntries, setCalculatorEntries] = useState<CalculatorEntry[]>(
    [],
  );
  const calculatorRef = useRef<HTMLElement>(null);
  const nextEntryId = useRef(0);

  const addItemToCalculator = (item: WasteCardProps) => {
    const newEntryId = nextEntryId.current++;

    setCalculatorEntries((entries) => [
      ...entries,
      { id: newEntryId, item, weight: 1 },
    ]);

    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const updateEntry = (
    entryId: number,
    update: Partial<Pick<CalculatorEntry, "item" | "weight">>,
  ) => {
    setCalculatorEntries((entries) =>
      entries.map((entry) =>
        entry.id === entryId ? { ...entry, ...update } : entry,
      ),
    );
  };

  const adjustWeight = (entry: CalculatorEntry, change: number) => {
    const currentWeight = typeof entry.weight === "number" ? entry.weight : 0;
    updateEntry(entry.id, {
      weight: Math.max(0.1, Math.round((currentWeight + change) * 10) / 10),
    });
  };

  const totalWeight = calculatorEntries.reduce(
    (total, entry) =>
      total + (typeof entry.weight === "number" ? entry.weight : 0),
    0,
  );
  const totalValue = calculatorEntries.reduce(
    (total, entry) =>
      total +
      entry.item.pricePerKg *
        (typeof entry.weight === "number" ? entry.weight : 0),
    0,
  );

  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="flex justify-center px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="max-w-xl">
            <h1 className="mb-3 font-unbounded text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Katalog Sampah
            </h1>
            <p className="text-sm leading-relaxed sm:text-base">
              Kenali beberapa jenis sampah yang dapat disetorkan ke Ecozie
              beserta estimasi nilai dan manfaatnya bagi lingkungan
            </p>
          </div>
        </div>
      </section>

      {/* Daftar Harga Sampah */}
      <section className="my-16 sm:my-24">
        <div className="mb-8 text-center sm:mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p>DAFTAR HARGA SAMPAH</p>
          </div>
          <h2 className="font-unbounded text-3xl font-bold leading-tight sm:text-4xl">
            Harga Sampah Hari Ini
          </h2>
        </div>
        <div
          role="region"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:gap-5 sm:px-6 lg:px-10"
          aria-label="Daftar harga sampah yang dapat disetorkan"
        >
          {wasteItems.map((item) => (
            <Card
              key={item.name}
              {...item}
              onCalculate={() => addItemToCalculator(item)}
            />
          ))}
        </div>
      </section>

      {/* Kalkulator Sampah */}
      <section
        ref={calculatorRef}
        className="scroll-mt-8 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10"
      >
        <div className="mb-8 text-center sm:mb-10">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-lime" />
            <p>KALKULATOR SAMPAH</p>
          </div>
          <h2 className="font-unbounded text-3xl font-bold leading-tight sm:text-4xl">
            Hitung Nilai dan Dampaknya
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,1fr)] lg:gap-8">
          <div className="min-w-0 rounded-2xl p-4 sm:p-6">
            <div className="space-y-3">
              {calculatorEntries.length === 0 ? (
                <p className="rounded-xl bg-[#f3f6f4] p-4 text-sm text-[#69776f]">
                  Pilih jenis sampah dari daftar harga dengan menekan tombol
                  “Hitung”.
                </p>
              ) : (
                calculatorEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center"
                  >
                    <label className="sr-only" htmlFor={`waste-${entry.id}`}>
                      Jenis sampah
                    </label>
                    <select
                      id={`waste-${entry.id}`}
                      value={entry.item.name}
                      onChange={(event) => {
                        const selectedItem = wasteItems.find(
                          (item) => item.name === event.target.value,
                        );
                        if (selectedItem) {
                          updateEntry(entry.id, { item: selectedItem });
                        }
                      }}
                      className="w-full min-w-0 rounded-lg border border-[#d1ddd6] bg-white px-3 py-2 text-sm outline-none focus:border-brand-strong"
                    >
                      {wasteItems.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center justify-center rounded-lg border border-[#d1ddd6]">
                      <button
                        type="button"
                        aria-label={`Kurangi berat ${entry.item.name}`}
                        onClick={() => adjustWeight(entry, -0.1)}
                        className="px-3 py-2 text-brand-primary cursor-pointer"
                      >
                        <RiSubtractLine />
                      </button>
                      <label className="sr-only" htmlFor={`weight-${entry.id}`}>
                        Berat dalam kilogram
                      </label>
                      <input
                        id={`weight-${entry.id}`}
                        type="number"
                        min="0.1"
                        step="0.1"
                        inputMode="decimal"
                        value={entry.weight}
                        onChange={(event) => {
                          const value = event.currentTarget.value;
                          if (value === "") {
                            updateEntry(entry.id, { weight: "" });
                            return;
                          }

                          const parsedWeight = Number(value);
                          if (Number.isFinite(parsedWeight)) {
                            updateEntry(entry.id, {
                              weight: Math.max(0.1, parsedWeight),
                            });
                          }
                        }}
                        className="w-16 py-2 text-center text-sm outline-none"
                      />
                      <span className="pr-2 text-sm text-[#69776f]">kg</span>
                      <button
                        type="button"
                        aria-label={`Tambah berat ${entry.item.name}`}
                        onClick={() => adjustWeight(entry, 0.1)}
                        className="px-3 py-2 text-brand-primary cursor-pointer"
                      >
                        <RiAddLine />
                      </button>
                    </div>

                    <button
                      type="button"
                      aria-label={`Hapus ${entry.item.name} dari kalkulator`}
                      onClick={() =>
                        setCalculatorEntries((entries) =>
                          entries.filter((current) => current.id !== entry.id),
                        )
                      }
                      className="justify-self-end rounded-lg border border-[#f2a28c] px-3 py-2 text-[#c9654c] transition-colors bg-[#fff4ef] sm:justify-self-auto cursor-pointer"
                    >
                      <RiCloseLine />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t border-[#d6dfda] pt-5">
              <button
                type="button"
                onClick={() => addItemToCalculator(wasteItems[0])}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3 font-medium text-white transition-colors hover:bg-brand-strong"
              >
                <span aria-hidden="true">+</span>
                Tambah Item
              </button>
            </div>
          </div>

          <aside className="rounded-2xl border border-[#d1ddd6] bg-white p-5 sm:p-6">
            <h3 className="text-xl font-semibold">Hasil Perhitungan</h3>
            <p className="mt-3 text-sm text-[#69776f]">Estimasi nilai</p>
            <p className="text-2xl font-bold text-brand-primary sm:text-3xl">
              Rp {rupiahFormatter.format(Math.round(totalValue))}
            </p>

            <h3 className="mt-8 text-xl font-semibold">Dampak Lingkungan</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#eaf7f1] p-3">
                <div className="flex justify-between">
                  <RiRecycleLine className="text-brand-primary" />
                  <p className="font-semibold">
                    {decimalFormatter.format(totalWeight)}{" "}
                    <span className="font-normal">kg</span>
                  </p>
                </div>
                <p className="mt-1 text-xs text-[#69776f]">Sampah dikelola</p>
              </div>
              <div className="rounded-xl bg-[#eafaff] p-3">
                <div className=" flex justify-between">
                  <RiCloudyLine className="text-[#12a8c7]" />
                  <p className="font-semibold text-[#12a8c7]">
                    {decimalFormatter.format(totalWeight * co2PerKg)}{" "}
                    <span className="font-normal">kg</span>
                  </p>
                </div>
                <p className="mt-1 text-xs text-[#69776f]">Estimasi CO₂e</p>
              </div>
              <div className="rounded-xl bg-[#f7fce5] p-3">
                <div className="flex justify-between">
                  <RiFlashlightLine className="text-[#91b817]" />
                  <p className="font-semibold text-[#91b817]">
                    {decimalFormatter.format(totalWeight * energySavedPerKg)}{" "}
                    <span className="font-normal">kwh</span>
                  </p>
                </div>
                <p className="mt-1 text-xs text-[#69776f]">Energi dihemat</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
