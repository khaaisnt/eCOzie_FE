import Accordion from "@/components/accordion";
import WhyEcozieSteps from "@/components/why-ecozie-steps";
import {
  RiArrowRightLongLine,
  RiGroupLine,
  RiHandCoinLine,
  RiLeafLine,
  RiMapPinUserLine,
  RiWhatsappLine,
} from "@remixicon/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-16">
      {/* Header */}
      <section className="mt-6 mb-20 bg-linear-to-r from-emerald-50/30 via-white to-lime-50/30 px-2 pt-6 sm:mt-8 sm:mb-32 sm:px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full animate-pulse"></div>
            <p className="text-xs sm:text-sm">YOUR EVERYDAY ECO MOVEMENT</p>
          </div>
          <h1 className="mt-3 max-w-3xl font-unbounded text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Sampah Terpilah, Lingkungan Lebih Indah!
          </h1>
          <p className="my-5 max-w-3xl text-sm leading-relaxed sm:my-6 sm:text-base">
            Mulai kebiasaan memilah sampah dari rumah. Setor dengan mudah
            melalui WhatsApp dan dapatkan reward sebagai apresiasi atas
            kontribusimu untuk lingkungan.
          </p>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-white shadow-sm shadow-brand-primary transition-all hover:bg-brand-strong sm:px-8"
          >
            Mulai Sekarang
            <RiArrowRightLongLine />
          </button>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <Image
            src="/photos/header-img.png"
            alt="Berbagai bahan daur ulang yang sudah dipilah"
            width={1620}
            height={1080}
            className="h-48 w-full rounded-xl object-cover object-center sm:h-64 sm:rounded-2xl lg:h-110"
          />
          <div
            role="img"
            aria-label="Langkah 1"
            className="absolute -top-7 right-[7%] flex h-14 w-14 flex-col items-center justify-center rounded-full bg-accent-lime text-white shadow-sm sm:-top-10 sm:h-24 sm:w-24"
          >
            <span className="text-[8px] font-semibold tracking-widest">
              STEP
            </span>
            <span className="text-3xl font-bold leading-none">1</span>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-20 sm:mb-32">
        <div className="mb-8 flex items-center gap-2">
          <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full animate-pulse"></div>
          <p className="text-xs sm:text-sm">OUR IMPACT SO FAR</p>
        </div>
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[minmax(14rem,0.8fr)_minmax(0,1.6fr)] lg:gap-16">
          <Image
            src="/photos/man.png"
            alt="Petugas Ecozie membawa sampah plastik yang telah dikumpulkan"
            width={400}
            height={400}
            className="mx-auto w-full max-w-100 rounded-2xl"
          />
          <div className="flex h-full flex-col justify-between gap-8 sm:gap-10">
            <p className="text-base leading-relaxed sm:text-xl">
              Ecozie hadir untuk menghubungkan masyarakat dengan pengelolaan
              sampah yang lebih bertanggung jawab. Setiap sampah yang disetorkan
              menjadi bagian dari upaya mengurangi limbah dan memperpanjang
              manfaat material yang masih dapat didaur ulang.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              <div>
                <p className="whitespace-nowrap text-xl font-medium text-brand-primary sm:text-4xl lg:text-5xl">
                  122 <span className="text-accent-lime">+</span>
                </p>
                <p className="mt-1 text-[9px] leading-tight sm:text-sm">
                  Member Bergabung
                </p>
              </div>
              <div>
                <p className="whitespace-nowrap text-xl font-medium text-brand-primary sm:text-4xl lg:text-5xl">
                  10 <span className="text-accent-lime">+</span>
                </p>
                <p className="mt-1 text-[9px] leading-tight sm:text-sm">
                  Jenis Sampah
                </p>
              </div>
              <div>
                <p className="whitespace-nowrap text-lg font-medium text-brand-primary sm:text-4xl lg:text-5xl">
                  3,5{" "}
                  <span className="text-sm text-accent-lime sm:text-2xl lg:text-3xl">
                    ton +
                  </span>
                </p>
                <p className="mt-1 text-[9px] leading-tight sm:text-sm">
                  Sampah Terkelola
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecozie */}
      <section className="mb-20 sm:mb-32">
        <div className="mb-8 flex flex-col items-center justify-center text-center sm:mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p>WHY ECOZIE</p>
          </div>
          <h2 className="max-w-xl font-unbounded text-3xl font-bold leading-tight sm:text-4xl">
            Lebih dari Sekadar Mengelola Sampah
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:items-stretch">
          <div>
            <div className="mb-5 rounded-3xl bg-brand-primary p-5 text-white sm:p-6 lg:mb-6 lg:p-8">
              <RiLeafLine className="mb-4 sm:mb-6" />
              <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
                Peduli Lingkungan
              </h5>
              <p>
                Membantu mengurangi sampah yang berakhir di tempat pembuangan
                melalui pemilahan dan pengelolaaan.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-300 p-5 sm:p-6 lg:p-8">
              <RiMapPinUserLine className="mb-4 sm:mb-6" />
              <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
                Mudah Dijangkau
              </h5>
              <p>
                Bergabung dan atur penyetoran sampah dengan praktis melalui
                WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Image
              src="/photos/sorting-bottles.png"
              alt="Sampah botol yang sedang dipilah untuk didaur ulang"
              width={300}
              height={500}
              className="h-64 rounded-3xl object-cover sm:h-80 lg:h-full lg:max-h-100"
            />
          </div>

          <div>
            <div className="mb-5 rounded-3xl border border-gray-300 p-5 sm:p-6 lg:mb-6 lg:p-8">
              <RiHandCoinLine className="mb-4 sm:mb-6" />
              <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
                Sampah Punya Nilai
              </h5>
              <p>
                Sampah yang memenuhi ketentuan dapat ditimbang dan dihargai
                sesuai jenis serta kondisi.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-primary p-5 text-white sm:p-6 lg:p-8">
              <RiGroupLine className="mb-4 sm:mb-6" />
              <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
                Gerakan Bersama
              </h5>
              <p>
                Menjadi bagian dari komunitas yang saling mendukung untuk
                menciptakan lingkungan lebih bersih.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecozie Step 123 */}
      <WhyEcozieSteps />

      {/* CTA */}
      <section className="mt-10 sm:mt-12">
        <div className="relative rounded-2xl bg-cyan-100/60 px-5 pt-7 sm:rounded-3xl sm:px-10 sm:pt-10 lg:min-h-80 lg:px-12 lg:py-12">
          <div className="relative z-20 pb-6 lg:max-w-[60%] lg:pb-0">
            <div className="flex items-center gap-2">
              <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full animate-pulse"></div>
              <p>BE PART OF THE CHANGE</p>
            </div>
            <h2 className="mb-8 font-unbounded text-2xl font-bold leading-tight sm:mb-10 sm:text-4xl lg:mb-16 lg:text-5xl">
              Yuk, Mulai Perubahan dari Sekarang!
            </h2>
            <button
              type="button"
              className="mb-6 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-brand-strong px-6 py-2 text-white outline outline-gray-300 transition-all hover:bg-action-hover sm:px-8 lg:mb-12"
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
            className="relative z-10 -mb-7 ml-auto block h-56 w-auto sm:h-80 lg:absolute lg:bottom-0 lg:right-0 lg:mb-0 lg:h-96 xl:h-112"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="my-20 sm:my-32">
        <div className="mb-8 text-center sm:mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p>FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <h2 className="font-unbounded text-3xl font-bold leading-tight sm:text-4xl">
            Penasaran dengan Ecozie?
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
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
