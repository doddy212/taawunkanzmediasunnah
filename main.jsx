import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const kebutuhan = 22000000;
  const terkumpul = 3500000;
  const progress = Math.round((terkumpul / kebutuhan) * 100);

  const rupiah = (n) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Peluang Pahala Jariyah</span>
          <h1>Ta’awun Pengadaan Laptop Streaming Dakwah</h1>
          <p>
            Bantu Kanz Media Sunnah menghadirkan siaran kajian yang lebih
            stabil, profesional, dan menjangkau lebih luas.
          </p>

          <div className="buttons">
            <a href="#donasi" className="btn primary">
              Bantu Sekarang
            </a>
            <a href="#spesifikasi" className="btn secondary">
              Lihat Spesifikasi
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Target Pengadaan</h2>
          <div className="amount">{rupiah(kebutuhan)}</div>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>{progress}% dana terkumpul</p>

          <div className="stats">
            <div>
              <small>Terkumpul</small>
              <strong>{rupiah(terkumpul)}</strong>
            </div>
            <div>
              <small>Kekurangan</small>
              <strong>{rupiah(kebutuhan - terkumpul)}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Mengapa Dibutuhkan?</h2>
        <p>
          Laptop lama mengalami kerusakan motherboard dan tidak lagi optimal
          untuk live streaming kajian, editing video, serta pengolahan media
          dakwah.
        </p>

        <ul>
          <li>Mendukung live streaming kajian dan dauroh</li>
          <li>Meningkatkan kualitas dokumentasi dakwah</li>
          <li>Mempermudah editing video dan konten</li>
          <li>Menjadi sarana amal jariyah</li>
        </ul>
      </section>

      <section className="section" id="spesifikasi">
        <h2>Spesifikasi Laptop</h2>

        <table>
          <tbody>
            <tr>
              <td>Perangkat</td>
              <td>Lenovo LOQ 15</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>AMD Ryzen 7 7435HS</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>32 GB</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>1 TB SSD</td>
            </tr>
            <tr>
              <td>Graphics</td>
              <td>RTX 4060 8GB</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="donation" id="donasi">
        <h2>Informasi Donasi</h2>

        <div className="rekening">
          <p>Bank Syariah Indonesia (BSI)</p>
          <h3>2902903760</h3>
          <span>a.n Doddy Sukmajaya</span>
        </div>

        <p className="doa">
          “Apabila seseorang meninggal dunia, maka terputuslah amalannya
          kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau doa
          anak yang shalih.” (HR. Muslim)
        </p>
      </section>

      <footer>
        <p>Kanz Media Sunnah</p>
        <small>Jazakumullahu khairan katsiran</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
