import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, CalendarDays, ChartNoAxesCombined, BrainCircuit, Building2, UserRoundCheck, Dumbbell } from "lucide-react";

function Home() {

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* Arka plan parlama efekti */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[120px]" />

      {/* Navbar */}
      <header className="fixed top-4 left-0 z-50 w-full">
  <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050816]/55 px-6 backdrop-blur-2xl">
    <img
      src="/img/logo.png"
      alt="FormUp+ Logo"
      className="h-40 w-auto object-contain"
    />

    <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
     <a href="/#ozellikler" className="hover:text-white transition">Özellikler</a>
<a href="/#neden-formup" className="hover:text-white transition">Neden FormUp+</a>
<a href="/#kimler-icin" className="hover:text-white transition">Paneller</a>
<a href="/#demo" className="hover:text-white transition">Demo</a>
    </div>

    <a
      href="#demo"
      className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
    >
      Demo Talep Et
    </a>
  </nav>
</header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Sol yazı alanı */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6"
          >
            Spor salonları için yeni nesil dijital platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            FİT ZİHİNLE, <br />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              FORM SENİNLE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed"
          >
            FormUp+; spor salonları, eğitmenler ve öğrenciler için öğrenci takibi,
            ölçüm yönetimi, ders planlama ve yapay zeka destekli gelişim analizlerini
            tek platformda birleştirir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button className="group rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black hover:bg-cyan-300 transition flex items-center justify-center gap-2">
              Sistemi Keşfet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white hover:text-black transition">
              Demo Talep Et
            </button>
          </motion.div>
        </div>

        {/* Sağ taraf: 2 gerçek mockup */}
