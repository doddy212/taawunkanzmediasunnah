import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Video, HeartHandshake, CheckCircle2, Copy, Target, Banknote, Sparkles } from "lucide-react";

const goals = [
  "Mendukung live streaming kajian dan dauroh",
  "Meningkatkan kualitas dokumentasi dan publikasi dakwah",
  "Mempermudah editing video dan pengolahan konten",
  "Menjaga kestabilan siaran agar ilmu tersebar lebih luas",
];

const specs = [
  ["Perangkat", "Lenovo LOQ 15"],
  ["Processor", "AMD Ryzen 7 7435HS"],
  ["RAM", "32 GB"],
  ["Storage", "1 TB SSD"],
  ["Graphics", "RTX 4060 8GB"],
];

const kebutuhan = 22000000;
const terkumpul = 3500000;
const kekurangan = kebutuhan - terkumpul;
const progress = Math.round((terkumpul / kebutuhan) * 100);

function rupiah(n) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function KanzMediaSunnahLanding() {
  const copyRekening = async () => {
    try {
      await navigator.clipboard.writeText("2902903760");
      alert("Nomor rekening berhasil disalin");
    } catch {
      alert("Nomor rekening: 2902903760");
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-stone-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-medium text-orange-800 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" /> Peluang Pahala Jariyah
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Ta’awun Pengadaan Laptop Streaming Dakwah
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
              Bantu Kanz Media Sunnah menghadirkan siaran kajian yang lebih lancar, stabil, dan menjangkau kaum muslimin lebih luas melalui perangkat streaming yang memadai.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-2xl bg-orange-700 px-7 py-6 text-base hover:bg-orange-800">
                <a href="#donasi">Bantu Sekarang</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-stone-300 bg-white/70 px-7 py-6 text-base">
                <a href="#kebutuhan">Lihat Kebutuhan</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-0 bg-white/85 shadow-2xl backdrop-blur">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-black text-cyan-400 shadow-lg">
                    كنز
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[.25em] text-stone-500">Kanz Media Sunnah</p>
                    <h2 className="text-2xl font-extrabold">Target Pengadaan</h2>
                  </div>
                </div>

                <div className="rounded-3xl bg-stone-950 p-6 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-stone-300">Total Kebutuhan</p>
                      <p className="mt-1 text-3xl font-black">{rupiah(kebutuhan)}</p>
                    </div>
                    <Target className="h-10 w-10 text-orange-400" />
                  </div>
                  <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-orange-500" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-stone-300">Dana terkumpul {progress}% dari target</p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-cyan-50 p-5">
                    <p className="text-sm text-cyan-900/70">Terkumpul</p>
                    <p className="mt-1 text-xl font-black text-cyan-950">{rupiah(terkumpul)}</p>
                  </div>
                  <div className="rounded-3xl bg-orange-50 p-5">
                    <p className="text-sm text-orange-900/70">Kekurangan</p>
                    <p className="mt-1 text-xl font-black text-orange-950">{rupiah(kekurangan)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [Video, "Live Streaming", "Siaran kajian lebih stabil dan profesional."],
            [Laptop, "Editing Konten", "Pengolahan video dan audio dakwah lebih lancar."],
            [HeartHandshake, "Amal Jariyah", "Dukungan menjadi jalan tersebarnya ilmu bermanfaat."],
          ].map(([Icon, title, desc]) => (
            <Card key={title} className="rounded-3xl border-orange-100 bg-white shadow-sm">
              <CardContent className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="kebutuhan" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="font-semibold text-orange-700">Mengapa dibutuhkan?</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Laptop lama mengalami kerusakan motherboard</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Perangkat yang digunakan saat ini tidak lagi mampu menjalankan proses streaming secara optimal. Laptop baru diperlukan agar dakwah digital dapat terus berjalan baik, profesional, dan berkelanjutan.
            </p>
            <div className="mt-7 space-y-3">
              {goals.map((goal) => (
                <div key={goal} className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-700" />
                  <p className="text-stone-700">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border-stone-100 shadow-lg">
            <CardContent className="p-7">
              <h3 className="text-2xl font-black">Spesifikasi Laptop</h3>
              <div className="mt-6 divide-y divide-stone-100 overflow-hidden rounded-3xl border border-stone-100">
                {specs.map(([key, val]) => (
                  <div key={key} className="grid grid-cols-[.8fr_1.2fr] bg-white">
                    <div className="bg-stone-50 p-4 font-semibold text-stone-600">{key}</div>
                    <div className="p-4 font-bold">{val}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="donasi" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Card className="overflow-hidden rounded-[2rem] border-0 bg-stone-950 text-white shadow-2xl">
          <CardContent className="grid gap-8 p-7 md:grid-cols-[1fr_.8fr] md:p-10">
            <div>
              <p className="font-semibold text-orange-300">Informasi Donasi</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">Mari berta’awun untuk fasilitas dakwah</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                Semoga setiap bantuan yang diberikan Allah jadikan amal jariyah yang terus mengalir selama perangkat ini digunakan untuk penyebaran ilmu.
              </p>
              <div className="mt-8 rounded-3xl bg-white p-6 text-stone-950">
                <div className="flex items-center gap-3 text-orange-800">
                  <Banknote className="h-6 w-6" />
                  <p className="font-bold">Bank Syariah Indonesia (BSI)</p>
                </div>
                <p className="mt-5 text-sm text-stone-500">Nomor Rekening</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-3xl font-black tracking-wide">2902903760</p>
                  <Button onClick={copyRekening} className="rounded-2xl bg-orange-700 hover:bg-orange-800">
                    <Copy className="mr-2 h-4 w-4" /> Salin
                  </Button>
                </div>
                <p className="mt-4 text-sm text-stone-500">Atas Nama</p>
                <p className="text-xl font-extrabold">Doddy Sukmajaya</p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] bg-white/10 p-6 text-center">
              <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-white p-6 text-stone-900">
                <div className="text-center">
                  <div className="mx-auto mb-4 grid h-40 w-40 grid-cols-5 gap-1 rounded-xl bg-stone-950 p-2">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`${[0, 1, 3, 5, 6, 8, 11, 12, 14, 16, 18, 19, 21, 23, 24].includes(i) ? "bg-white" : "bg-stone-950"} rounded-sm`} />
                    ))}
                  </div>
                  <p className="font-black">Scan QRIS</p>
                  <p className="mt-1 text-sm text-stone-600">Kanz Media Sunnah Sosial & Amal</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-stone-300">Ganti ilustrasi QR ini dengan gambar QRIS asli dari proposal saat dipublikasikan.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-orange-100 bg-white px-6 py-8 text-center text-sm text-stone-600">
        <p className="font-semibold text-stone-900">Kanz Media Sunnah</p>
        <p className="mt-2">Jazakumullahu khairan katsiran. Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
      </footer>
    </div>
  );
}
