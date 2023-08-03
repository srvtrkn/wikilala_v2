"use client";
import { useState } from "react";
import Menu from "./menu";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showDD, setShowDD] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="main-nav main-nav-alternatif">
          <div className="main-nav__left">
            <button
              className="btn-menu"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offCanvasMenu"
              aria-controls="offcanvasExample"
              onClick={() => setShow(!show)}
            >
              <img src="/menu-icon.svg" className="menu-icon" />
            </button>
            <div className="nav-tarih hidden-mobile">
              <div className="tarih nav-tarih__miladi">17 Temmuz 2021</div>
              <div className="tarih-switch">
                <div className="tarih nav-tarih__hicri">
                  Hicri 12 Rebiülevvel 1420
                </div>
                <div className="tarih nav-tarih__rumi">
                  Rumi 02 Teşrinisani 1326
                </div>
              </div>
            </div>
          </div>
          <a href="/" className="alt-menu-logo hidden-mobile">
            <img
              src="/wikilala-logo.svg"
              alt="Wikilala Logo"
              className="uzun-logo"
            />
            <img
              src="/mini-logo.svg"
              alt="Wikilala Logo"
              className="kisa-logo"
            />
          </a>
          <div className="main-nav__right">
            <div className="main-nav__right--linkler hidden-mobile">
              <a href="sozluk.html" className="active">
                Sözlük
              </a>
              <a href="#">Çeviri</a>
              <a href="#">Çözümleyici</a>
            </div>
            <div className="main-nav__right--butonlar">
              <div className="d-down-wrapper">
                <a
                  role="button"
                  className="round-btn round-btn__apps d-down-button"
                  onClick={() => setShowDD(!showDD)}
                >
                  <div className="round-btn__icon info-dot">
                    <i className="icn-all-items"></i>
                  </div>
                </a>
                <div
                  className={`apps-dropdown d-down-menu ${showDD && "show"}`}
                >
                  <div className="dropdown-body">
                    <div className="row apps-scroll-box">
                      <div className="col-4">
                        <a href="#" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-gazete"></i>
                          </div>
                          <div className="app-icon__text">Gazeteler</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-book-open"></i>
                          </div>
                          <div className="app-icon__text">Dergiler</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-book"></i>
                          </div>
                          <div className="app-icon__text">Kitaplar</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="yazmalar.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-notes"></i>
                          </div>
                          <div className="app-icon__text">Yazmalar</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="gorseller.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-picture"></i>
                          </div>
                          <div className="app-icon__text">Görseller</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="diger.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-three-dots"></i>
                          </div>
                          <div className="app-icon__text">Diğer</div>
                        </a>
                      </div>

                      <hr className="my-2" />

                      <div className="col-4">
                        <a href="gazeteler.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-gazete"></i>
                          </div>
                          <div className="app-icon__text">Gazeteler</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="dergiler.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-book-open"></i>
                          </div>
                          <div className="app-icon__text">Dergiler</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="kitaplar.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-book"></i>
                          </div>
                          <div className="app-icon__text">Kitaplar</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="yazmalar.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-notes"></i>
                          </div>
                          <div className="app-icon__text">Yazmalar</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="gorseller.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-picture"></i>
                          </div>
                          <div className="app-icon__text">Görseller</div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="diger.html" className="app-icon">
                          <div className="app-icon__icon">
                            <i className="icn-three-dots"></i>
                          </div>
                          <div className="app-icon__text">Diğer</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="dropdown-footer">
                    <span>Tüm Projeleri Gör</span>
                    <img src="/sag-ok.svg" />
                  </a>
                </div>
              </div>
              <a href="login.html" className="btn btn-cizgi giris-btn me-2">
                Giriş
              </a>
              <a href="yukle.html" className="btn btn-primary kayit-btn">
                Yükle
              </a>
            </div>
          </div>
        </div>
      </div>
      <Menu show={show} setShow={setShow} />
      {(show || showDD) && (
        <div
          className={`offcanvas-backdrop fade ${(show || showDD) && "show"}`}
          style={{ zIndex: 1 }}
          onClick={() => {
            show && setShow(!show);
            showDD && setShowDD(!showDD);
          }}
        ></div>
      )}
    </>
  );
};
export default Header;
