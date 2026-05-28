import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const kebutuhan = 22000000;
const terkumpul = 3500000;
const kekurangan = kebutuhan - terkumpul;
const progress = Math.round((terkumpul / kebutuhan) * 100);

function rupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

function App() {
  const copyRekening = async () => {
    try {
      await navigator.clipboard.writeText("2902903760");
      alert("Nomor rekening berhasil disalin");
    } catch {
      alert("Nomor rekening: 2902903760");
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <div className="badge">Peluang Pahala Jariyah</div>
          <h1>Ta’awun Pengadaan Laptop Streaming Dakwah</h1>
          <p>
            Bantu Kanz Media Sunnah agar siaran ilmu bisa lebih lancar, stabil,
            dan menjangkau kaum muslimin lebih luas.
          </p>
          <div className="actions">
            <a className="btn primary" href="#donasi">Bantu Sekarang</a>
            <a className="btn secondary" href="#spesifikasi">Lihat Spesifikasi</a>
          </div>
        </div>

        <div className="heroCard">
         <img
  className="logoImg"
  src="/logoImg.png"
  alt="Kanz Media Sunnah"
/>
          <p className="muted">Target Pengadaan</p>
          <h2>{rupiah(kebutuhan)}</h2>
          <div className="progress">
            <span style={{ width: `${progress}%` }} />
          </div>
          <p className="muted">{progress}% dana terkumpul</p>

          <div className="grid2">
            <div>
              <small>Terkumpul</small>
              <strong>{rupiah(terkumpul)}</strong>
            </div>
            <div>
              <small>Kekurangan</small>
              <strong>{rupiah(kekurangan)}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div>
          <p className="label">Latar Belakang</p>
          <h2>Mendukung dakwah digital yang lebih stabil</h2>
          <p>
            Kanz Media Sunnah bergerak dalam dokumentasi, peliputan, dan live
            streaming kajian Islam. Laptop lama mengalami kerusakan motherboard
            dan tidak lagi optimal untuk streaming, editing video, dan
            pengolahan audio visual.
          </p>
        </div>

        <div className="benefits">
          <div>Mendukung live streaming kajian dan dauroh</div>
          <div>Meningkatkan kualitas dokumentasi dakwah</div>
          <div>Mempermudah editing video dan konten</div>
          <div>Menjaga kestabilan siaran dakwah</div>
          <div>Menjadi sarana amal jariyah</div>
        </div>
      </section>

      <section id="spesifikasi" className="section">
        <p className="label">Rencana Kebutuhan</p>
        <h2>Spesifikasi Laptop</h2>

        <div className="specCard">
          <div><span>Perangkat</span><b>Lenovo LOQ 15</b></div>
          <div><span>Processor</span><b>AMD Ryzen 7 7435HS</b></div>
          <div><span>RAM</span><b>32 GB</b></div>
          <div><span>Storage</span><b>1 TB SSD</b></div>
          <div><span>Graphics</span><b>RTX 4060 8GB</b></div>
        </div>
      </section>

      <section id="donasi" className="donasi">
        <p className="label light">Informasi Donasi</p>
        <h2>Mari berta’awun untuk fasilitas dakwah</h2>
        <p>
          Semoga setiap bantuan Allah jadikan amal jariyah selama perangkat ini
          digunakan untuk penyebaran ilmu yang bermanfaat.
        </p>

        <div className="rekening">
          <span>Bank Syariah Indonesia (BSI)</span>
          <h3>2902903760</h3>
          <p>a.n Doddy Sukmajaya</p>
          <button onClick={copyRekening}>Salin Nomor Rekening</button>
        </div>

        <blockquote>
          “Apabila seseorang meninggal dunia, maka terputuslah amalannya kecuali
          tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau doa anak
          yang shalih.” (HR. Muslim)
        </blockquote>
      </section>

      <footer>
        <strong>Kanz Media Sunnah</strong>
        <span>Jazakumullahu khairan </span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
