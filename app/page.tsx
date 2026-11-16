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
            Ecozie adalah layanan bank sampah digital.
          </Accordion>
          <Accordion title="Bagaimana cara bergabung menjadi member Ecozie?">
            Ecozie adalah layanan bank sampah digital.
          </Accordion>
          <Accordion title="Jenis sampah apa saja yang bisa disetorkan?">
            Ecozie adalah layanan bank sampah digital.
          </Accordion>
          <Accordion title="Bagaimana cara mengetahui harga sampah?">
            Ecozie adalah layanan bank sampah digital.
          </Accordion>
          <Accordion title="Apakah Ecozie menyediakan layanan penjemputan?">
            Ecozie adalah layanan bank sampah digital.
          </Accordion>
        </div>
      </section>
    </main>
  );
}
