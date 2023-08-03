const Search = () => {
  return (
    <div className="container-lg">
      {/* <!-- ARAMA SAYFASI LOGO --> */}
      <div className="row">
        <div className="col">
          <div className="index-v2-mobil-logo">
            <img src="/wikilala-logo.svg" alt="Wikilala Logo" />
          </div>
          <div className="alternatif-arama-metin">
            <span>Rami Kütüphanesi</span> İle Milyonlarca sayfa{" "}
            <br className="d-none d-lg-block" /> İçerisinde arama yapın
          </div>
        </div>
      </div>
      {/* <!-- ARAMA SAYFASI LOGO --> */}
      {/* <!-- ARAMA KUTUSU --> */}
      <div className="px-4 px-lg-0">
        <div className="col main-search-v2" id="searchV2">
          <div className="gelismis-arama-link">
            <a href="gelismis-arama.html">Gelişmiş Arama</a>
          </div>
          <div className="main-search-v2-wrapper">
            <input
              type="text"
              name=""
              id="searchV2Input"
              placeholder="Arama yapın"
              className="hidden-mobile"
            />
            <button
              className="mobil-input-trigger hidden-desktop"
              id="mobilInputTrigger"
            >
              Ara...
            </button>
            <div className="arama-butonlar">
              <button id="btnSearchInfo">
                <i className="icn-info"></i>
              </button>
              <button id="btnSearchReset">
                <i className="icn-times"></i>
              </button>
              <button id="btnSearchSettings">
                <i className="icn-settings-2"></i>
              </button>
              <div className="ayrac"></div>
              <button>
                <i className="icn-input-keyboard"></i>
              </button>
            </div>
          </div>
          <div className="main-search-v2-sonuclar">
            <div className="sonuclar-body">
              <div className="sonuc-baslik">TAM UYUMLU ( Marks)</div>
              <div className="sonuc-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </div>

              <div
                id="sonucKutuSlider"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="sonuc-taglar">
                      <a href="#" className="aranan-kelime buyutec">
                        “Namık Kemal”
                      </a>{" "}
                      <a href="#">Örneği deneyin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sonuclar-footer">
              <div className="sonuclar-footer-wrapper">
                <div className="filtre-wrapper yatay-scroll">
                  <div className="fitre-butonlar" id="indicators">
                    <button
                      className="active"
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="0"
                    >
                      <i className="icn-filter-quote"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="1"
                    >
                      <i className="icn-filter-vertical-bar"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="2"
                    >
                      <i className="icn-filter-minus"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="3"
                    >
                      <i className="icn-filter-parantez"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="4"
                    >
                      <i className="icn-filter-question"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="5"
                    >
                      <i className="icn-filter-asterisk"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="6"
                    >
                      <i className="icn-filter-plus"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="7"
                    >
                      <i className="icn-filter-underscore"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="8"
                    >
                      <i className="icn-filter-quote-tilda"></i>
                    </button>
                    <button
                      data-bs-target="#sonucKutuSlider"
                      data-bs-slide-to="9"
                    >
                      <i className="icn-filter-tilda"></i>
                    </button>
                  </div>
                </div>
                <button className="sonuc-filtre-button">
                  <i className="icn-settings-2 me-2"></i>{" "}
                  <span className="hidden-mobile">Dil Filtresi</span>
                  <span className="hidden-desktop">Filtre</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ARAMA KUTUSU SONU --> */}

      <div className="row">
        <div className="col px-0-mobil">
          <div className="app-icons app-icons-v2 scroll-none">
            <a href="gazeteler.html" className="app-icon app-icon-v2">
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-gazete"></i>
              <div className="app-icon__text">Gazeteler</div>
              <div className="app-icon-sayac">2682+</div>
            </a>
            <a href="dergiler.html" className="app-icon app-icon-v2">
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-book-open"></i>
              <div className="app-icon__text">Dergiler</div>
              <div className="app-icon-sayac">289+</div>
            </a>
            <a href="kitaplar.html" className="app-icon app-icon-v2">
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-book"></i>
              <div className="app-icon__text">Kitaplar</div>
              <div className="app-icon-sayac">1800</div>
            </a>
            <a href="yazmalar.html" className="app-icon app-icon-v2">
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-pencil"></i>
              <div className="app-icon__text">Yazmalar</div>
              <div className="app-icon-sayac">1800</div>
            </a>
            <a href="gorseller.html" className="app-icon app-icon-v2">
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-picture"></i>
              <div className="app-icon__text">Görseller</div>
              <div className="app-icon-sayac">2682+</div>
            </a>
            <a
              href="diger.html"
              className="app-icon app-icon-v2 app-icon__diger"
            >
              <div className="link-ok">
                <i className="icn-right-arrow"></i>
              </div>
              <i className="icn-dots-horizontal">&nbsp;</i>
              <div className="app-icon__text">Diğer</div>
              <div className="app-icon-sayac"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
