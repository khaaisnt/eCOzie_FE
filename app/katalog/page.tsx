import React from "react";

const CatalogPage = () => {
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
    </main>
  );
};

export default CatalogPage;