<div className="relative h-[650px] -mt-10 flex items-center justify-center [perspective:1200px]">
  <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[100px]" />
  <div className="absolute right-8 h-[360px] w-[360px] rounded-full bg-purple-500/25 blur-[100px]" />

  <motion.img
    src="/img/dashboard_mockup.png"
    alt="FormUp yönetici paneli"
    initial={{ opacity: 0, x: 120, rotateY: 45, rotateZ: 8, scale: 0.75 }}
    animate={{
      opacity: 1,
      x: 0,
      rotateY: -8,
      rotateZ: -4,
      scale: 1,
      y: [0, -14, 0],
    }}
    transition={{
      opacity: { duration: 0.7 },
      x: { duration: 0.9 },
      rotateY: { duration: 0.9 },
      rotateZ: { duration: 0.9 },
      scale: { duration: 0.9 },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
    className="absolute z-20 w-[360px] drop-shadow-[0_30px_80px_rgba(34,211,238,0.25)]"
  />

  <motion.img
    src="/img/students_mockup.png"
    alt="FormUp öğrenci yönetimi"
    initial={{ opacity: 0, x: 180, rotateY: 55, rotateZ: 10, scale: 0.7 }}
    animate={{
      opacity: 1,
      x: 170,
      rotateY: -16,
      rotateZ: 5,
      scale: 0.92,
      y: [0, 16, 0],
    }}
    transition={{
      opacity: { duration: 0.7, delay: 0.25 },
      x: { duration: 1, delay: 0.25 },
      rotateY: { duration: 1, delay: 0.25 },
      rotateZ: { duration: 1, delay: 0.25 },
      scale: { duration: 1, delay: 0.25 },
      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
    }}
    className="absolute z-10 w-[310px] opacity-90 drop-shadow-[0_30px_80px_rgba(168,85,247,0.25)]"
  />
</div>


      </section>

      {/* Özellikler Bölümü */}
<section id="ozellikler" className="relative z-10 w-full overflow-hidden py-32">
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
  <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
  <div className="absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />

  <div className="relative max-w-7xl mx-auto px-8">
    {/* Buraya mevcut özellikler içeriği gelecek */}
  </div>

  
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mb-12 text-center"
  >
    <p className="text-cyan-300 font-semibold mb-3">
      FormUp+ Neler Sunuyor?
    </p>

    <h2 className="text-4xl md:text-5xl font-black">
      Salon yönetimini tek ekrandan kontrol et.
    </h2>

    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      Öğrencilerini takip et, derslerini planla, antrenman ve beslenme süreçlerini daha düzenli yönet.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
    <FeatureCard
      number="01"
      title="Öğrenci Takibi"
      description="Öğrencilerin paket, ölçüm ve gelişim süreçlerini tek yerden takip et."
    />

    <FeatureCard
      number="02"
      title="Antrenman & Beslenme"
      description="Kişiye özel antrenman ve beslenme planlarını daha düzenli yönet."
    />

    <FeatureCard
      number="03"
      title="Ders & Takvim"
      description="Dersleri, randevuları ve eğitmen planlarını kolayca organize et."
    />

    <FeatureCard
      number="04"
      title="AI Destekli Analiz"
      description="Gelişim verilerini analiz ederek daha akıllı kararlar al."
    />
  </div>
</section>
<section id="neden-formup" className="relative z-10 w-full overflow-hidden py-32">
  {/* Fullscreen grid */}
  <div className="absolute inset-0 -z-20 bg-[#050816]" />
  <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

  {/* Büyük glow alanları */}
  <div className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[120px]" />
  <div className="absolute -right-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[120px]" />

  {/* İnce üst çizgi */}
  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

  {/* Dekoratif daire çizgileri */}
  <div className="absolute -left-24 top-28 h-[360px] w-[360px] rounded-full border border-purple-400/20" />
  <div className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full border border-cyan-400/20" />

  {/* İçerik */}
  <div className="relative max-w-7xl mx-auto px-8">
    <div className="text-center mb-20">
      <p className="text-cyan-300 font-semibold mb-4 tracking-[0.25em] uppercase">
        Neden FormUp+?
      </p>

      <h2 className="text-4xl md:text-6xl font-black">
        Salon yönetimi artık daha düzenli.
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
        FormUp+, spor salonlarının dağınık takip süreçlerini tek panelde toplar.
        Öğrenci, ders, ölçüm ve analiz yönetimini daha pratik hale getirir.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <WhyCard
        icon={<Users size={28} />}
        title="Öğrenci Takibi"
        problem="Dağınık kayıtlar, unutulan paketler ve farklı yerlerde tutulan öğrenci bilgileri zaman kaybettirir."
        solution="FormUp+ ile öğrenci bilgileri, paketler, ölçümler ve gelişim süreci tek panelde takip edilir."
      />

      <WhyCard
        icon={<CalendarDays size={28} />}
        title="Ders ve Takvim Yönetimi"
        problem="Karışan ders saatleri, kaçırılan randevular ve plansız eğitmen takibi salon düzenini zorlaştırır."
        solution="Tüm dersler, randevular ve eğitmen planları merkezi takvim üzerinden yönetilir."
      />

      <WhyCard
        icon={<ChartNoAxesCombined size={28} />}
        title="Gelişim Analizi"
        problem="Ölçüm geçmişi tutulmadığında öğrencinin ilerlemesi görünmez hale gelir."
        solution="FormUp+, ölçüm verilerini ve gelişim geçmişini düzenli şekilde gösterir."
      />

      <WhyCard
        icon={<BrainCircuit size={28} />}
        title="AI Destekli Kararlar"
        problem="Tahmine dayalı kararlar hem eğitmen hem öğrenci için süreci verimsizleştirir."
        solution="Yapay zeka destekli analizlerle daha bilinçli yönlendirmeler yapılabilir."
      />
    </div>
  </div>
</section>
<section id="kimler-icin" className="relative z-10 max-w-7xl mx-auto px-8 py-32">
  <div className="text-center mb-16">
    <p className="text-cyan-300 font-semibold mb-4">
      Kimler İçin? 
    </p>

    <h2 className="text-4xl md:text-6xl font-black">
  Üç farklı kullanıcı deneyimi,
  <br />
  tek Plat
  <span className="relative bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
    FORM
  </span>
  .
</h2>


    <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
      FormUp+; salon yöneticileri, eğitmenler ve öğrenciler için ayrı ayrı tasarlanmış
      panellerle süreci daha düzenli ve takip edilebilir hale getirir.
    </p>
  </div>

  <div className="group cursor-pointer hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]">
   <Link to="/yonetici-paneli">
  <AudienceCard
    number="01"
    icon={<Building2 size={30} />}
    title="Salon Yöneticileri"
    description="Öğrenci, eğitmen, paket, ölçüm ve ders süreçlerini tek panelden yönetin."
    buttonText="Yönetici Panelini İncele"
  />
</Link>

   <Link to="/egitmen-paneli">
  <AudienceCard
    number="02"
    icon={<UserRoundCheck size={30} />}
    title="Eğitmenler"
    description="Öğrenci gelişimini takip edin, antrenman ve beslenme planlarını daha kolay yönetin."
    buttonText="Eğitmen Panelini İncele"
  />
</Link>

   <Link to="/ogrenci-paneli">
  <AudienceCard
    number="03"
    icon={<Dumbbell size={30} />}
    title="Öğrenciler"
    description="Programlarınızı, ölçümlerinizi ve gelişim sürecinizi tek ekrandan görüntüleyin."
    buttonText="Öğrenci Panelini İncele"
  />
</Link>
    
  </div>
</section>
<section id="demo" className="relative z-10 w-full overflow-hidden py-36">
  <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
  <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-cyan-300 font-semibold mb-4 tracking-[0.25em] uppercase">
        Demo Talep Et
      </p>

      <h2 className="text-5xl md:text-6xl font-black leading-tight">
        FormUp+’ı salonunuz için birlikte değerlendirelim.
      </h2>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
        Formu doldurun, size en kısa sürede ulaşalım. Salonunuzun ihtiyaçlarına göre
        FormUp+’ın nasıl kullanılabileceğini birlikte planlayalım.
      </p>

      <div className="mt-8 space-y-4 text-gray-300">
        <p>• Yönetici, eğitmen ve öğrenci panelleri</p>
        <p>• Öğrenci takibi ve ders planlama</p>
        <p>• Yapay zeka destekli analiz altyapısı</p>
      </div>
    </div>

   <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
>
  <input
    type="hidden"
    name="access_key"
    value="0e65edc8-612b-45c1-a1bb-b7659d61a125"
  />

  <input
    type="hidden"
    name="subject"
    value="Yeni FormUp+ Demo Talebi"
  />
  <div className="grid md:grid-cols-2 gap-4">
  <input
    type="text"
    name="ad_soyad"
    placeholder="Ad Soyad"
    required
    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400/60"
  />

  <input
    type="text"
    name="salon_adi"
    placeholder="Salon / Firma Adı"
    required
    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400/60"
  />

  <input
    type="text"
    name="telefon"
    placeholder="Telefon"
    required
    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400/60"
  />

  <input
    type="email"
    name="email"
    placeholder="E-posta"
    required
    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400/60"
  />
</div>

<select
  name="ogrenci_sayisi"
  className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-gray-400 outline-none focus:border-cyan-400/60"
>
  <option value="">Salonunuzdaki tahmini öğrenci sayısı</option>
  <option>0 - 50</option>
  <option>50 - 100</option>
  <option>100 - 250</option>
  <option>250+</option>
</select>

<textarea
  name="mesaj"
  rows="5"
  placeholder="Mesajınız"
  className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400/60"
/>

<div className="mt-6 flex flex-col items-center">
  <button
    type="submit"
    className="
    group
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-cyan-400
    to-cyan-300
    py-4
    text-lg
    font-bold
    text-black
    transition-all
    duration-500
    hover:scale-[1.02]
    hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
    "
  >
    Ücretsiz Demo Talebi Gönder
  </button>

</div>

      <p className="mt-4 text-center text-sm text-gray-500">
        Talebiniz sonrası sizinle iletişime geçilecektir.
      </p>
    </form>
  </div>
</section>
<footer className="relative z-10 border-t border-white/10 bg-[#050816]">
  <div className="max-w-7xl mx-auto px-8 py-10">

    <div className="grid lg:grid-cols-3 gap-12">

      {/* Sol Taraf */}
      <div>
        <div className="flex items-center gap-5">
          <img
            src="/img/logo.png"
            alt="FormUp+"
            className="h-20 w-auto object-contain"
          />

          <div>
            <h3 className="text-3xl font-bold">
              FormUp+
            </h3>

            <p className="text-cyan-300 text-sm">
              Spor Salonu Yönetim Platformu
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-md text-gray-400 leading-relaxed">
          Salon yönetimi, öğrenci takibi ve yapay zeka destekli analizler tek platformda.
        </p>
      </div>

      {/* Site */}
      <div>
        <h4 className="mb-5 text-lg font-bold">
          Site
        </h4>

        <div className="space-y-3 text-gray-400">
          <a href="#ozellikler" className="block hover:text-cyan-300">
            Özellikler
          </a>

          <a href="#neden-formup" className="block hover:text-cyan-300">
            Neden FormUp?
          </a>

          <a href="#kimler-icin" className="block hover:text-cyan-300">
            Kimler İçin?
          </a>

          <a href="#demo" className="block hover:text-cyan-300">
            Demo Talep Et
          </a>
        </div>
      </div>

      {/* İletişim */}
      <div>
        <h4 className="mb-5 text-lg font-bold">
          İletişim
        </h4>

        <div className="space-y-3 text-gray-400">
          <p>info@formup.com</p>
          <p>+90 507 339 65 32</p>
          <p>Adana, Türkiye</p>
        </div>
      </div>

    </div>

    <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-gray-500">
        © 2026 FormUp+. Tüm hakları saklıdır.
      </p>

      <div className="flex gap-6 text-sm text-gray-500">
        <span>Gizlilik Politikası</span>
        <span>KVKK</span>
      </div>
    </div>

  </div>
</footer>
    </main>
  );
}
function FeatureCard({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group h-[320px] [perspective:1000px]"
    >
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Ön yüz */}
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl [backface-visibility:hidden]">
          <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 text-lg font-bold">
            {number}
          </div>

          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>

          <p className="text-gray-400">
            Detayları görmek için kartın üzerine gel.
          </p>
        </div>

        {/* Arka yüz */}
        <div className="absolute inset-0 rounded-[32px] border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-8 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm text-cyan-300 font-semibold mb-4">
            FormUp+ Özelliği
          </p>

          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>

          <p className="text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
function WhyCard({ icon, title, problem, solution }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl hover:border-cyan-400/50 transition"
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition" />

      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-5">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-7">
        {problem}
      </p>

      <div className="h-px w-full bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent mb-7" />

      <div>
        <p className="text-xs font-semibold text-cyan-300 mb-3 tracking-[0.2em] uppercase">
          FormUp+ Çözümü
        </p>

        <p className="text-gray-200 leading-relaxed">
          {solution}
        </p>
      </div>
    </motion.div>
  );
}
function AudienceCard({ number, icon, title, description, buttonText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl hover:border-cyan-400/40 transition"
    >
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-cyan-400/20 transition" />
      <div className="absolute right-6 top-4 text-[90px] font-black text-white/[0.03]">
  {number}
</div>

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-8">
        {description}
      </p>

      <button className="flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">
        {buttonText}
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}

export default Home;

