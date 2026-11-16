import Accordion from "@/components/accordion";
import { RiWhatsappLine } from "@remixicon/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 md:px-16">
      <section className="mt-72"></section>

      {/* CTA */}
      <section className="mt-12">
        <div className="relative rounded-3xl bg-cyan-100/60 px-6 pt-8 sm:px-10 sm:pt-10 lg:min-h-80 lg:px-12 lg:py-12">
          <div className="relative z-20 pb-6 lg:max-w-[60%] lg:pb-0">
            <div className="flex items-center gap-2">
              <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
              <p>BE PART OF THE CHANGE</p>
            </div>
            <h2 className="font-unbounded text-3xl font-bold sm:text-4xl lg:text-5xl mb-16">
              Yuk, Mulai Perubahan dari Sekarang!
            </h2>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-xl px-8 py-2 bg-brand-strong outline outline-gray-300 transition-all text-white lg:flex cursor-pointer"
            >
              <RiWhatsappLine />
              Hubungi Kami
            </button>
          </div>
          <Image
            src="/photos/woman.png"
            alt="Wanita membawa sampah daur ulang"
            width={500}
            height={500}
            className="relative z-10 -mb-8 ml-auto block h-64 w-auto sm:h-80 lg:absolute lg:bottom-0 lg:right-0 lg:mb-0 lg:h-96 xl:h-112"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="my-32">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p>FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h2 className="font-unbounded text-4xl font-bold">
            Penasaran dengan Ecozie?
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <Accordion title="Apa itu Ecozie?" defaultOpen>
            Ecozie adalah layanan bank sampah digital yang membantu masyarakat
            memilah, menyetorkan, dan mengelola sampah agar memiliki nilai serta
            memberikan dampak positif bagi lingkungan.
          </Accordion>
          <Accordion title="Bagaimana cara bergabung menjadi member Ecozie?">
            Cara bergabung menjadi member Ecozie sangat mudah. Anda dapat
            mendaftar melalui aplikasi Ecozie yang tersedia di Play Store dan
            App Store. Setelah mendaftar, Anda akan mendapatkan akun member yang
            dapat digunakan untuk menyetorkan sampah dan mengakses berbagai
            fitur Ecozie.
          </Accordion>
          <Accordion title="Jenis sampah apa saja yang bisa disetorkan?">
            Jenis sampah yang bisa disetorkan melalui Ecozie meliputi sampah
            organik, sampah anorganik, dan sampah elektronik. Pastikan untuk
            memisahkan sampah sesuai kategori sebelum menyetorkannya agar proses
            pengelolaan lebih efisien.
          </Accordion>
          <Accordion title="Bagaimana cara mengetahui harga sampah?">
            Harga sampah dapat diketahui melalui aplikasi Ecozie. Setiap jenis
            sampah memiliki harga yang berbeda, dan harga tersebut dapat berubah
            sesuai dengan kondisi pasar. Pastikan untuk selalu memeriksa harga
            terbaru sebelum menyetorkan sampah.
          </Accordion>
          <Accordion title="Apakah Ecozie menyediakan layanan penjemputan?">
            Ya, Ecozie menyediakan layanan penjemputan sampah bagi member yang
            berada di area layanan kami. Anda dapat menjadwalkan penjemputan
            melalui aplikasi Ecozie, dan tim kami akan datang ke lokasi Anda
            untuk mengambil sampah yang telah dipilah.
          </Accordion>
        </div>
      </section>
    </main>
  );
}
