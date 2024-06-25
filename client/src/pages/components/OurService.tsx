import React from 'react';

const OurService: React.FC = () => {
  return (
    <div className="row align-items-center justify-content-center p-5" id="ourservice">
      <div className="col-md-6 p-4" id="our">
        <img
          src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545554/img_service_gkijgd.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        <h2>Best Car Rental for any kind of trip in Bandung!</h2>
        <p>
          Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="service">
          <p>
            <span>
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545386/Group_53_zxdzjb.png"
                alt=""
                className="img-fluid px-2"
              />
            </span>
            Sewa Mobil dengan Supir di Bandung 12 Jam
          </p>
          <p>
            <span>
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545386/Group_53_zxdzjb.png"
                alt=""
                className="img-fluid px-2"
              />
            </span>
            Sewa Mobil Lepas Kunci di Bandung 12 Jam
          </p>
          <p>
            <span>
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545386/Group_53_zxdzjb.png"
                alt=""
                className="img fluid px-2"
              />
            </span>
            Sewa Mobil Jangka Panjang Bulanan
          </p>
          <p>
            <span>
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545386/Group_53_zxdzjb.png"
                alt=""
                className="img fluid px-2"
              />
            </span>
            Gratis Antar-Jemput Mobil di Bandara
          </p>
          <p>
            <span>
              <img
                src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545386/Group_53_zxdzjb.png"
                alt=""
                className="img fluid px-2"
              />
            </span>
            Layanan Airport Transfer/Drop In Out
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurService;
