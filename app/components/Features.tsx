const features = [
  { icon: "🖼️", title: "Foto", desc: "Edit & optimasi gambar." },
  { icon: "🎬", title: "Video", desc: "Editing & rendering cepat." },
  { icon: "🎨", title: "Logo", desc: "Buat & ekspor vektor." },
  { icon: "✂️", title: "Remove BG", desc: "Hapus latar otomatis." },
];

export default function Features() {
  return (
    <section
      className="w-full max-w-5xl grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Fitur Unggulan"
    >
      {features.map((f) => (
        <article
          key={f.title}
          className="bg-[#0d2a30] p-6 rounded-xl border-2 border-teal-400 text-center"
        >
          <div className="text-4xl mb-2 text-teal-400">{f.icon}</div>
          <h3 className="text-lg font-semibold text-teal-400">{f.title}</h3>
          <p className="text-sm">{f.desc}</p>
        </article>
      ))}
    </section>
  );
}
