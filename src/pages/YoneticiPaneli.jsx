import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, CalendarDays, ChartNoAxesCombined, Dumbbell, CreditCard } from "lucide-react";
function YoneticiPaneli() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <h1>Yönetici Paneli</h1>
      <section className="relative w-full py-28">
  <div className="max-w-7xl mx-auto px-8">
    <div className="text-center mb-16">
      <p className="text-cyan-300 font-semibold mb-4">
        Yönetici Panelinde Neler Var?
      </p>

      <h2 className="text-4xl md:text-5xl font-black">
        Salon yönetimi için gereken temel araçlar.
      </h2>
    </div>
    

    <div className="grid lg:grid-cols-3 gap-6">
      <AdminFeature
        title="Öğrenci Yönetimi"
        text="Öğrencileri, paket durumlarını ve gelişim süreçlerini tek panelden takip edin."
      />

      <AdminFeature
        title="Eğitmen Takibi"
        text="Eğitmenlerin ders planlarını, öğrenci ilişkilerini ve günlük akışını yönetin."
      />

      <AdminFeature
        title="Ders Takvimi"
        text="Randevuları, grup derslerini ve antrenman saatlerini düzenli şekilde planlayın."
      />

      <AdminFeature
        title="Ölçüm Kayıtları"
        text="Kilo, yağ oranı, vücut ölçüleri ve gelişim geçmişini düzenli şekilde görüntüleyin."
      />

      <AdminFeature
        title="Paket Kontrolü"
        text="Aktif, süresi yaklaşan veya tamamlanan üyelik paketlerini kolayca takip edin."
      />

      <AdminFeature
        title="Genel Raporlama"
        text="Sal
        on performansını, aktif öğrenci sayısını ve operasyon durumunu analiz edin."
      />
    </div>
  </div>
</section>
{/* Görsel Sahne */}
<section className="relative w-full py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-8">
    <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] p-8 overflow-hidden">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-300 font-semibold mb-4">
            Tek Merkezden Yönetim
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Salonunuzun tüm operasyonunu tek ekranda görün.
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed text-lg">
            Öğrenciler, eğitmenler, dersler, paketler ve ölçüm süreçleri ayrı ayrı
            takip edilmek yerine FormUp+ içinde düzenli bir akışa dönüşür.
          </p>
        </div>

        {/* Buraya sonra mockup gelecek */}
        <div className="relative h-[420px] rounded-[32px] border border-white/10 bg-[#0b1024] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.25),transparent_35%)]" />

          <div className="absolute left-8 top-8 right-8 h-16 rounded-2xl bg-white/10" />
          <div className="absolute left-8 top-32 w-40 h-40 rounded-3xl bg-cyan-400/20" />
          <div className="absolute right-8 top-32 w-52 h-24 rounded-3xl bg-purple-500/20" />
          <div className="absolute right-8 bottom-8 left-8 h-28 rounded-3xl bg-white/10" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative w-full py-28">
  <div className="max-w-5xl mx-auto px-8 text-center rounded-[36px] border border-white/10 bg-white/[0.04] py-16">
    <h2 className="text-4xl md:text-5xl font-black">
      Yönetici panelini yakından inceleyin.
    </h2>

    <p className="mt-5 text-gray-400 text-lg">
      FormUp+’ın salon yönetiminize nasıl uyarlanabileceğini birlikte değerlendirelim.
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
{/* Yönetici Paneli Sahne Akışı */}
<section className="relative w-full py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-8 space-y-28">

    <PanelScene
      direction="left"
      eyebrow="Dashboard"
      title="Salonun genel durumunu ilk ekranda görün."
      description="Aktif öğrenci sayısı, günlük dersler, eğitmen yoğunluğu ve genel operasyon durumu tek bakışta takip edilir."
      icon={<ChartNoAxesCombined size={24} />}
    />

    <PanelScene
      direction="right"
      eyebrow="Öğrenci Yönetimi"
      title="Öğrenci kayıtlarını dağınıklıktan kurtarın."
      description="Öğrenci bilgileri, paket durumu, ölçüm geçmişi ve gelişim süreci düzenli bir yapıda saklanır."
      icon={<Users size={24} />}
    />

    <PanelScene
      direction="left"
      eyebrow="Paket ve Ölçüm Takibi"
      title="Üyelik ve gelişim süreçlerini kontrol altında tutun."
      description="Paket bitişleri, ölçüm kayıtları ve öğrenci ilerlemeleri yönetici panelinden kolayca izlenir."
      icon={<CreditCard size={24} />}
    />

    <PanelScene
      direction="right"
      eyebrow="Ders Takvimi"
      title="Ders akışını daha planlı yönetin."
      description="Bireysel dersler, grup antrenmanları ve eğitmen programları merkezi takvim yapısıyla düzenlenir."
      icon={<CalendarDays size={24} />}
    />

  </div>
</section>
    </main>
  );
}
function AdminFeature({ title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 hover:border-cyan-400/40 transition">
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {text}
      </p>
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

      {/* Görsel Placeholder Alanı - buraya sonra gerçek mockup gelecek */}
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
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]"
        />

        {/* Geçici UI çizimleri */}
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

export default YoneticiPaneli;