import { RiArrowRightLongLine, RiLeafLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <section className="my-12 sm:my-24">
        <div className="mb-12 sm:mb-16">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent-lime p-0.5 animate-pulse"></div>
            <p className="text-sm sm:text-base">TENTANG KAMI</p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.25fr_0.9fr] md:items-start md:gap-16">
            <h1 className="max-w-2xl font-unbounded text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Mengubah sampah menjadi nilai baru
            </h1>
            <p className="max-w-lg text-base leading-relaxed sm:text-lg md:pt-1">
              Ecozie hadir menghubungkan kepedulian masyarakat dengan solusi
              daur ulang modern. Kami memudahkan setiap rumah tangga memilah
              sampah dan menciptakan nilai ekonomi yang berkelanjutan.
            </p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:mb-16 md:grid-cols-[1fr_2fr]">
          <Image
            src="/photos/woman-2.png"
            alt="Petugas memilah botol plastik untuk didaur ulang"
            width={300}
            height={300}
            className="h-60 w-full rounded-xl object-cover sm:h-72 md:h-70"
          />
          <Image
            src="/photos/sorting-bottles.png"
            alt="Masyarakat memilah sampah ke dalam wadah daur ulang"
            width={1000}
            height={300}
            className="h-60 w-full rounded-xl object-cover sm:h-72 md:h-70"
          />
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-12 lg:gap-24">
          <div className="flex items-start gap-2 sm:shrink-0">
            <div className="h-2 w-2 rounded-full bg-accent-lime p-0.5 animate-pulse"></div>
            <p className="w-36 text-sm sm:text-base">LATAR BELAKANG</p>
          </div>
          <p className="text-lg font-medium leading-relaxed sm:text-xl lg:text-2xl">
            Mulai kebiasaan memilah sampah dari rumah. Setor dengan mudah
            melalui WhatsApp dan dapatkan reward sebagai apresiasi atas
            kontribusimu untuk lingkungan. Mulai kebiasaan memilah sampah dari
            rumah. Setor dengan mudah melalui WhatsApp dan dapatkan reward
            sebagai apresiasi atas kontribusimu untuk lingkungan.
          </p>
        </div>
      </section>

      <section className="my-14">
        <div className="mb-8 text-center sm:mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p>OUR VALUES</p>
          </div>
          <h2 className="font-unbounded text-3xl font-bold sm:text-4xl">
            Prinsip yang Kami Pegang
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="p-5 sm:p-6 lg:p-8">
            <RiLeafLine className="mb-6" />
            <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
              Transparansi
            </h5>
            <p>
              Kejujuran adalah kunci kepercayaan. Kami memastikan setiap proses
              penimbangan, pencatatan, hingga konversi nilai sampah dilakukan
              secara terbuka dan dapat dipantau langsung oleh nasabah.
            </p>
          </div>
          <div className="p-5 sm:p-6 lg:p-8">
            <RiLeafLine className="mb-6" />
            <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
              Keberlanjutan
            </h5>
            <p>
              Setiap sampah yang terpilah adalah langkah kecil menyelamatkan
              bumi. Kami berkomitmen menciptakan siklus pengelolaan limbah yang
              berdampak positif jangka panjang bagi kelestarian lingkungan.
            </p>
          </div>
          <div className="p-5 sm:p-6 lg:p-8">
            <RiLeafLine className="mb-6" />
            <h5 className="mb-2 text-xl font-semibold sm:text-2xl">
              Kolaborasi
            </h5>
            <p>
              Perubahan besar tidak bisa dilakukan sendirian. Kami merangkul
              masyarakat, komunitas, dan mitra daur ulang untuk bergerak bersama
              menciptakan ekosistem lingkungan yang lebih bersih.
            </p>
          </div>
          <div className="p-5 sm:p-6 lg:p-8">
            <RiLeafLine className="mb-6" />
            <h5 className="mb-2 text-xl font-semibold sm:text-2xl">Inovasi</h5>
            <p>
              Menghadirkan kemudahan di ujung jari. Kami terus memanfaatkan
              teknologi digital agar aktivitas menabung dan mengelola sampah
              terasa jauh lebih praktis, dan relevan dengan gaya hidup masa
              kini.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-22 sm:py-28">
        <div className="relative flex items-center overflow-hidden rounded-3xl bg-[#0b3e2d] sm:min-h-88">
          <Image
            src="/photos/bottles-rainbow.png"
            alt=""
            width={678}
            height={404}
            aria-hidden="true"
            className="absolute inset-0 sm:left-1/4 h-full w-full object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b3e2d] via-[#0b3e2d]/95 to-[#0b3e2d]/20" />
          <div className="relative z-10 w-full max-w-3xl px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-16">
            <h2 className="font-unbounded text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Mari Bergerak Bersama!
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed font-light text-white/80 sm:text-base">
              Saatnya ubah tumpukan sampah terpilah di rumah menjadi saldo
              tabungan yang bermanfaat sekaligus menjaga bumi tetap bersih. Yuk,
              terhubung dengan kami dan mulai perjalanan ramah lingkunganmu hari
              ini!
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-4 rounded-full bg-accent-lime py-1 pl-5 pr-1 font-semibold text-[#123c2d] transition-transform hover:scale-[1.02] cursor-pointer"
            >
              Mulai Sekarang!
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaff9b]">
                <RiArrowRightLongLine aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
