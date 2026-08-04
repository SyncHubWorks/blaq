function Products() {
  const products = [
    {
      name: "Hair Care",
      description: "Premium shampoos, conditioners and treatments.",
    },
    {
      name: "Skincare",
      description: "Healthy skin starts with quality products.",
    },
    {
      name: "Professional Makeup",
      description: "Trusted brands used by professionals.",
    },
    {
      name: "Salon Equipment",
      description: "Everything your beauty business needs.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
              05
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              SHOP
              <br />
              PREMIUM
              <br />
              PRODUCTS
            </h2>

            <p className="mt-8 text-neutral-400 leading-8">
              Discover carefully selected beauty products, professional
              equipment and lifestyle essentials from trusted brands.
            </p>

            <button className="mt-12 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-8 py-4 uppercase tracking-[0.2em] font-semibold rounded-sm">
              Visit Marketplace
            </button>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 hover:border-[#c19b6c] hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold">{product.name}</h3>

                <p className="mt-4 text-neutral-400">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
