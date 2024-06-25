import React from 'react';

const MainSection: React.FC = () => {
  return (
    <div className="row align-items-end p-0" id="main">
      <div className="col-md-6 align-items-space evently p-5">
        <h1>Sewa & Rental Mobil Terbaik di kawasan Bandung</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
      </div>
      <div className="col-md-6" id="mobil">
        <img
          src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710542156/img_car_qh5jce.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default MainSection;
