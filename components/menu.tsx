import { FC } from "react";

const Menu: FC<{ show: boolean; setShow: (show: boolean) => void }> = ({
  show,
  setShow
}) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${show && "show"}`}
        style={{ visibility: show ? "visible" : "hidden" }}
        tabIndex={-1}
        id="offCanvasMenu"
        aria-labelledby="offcanvasExampleLabel"
        aria-modal={show}
        role="dialog"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Kapat"
            id="offcanvasKapat"
            onClick={() => setShow(!show)}
          >
            <i className="icn-times"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-links">
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-gazete"></i>
              </div>
              <div className="offcanvas-link__text">Gazeteler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-book-open"></i>
              </div>
              <div className="offcanvas-link__text">Dergiler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-book"></i>
              </div>
              <div className="offcanvas-link__text">Kitaplar</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-notes"></i>
              </div>
              <div className="offcanvas-link__text">Yazmalar</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-file"></i>
              </div>
              <div className="offcanvas-link__text">Belgeler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-picture"></i>
              </div>
              <div className="offcanvas-link__text">Görseller</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-paragraph"></i>
              </div>
              <div className="offcanvas-link__text">Başlıklar</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-gazete"></i>
              </div>
              <div className="offcanvas-link__text">Haberler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-dizinlerim"></i>
              </div>
              <div className="offcanvas-link__text">Dizinler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-quote-mark"></i>
              </div>
              <div className="offcanvas-link__text">Konular</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-video"></i>
              </div>
              <div className="offcanvas-link__text">Videolar</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-sesler"></i>
              </div>
              <div className="offcanvas-link__text">Sesler</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-yazarlar"></i>
              </div>
              <div className="offcanvas-link__text">Yazarlar</div>
            </a>
            <a href="#">
              <div className="offcanvas-link__icon">
                <i className="icn-yayincilar"></i>
              </div>
              <div className="offcanvas-link__text">Yayıncılar</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
