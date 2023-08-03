"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Section: FC<{
  title: string;
  slidesPerView: number;
  content: any;
}> = ({ title, slidesPerView, content }) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <section className="pb-lg-4">
      <div className="row mb-5">
        <div className="col-lg-10 offset-lg-1">
          <div className="content-baslik mb-3">
            <h2>{title}</h2>
            <div className="d-flex align-items-center">
              <a href="#" className="tumunu-gor-link">
                <span className="hide">
                  Tümünü Gör <i className="icn-right-arrow-thin"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="content-slider card-slider">
            <div
              className="swiper overflow-lg-hidden"
              data-breakpoint-xs="2"
              data-breakpoint-sm="3"
              data-breakpoint-md="4"
              data-breakpoint-lg="5"
            >
              <Swiper
                spaceBetween={15}
                slidesPerView={slidesPerView}
                onSwiper={swiper => setSwiperRef(swiper)}
              >
                {Array.apply(null, Array(12)).map(() => {
                  return <SwiperSlide>{content}</SwiperSlide>;
                })}
              </Swiper>
            </div>
            <div
              className="content-slider-ok content-slider-ok-sol"
              onClick={prevHandler}
            >
              <div>
                <div className="icn-angle-left"></div>
              </div>
            </div>
            <div
              className="content-slider-ok content-slider-ok-sag"
              onClick={nextHandler}
            >
              <div>
                <div className="icn-angle-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Contents = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="text-center pt-lg-5 mb-4">
        <h3 className="font-weight-600 text-lacivert">Öne çıkan içerikler</h3>
      </div>
      <Section
        title="Gazeteler"
        slidesPerView={5}
        content={
          <div className="content-card comment-card-border p-3">
            <div className="content-card-header">
              <Image
                src="/dummy-210x246.jpg"
                width={210}
                height={246}
                alt=""
                className="img-fluid"
              />
            </div>
            <a href="#" className="content-card-body text-center">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
              <div className="content-card-subtitle">Lorem ipsum dolar</div>
            </a>
          </div>
        }
      />
      <Section
        title="Dergiler"
        slidesPerView={5}
        content={
          <div className="content-card comment-card-border p-3">
            <div className="content-card-header">
              <Image
                src="/dummy-210x246.jpg"
                width={210}
                height={246}
                alt=""
                className="img-fluid"
              />
            </div>
            <a href="#" className="content-card-body text-center">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
              <div className="content-card-subtitle">Lorem ipsum dolar</div>
            </a>
          </div>
        }
      />
      <Section
        title="Kitaplar"
        slidesPerView={5}
        content={
          <div className="content-card comment-card-border p-3">
            <div className="content-card-header">
              <img src="/dummy-210x246.jpg" alt="" className="img-fluid" />
              <div className="actions">
                <label className="checkbox-custom">
                  <input type="checkbox" className="check-input" />
                  <div className="checkbox-custom-content">
                    <button className="round-btn profil-content-btn">
                      <i className="icn-star-rounded"></i>
                    </button>
                  </div>
                </label>
                <div className="btn-group">
                  <button
                    className="round-btn dropdown-toggle profil-content-btn me-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icn-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu profil-dropdown">
                    <li>
                      <a href="#">Sil</a>
                    </li>
                    <li>
                      <a href="#">Düzenle</a>
                    </li>
                    <li>
                      <a href="#">Şikayet Et</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="content-card-body text-center">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
              <div className="content-card-subtitle">Lorem ipsum dolar</div>
            </a>
          </div>
        }
      />
      <Section
        title="Yazmalar"
        slidesPerView={5}
        content={
          <div className="content-card comment-card-border p-3">
            <div className="content-card-header">
              <img src="/dummy-210x246.jpg" alt="" className="img-fluid" />
              <div className="actions">
                <label className="checkbox-custom">
                  <input type="checkbox" className="check-input" />
                  <div className="checkbox-custom-content">
                    <button className="round-btn profil-content-btn">
                      <i className="icn-star-rounded"></i>
                    </button>
                  </div>
                </label>
                <div className="btn-group">
                  <button
                    className="round-btn dropdown-toggle profil-content-btn me-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icn-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu profil-dropdown">
                    <li>
                      <a href="#">Sil</a>
                    </li>
                    <li>
                      <a href="#">Düzenle</a>
                    </li>
                    <li>
                      <a href="#">Şikayet Et</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="content-card-body text-center">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
              <div className="content-card-subtitle">Lorem ipsum dolar</div>
            </a>
          </div>
        }
      />
      <Section
        title="Belgeler"
        slidesPerView={5}
        content={
          <div className="content-card comment-card-border p-3">
            <div className="content-card-header">
              <img src="/dummy-210x246.jpg" alt="" className="img-fluid" />
              <div className="actions">
                <label className="checkbox-custom">
                  <input type="checkbox" className="check-input" />
                  <div className="checkbox-custom-content">
                    <button className="round-btn profil-content-btn">
                      <i className="icn-star-rounded"></i>
                    </button>
                  </div>
                </label>
                <div className="btn-group">
                  <button
                    className="round-btn dropdown-toggle profil-content-btn me-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icn-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu profil-dropdown">
                    <li>
                      <a href="#">Sil</a>
                    </li>
                    <li>
                      <a href="#">Düzenle</a>
                    </li>
                    <li>
                      <a href="#">Şikayet Et</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="content-card-body text-center">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
              <div className="content-card-subtitle">Lorem ipsum dolar</div>
            </a>
          </div>
        }
      />
      <Section
        title="Görseller"
        slidesPerView={5}
        content={
          <div className="swiper-slide">
            <a href="#" className="content-card">
              <div className="content-card-header">
                <img src="/dummy-244x288.jpg" alt="" className="img-fluid" />
              </div>
              <div className="content-card-body">
                <div className="content-card-title line-clamp-2">
                  Lorem Ipsum Dolor Sit Amet, Consetetur
                </div>
                <div className="content-card-subtitle">Lorem ipsum dolar</div>
              </div>
            </a>
          </div>
        }
      />
      <Section
        title="Başlıklar"
        slidesPerView={5}
        content={
          <a href="#" className="icon-card icon-card-mini">
            <div className="icon-card-body p-4">
              <i className="icn-book"></i>
              <div>
                <div className="icon-card-title line-clamp-4">
                  <span className="text-mavi">“Şahbal Dergisi 5. Sayı“</span>
                  içerisinde geçen Çanakkale başlıklı röportaj
                </div>
                <i className="icn-right-arrow"></i>
              </div>
            </div>
          </a>
        }
      />
      <Section
        title="Haberler"
        slidesPerView={3}
        content={
          <a href="#" className="content-card-yatay">
            <div className="content-card-yatay-header">
              <img src="/dummy-266x266.jpg" alt="" className="img-fluid" />
            </div>
            <div className="content-card-yatay-body">
              <div className="content-card-title">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </div>
              <div className="content-card-subtitle">
                Lorem Ipsum dolar sit amet
              </div>
              <div className="content-card-subtitle-tarih">
                <span className="fw-bold">Tarih:</span> 26.08.2021
              </div>
            </div>
          </a>
        }
      />
      <Section
        title="Dizinler"
        slidesPerView={5}
        content={
          <a href="#" className="icon-card icon-card-mini">
            <div className="icon-card-body p-4">
              <i className="icn-book"></i>
              <div>
                <div className="icon-card-title line-clamp-4">
                  <span className="text-mavi">“Şahbal Dergisi 5. Sayı“</span>
                  içerisinde geçen Çanakkale başlıklı röportaj
                </div>
                <i className="icn-right-arrow"></i>
              </div>
            </div>
          </a>
        }
      />
      <Section
        title="Konular"
        slidesPerView={5}
        content={
          <a href="#" className="icon-card icon-card-mini">
            <div className="icon-card-body p-4">
              <i className="icn-bell-plus"></i>
              <div>
                <div className="icon-card-title line-clamp-4">
                  Batı dilleri ve Edebiyatı sanatı kültürü lorem Ipsum dolar…
                </div>
                <i className="icn-right-arrow"></i>
              </div>
            </div>
          </a>
        }
      />
      <Section
        title="Videolar"
        slidesPerView={5}
        content={
          <div className="content-card content-card-media">
            <div className="content-card-header">
              <video data-media-video controls>
                <source
                  src="/file_example_MP4_480_1_5MG.mp4"
                  type="video/mp4"
                />
                Tarayıcınız videoları desteklememektedir.
              </video>
            </div>
            <div className="content-card-body">
              <div className="content-card-title line-clamp-2">
                Lorem ipsum dolor sit amet, consetetur
              </div>
            </div>
            <div className="content-card-footer">
              <ul className="flex-column align-items-start gap-1">
                <li>
                  Şirket:{" "}
                  <span className="fw-bold text-lacivert ellipsis">
                    Kalan Müzik
                  </span>
                </li>
                <li>
                  Tarih:{" "}
                  <span className="fw-bold text-lacivert">01.01.1900</span>
                </li>
              </ul>
            </div>
          </div>
        }
      />
      <Section
        title="Sesler"
        slidesPerView={5}
        content={
          <div className="content-card-sesler content-card-sesler-mini">
            <div className="content-card-header">
              <div className="ses-cerceve">
                <button>
                  <i className="icn-headphones"></i>
                </button>
              </div>
            </div>
            <div className="content-card-body">
              <div className="content-card-title line-clamp-2">
                Lorem Ipsum Dolor Sit Amet, Consetetur
              </div>
            </div>
            <div className="content-card-footer">
              <ul>
                <li>
                  Süre: <span className="fw-bold text-lacivert">3.45</span>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default Contents;
