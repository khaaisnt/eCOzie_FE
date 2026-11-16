import Accordion from "@/components/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 md:px-16">
      
      {/* FAQ */}
      <section className="my-32">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-accent-lime h-2 w-2 p-0.5 rounded-full"></div>
            <p className="">FREQUENTLY ASKED QUESTIONS</p>
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
