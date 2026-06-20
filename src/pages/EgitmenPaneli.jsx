import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Dumbbell,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardList,
} from "lucide-react";

function EgitmenPaneli() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Hero Bölümü */}
      <section className="relative w-full overflow-hidden py-32">
        <div className="absolute inset-0 -z-20 bg-[#050816]" />
        <div className="absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[130px]" />
        <div className="absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

        <div className="max-w-7xl mx-auto px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
          >
            <ArrowLeft size={18} />
            Ana sayfaya dön
          </a>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-300 font-semibold mb-4 tracking-[0.25em] uppercase">
                Eğitmen Paneli
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Öğrencilerinizi daha düzenli yönetin.
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                FormUp+ eğitmen paneli; öğrenci takibi, antrenman planları,
                beslenme programları ve gelişim süreçlerini tek panelde toplar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PanelBadge icon={<Users size={18} />} text="Öğrenci Takibi" />
                <PanelBadge icon={<Dumbbell size={18} />} text="Antrenman Planı" />
                <PanelBadge icon={<ChartNoAxesCombined size={18} />} text="Gelişim Takibi" />
              </div>

              <a
                href="/#demo"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black hover:bg-cyan-300 transition"
              >
                Demo Talep Et
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Geçici görsel alanı - mockup sonra eklenecek */}
            <div className="relative flex justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />

              <div className="relative z-10 h-[520px] w-[360px] rounded-[40px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl overflow-hidden">
                <div className="h-14 rounded-2xl bg-white/10 mb-6" />
                <div className="h-36 rounded-3xl bg-cyan-400/15 mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-28 rounded-3xl bg-purple-500/15" />
                  <div className="h-28 rounded-3xl bg-white/10" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-24 rounded-3xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitmen Paneli Sahne Akışı */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 space-y-28">
          <PanelScene
            direction="left"
            eyebrow="Öğrenci Takibi"
            title="Her öğrencinin gelişimini tek ekranda görüntüleyin."
            description="Eğitmenler; öğrencilerin ölçüm geçmişini, paket durumunu ve gelişim sürecini düzenli şekilde takip edebilir."
            icon={<Users size={24} />}
          />

          <PanelScene
            direction="right"
            eyebrow="Antrenman Planları"
            title="Öğrencilere özel programlar oluşturun."
            description="Antrenman içerikleri, hareket planları ve haftalık programlar öğrenciye özel şekilde düzenlenebilir."
            icon={<Dumbbell size={24} />}
          />

          <PanelScene
            direction="left"
            eyebrow="Beslenme Programları"
            title="Beslenme sürecini daha takip edilebilir hale getirin."
            description="Öğrencilerin hedeflerine göre beslenme planları oluşturulabilir ve süreç tek panelden izlenebilir."
            icon={<ClipboardList size={24} />}
          />

          <PanelScene
            direction="right"
            eyebrow="Gelişim Analizi"
            title="Ölçüm verileriyle daha doğru yönlendirme yapın."
            description="Kilo, yağ oranı, vücut ölçüleri ve performans verileri eğitmen için anlamlı raporlara dönüşür."
            icon={<BrainCircuit size={24} />}
          />
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="relative w-full py-28">
        <div className="max-w-5xl mx-auto px-8 text-center rounded-[36px] border border-white/10 bg-white/[0.04] py-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Eğitmen deneyimini yakından inceleyin.
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            FormUp+ eğitmen paneli ile öğrencilerinizin gelişim sürecini daha verimli yönetin.
          </p>

          <a
            href="/#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black hover:bg-cyan-300 transition"
          >
            Demo Talep Et
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

function PanelBadge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-gray-300">
      <span className="text-cyan-300">{icon}</span>
      {text}
    </div>
  );
}

function PanelScene({ direction, eyebrow, title, description, icon }) {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -90 : 90 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-14 items-center ${
        isLeft ? "" : "lg:[&>*:first-child]:order-2"
      }`}
    >
      {/* Metin Alanı */}
      <div>
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          {icon}
        </div>

        <p className="text-cyan-300 font-semibold mb-4 tracking-[0.25em] uppercase">
          {eyebrow}
        </p>

        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-gray-400 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Görsel Placeholder Alanı */}
      <motion.div
        whileHover={{
          rotateX: -3,
          rotateY: isLeft ? 4 : -4,
          scale: 1.02,
        }}
        transition={{ duration: 0.4 }}
        className="relative h-[430px] rounded-[36px] border border-white/10 bg-white/[0.04] overflow-hidden backdrop-blur-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]"
        />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]"
        />

        <div className="absolute left-8 top-8 right-8 h-16 rounded-2xl bg-white/10" />
        <div className="absolute left-8 top-32 w-44 h-44 rounded-3xl bg-cyan-400/15" />
        <div className="absolute right-8 top-32 w-56 h-28 rounded-3xl bg-purple-500/15" />
        <div className="absolute right-8 bottom-8 left-8 h-28 rounded-3xl bg-white/10" />

        <div className="absolute bottom-8 right-8 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300">
          Mockup alanı
        </div>
      </motion.div>
    </motion.div>
  );
}

export default EgitmenPaneli;