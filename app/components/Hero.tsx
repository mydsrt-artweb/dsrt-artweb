export default function Hero() {
  return (
    <section
      className="max-w-4xl text-center p-8 lg:p-16 rounded-xl"
      aria-labelledby="hero-title"
    >
      <h2 id="hero-title" className="text-teal-400 text-2xl md:text-3xl mb-4">
        Solusi Editing & Transformasi Digital
      </h2>
      <p className="mb-6">
        Mencakup editing foto, video, desain logo, dan penghapusan background
        otomatis dengan AI.
      </p>
      <a
        href="/dashboard"
        className="inline-block bg-teal-400 text-[#001f27] px-6 py-3 rounded-xl font-bold hover:bg-teal-300 transition"
      >
        Masuk ke Dashboard
      </a>
    </section>
  );
}
