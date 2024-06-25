import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="col align-items-space-evently justify-content-center p-4" id="whyus">
      <div className="row align-items-center">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="row">
        <div className="col-md-3 p-2" id="why1">
          <div className="card">
            <div className="card-body">
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545367/icon_complete_qgv6qh.png"
                alt=""
              />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2" id="why2">
          <div className="card">
            <div className="card-body">
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545377/icon_price_wd44hg.png"
                alt=""
              />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">
                Harga murah dan bersaing, bisa dibandingkan harga kami dengan rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2" id="why3">
          <div className="card">
            <div className="card-body">
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545367/icon_24hrs_cvdi91.png"
                alt=""
              />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2" id="why4">
          <div className="card">
            <div className="card-body">
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545378/icon_professional_bcqznf.png"
                alt=""
              />
              <h5 className="card-title">Sopir Profesional</h5>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
