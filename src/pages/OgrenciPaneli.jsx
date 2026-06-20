import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Dumbbell,
  ClipboardList,
  ChartNoAxesCombined,
  BrainCircuit,
  Target,
} from "lucide-react";

function OgrenciPaneli() {
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
                Öğrenci Paneli
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Gelişiminizi her gün takip edin.
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                FormUp+ öğrenci paneli; antrenman programlarını, beslenme planlarını,
                ölçüm geçmişini ve gelişim sürecini tek ekranda görüntülemenizi sağlar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PanelBadge icon={<Dumbbell size={18} />} text="Antrenman Programı" />
                <PanelBadge icon={<ClipboardList size={18} />} text="Beslenme Takibi" />
                <PanelBadge icon={<ChartNoAxesCombined size={18} />} text="Gelişim Analizi" />
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
                <div className="h-36 rounded-3xl bg-purple-500/15 mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-28 rounded-3xl bg-cyan-400/15" />
                  <div className="h-28 rounded-3xl bg-white/10" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-24 rounded-3xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öğrenci Paneli Sahne Akışı */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 space-y-28">
          <PanelScene
            direction="left"
            eyebrow="Günlük Program"
            title="Bugünkü antrenman ve görevlerinizi görüntüleyin."
            description="Öğrenci paneli, günlük antrenman programınızı ve yapılacak görevleri tek ekranda takip etmenizi sağlar."
            icon={<CalendarDays size={24} />}
          />

          <PanelScene
            direction="right"
            eyebrow="Antrenman Takibi"
            title="Programlarınızı daha düzenli takip edin."
            description="Antrenman hareketleri, setler, tekrarlar ve haftalık programlar öğrenciye anlaşılır şekilde sunulur."
            icon={<Dumbbell size={24} />}
          />

          <PanelScene
            direction="left"
            eyebrow="Beslenme Planı"
            title="Beslenme sürecinizi kontrol altında tutun."
            description="Günlük beslenme planları, kalori hedefleri ve öğün düzeni panel üzerinden kolayca takip edilir."
            icon={<ClipboardList size={24} />}
          />

          <PanelScene
            direction="right"
            eyebrow="Gelişim ve AI Analiz"
            title="İlerlemenizi verilerle görün."
            description="Ölçüm geçmişi, hedefler ve yapay zeka destekli öneriler sayesinde gelişim süreci daha anlaşılır hale gelir."
            icon={<BrainCircuit size={24} />}
          />
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="relative w-full py-28">
        <div className="max-w-5xl mx-auto px-8 text-center rounded-[36px] border border-white/10 bg-white/[0.04] py-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Öğrenci deneyimini yakından inceleyin.
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            FormUp+ öğrenci paneli ile antrenman, beslenme ve gelişim sürecinizi tek yerden takip edin.
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

export default OgrenciPaneli;