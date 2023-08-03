"use client";
import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid px-50">
      <div className="footer-wrapper">
        <div className="footer-sol">
          <div className="d-flex">
            <a href="hakkimizda.html">Hakkımızda</a>
            <a className="hidden-mobile" href="basinda-biz.html">
              Basında Biz
            </a>
            <a className="hidden-mobile" href="nasil-calisir.html">
              Nasıl Çalışır?
            </a>
            <a className="hidden-mobile" href="projelerimiz.html">
              Projelerimiz
            </a>
            <a className="hidden-mobile" href="paketler.html">
              Paketler
            </a>
            <a className="hidden-mobile" href="sartlar.html">
              Şartlar
            </a>
            <a href="iletisim.html">İletişim</a>
          </div>
          <div className="copyright-mobile hidden-desktop">
            Copyright © 2021 Wikilala.
          </div>
        </div>
        <div className="footer-sag">
          <div className="muhabbet hidden-mobile">
            <a href="https://www.hiperlink.com.tr/Home" target="_blank">
              Hiperlink
            </a>
            ’te muhabbetle yapıldı
          </div>
          <div className="footer-separator"></div>
          <div className="footer-dil">
            <div className="btn-group dropup">
              <button
                type="button"
                className={`btn dropdown-toggle ${show && "show"}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow(!show)}
              >
                <img src="/tr.svg" className="bayrak" /> Tr
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end ${show && "show"}`}
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    <img src="/tr.svg" className="bayrak" /> Tr
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="/en.svg" className="bayrak" /> En
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="/ar.svg" className="bayrak" /> Ar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div
          className="offcanvas-backdrop fade"
          style={{ zIndex: 0 }}
          onClick={() => setShow(!show)}
        ></div>
      )}
    </div>
  );
};
export default Footer;
