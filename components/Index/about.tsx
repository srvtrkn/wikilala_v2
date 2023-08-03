"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { type } from "os";
import { useState } from "react";
const About = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="row pt-5">
        <div className="col-lg-10 offset-lg-1">
          <div className="text-center pt-lg-5 mb-4">
            <h3 className="font-weight-600 text-lacivert">
              Wikilala’da yeni misiniz?
            </h3>
          </div>
          <div className="mini-card-slider px-4">
            <div className="swiper overflow-x-lg-hidden">
              <Swiper
                spaceBetween={15}
                slidesPerView={4}
                onSwiper={swiper => setSwiperRef(swiper)}
              >
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-play-o"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Wikilala'ya genel Bakış
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-search"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Arama Nasıl Yapılır?
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-book"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Nasıl Kitap Okuyabiliriz?
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-upload"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Nasıl Dosya Yüklenir?
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-play-o"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Wikilala'ya genel Bakış
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-search"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Arama Nasıl Yapılır?
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-book"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Nasıl Kitap Okuyabiliriz?
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="mini-card-slide">
                    <div className="mini-card-slide-icon">
                      <i className="icn-upload"></i>
                    </div>
                    <div className="mini-card-slide-text">
                      Nasıl Dosya Yüklenir?
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-pagination swiper-pagination-normal"></div>
            <div className="swiper-button-next" onClick={nextHandler}></div>
            <div className="swiper-button-prev" onClick={prevHandler}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
