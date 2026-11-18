import Input from "@/components/input";
import {
  RiCheckDoubleLine,
  RiInformationLine,
  RiWhatsappLine,
} from "@remixicon/react";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="flex justify-center px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="max-w-xl">
            <h1 className="mb-3 font-unbounded text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ada yang Bisa Kami Bantu?
            </h1>
            <p className="text-sm leading-relaxed sm:text-base">
              Punya pertanyaan atau ingin menyetorkan sampah? Kami siap membantu
              kebutuhan pengelolaan sampahmu.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-12 lg:px-12 lg:py-24 xl:px-18">
        <div className="min-w-0">
          <div>
            <h2 className="font-unbounded text-2xl font-semibold leading-tight sm:text-3xl">
              Ajukan Penjemputan Sampah
            </h2>
            <p className="mb-6 mt-3 text-sm leading-relaxed sm:mb-8 sm:text-base">
              Isi detail penjemputanmu dan biarkan kami membantu proses
              selanjutnya.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <Input
                  label="Nama Lengkap"
                  placeholder="Masukkan nama lengkap"
                />
                <Input
                  label="Alamat Penjemputan"
                  placeholder="Masukkan alamat"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Input label="Nomor WhatsApp" placeholder="08xxxxxxxxxx" />
                <Input
                  label="Tanggal Penjemputan"
                  placeholder="Pilih tanggal penjemputan"
                />
              </div>
            </div>
            <div className="mt-4">
              <Input
                as="textarea"
                label="Keterangan Tambahan"
                placeholder="Contoh: Botol PET 2 kg, kardus 3 kg, dan kaleng 1 kg"
                rows={4}
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-5 w-full cursor-pointer rounded-xl bg-brand-primary px-5 py-3 text-center text-white shadow-sm shadow-brand-primary transition-all hover:bg-brand-strong sm:px-8"
          >
            Ajukan Penjemputan via WhatsApp
          </button>
        </div>

        <aside className="w-full min-w-0 lg:justify-self-end">
          <div className="mb-6 rounded-2xl border border-gray-300 bg-white p-4 sm:mb-7 sm:p-5">
            <div className="flex gap-2">
              <RiInformationLine className="mt-0.5 shrink-0" />
              <p className="font-semibold">Ketentuan Penjemputan</p>
            </div>
            <hr className="my-3 text-gray-300" />
            <p className="mb-2 text-sm">Sebelum penjemputan perhatikan:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <RiCheckDoubleLine className="mt-0.5 shrink-0 text-brand-primary" />
                Sampah sudah dipilah berdasarkan jenisnya.
              </li>
              <li className="flex gap-2">
                <RiCheckDoubleLine className="mt-0.5 shrink-0 text-brand-primary" />
                Sampah bersih dan kering.
              </li>
              <li className="flex gap-2">
                <RiCheckDoubleLine className="mt-0.5 shrink-0 text-brand-primary" />
                Sampah sudah dikemas dengan baik.
              </li>
              <li className="flex gap-2">
                <RiCheckDoubleLine className="mt-0.5 shrink-0 text-brand-primary" />
                Nomor WhatsApp harus benar dan aktif.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-brand-primary p-6 sm:p-8">
            <RiWhatsappLine size={32} className="text-white" />
            <div className="my-6 text-white">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Butuh Bantuan?
              </h2>
              <p className="mt-1 text-sm leading-relaxed sm:text-base">
                Ada pertanyaan seputar layanan Ecozie? Hubungi kami melalui
                WhatsApp.
              </p>
            </div>
            <button className="bg-white rounded-xl py-3 w-full text-brand-primary cursor-pointer">
              Hubungi Kami
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ContactPage;
