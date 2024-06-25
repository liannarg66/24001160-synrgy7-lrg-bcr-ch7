import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="rectangle"></div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#ourservice">Our Service</a>
            <a className="nav-link" href="#whyus">Why Us?</a>
            <a className="nav-link" href="#testimony">Testimony</a>
            <a className="nav-link" href="#faq">FAQ</a>
            <button className="btn btn-outline-success me-2" type="button">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
