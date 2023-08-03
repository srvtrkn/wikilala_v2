"use client";
import React from "react";
import Link from "next/link";
const Error = () => {
  return (
    <div className="container">
      <div className="row align-items-center flex-column mb-5">
        <div className="col-lg-6 mx-auto">
          <div className="fof-wrapper text-center">
            <img src="/404.svg" className="img-fluid text-center mb-5" />
            <h1>404 Error -Sayfa Bulunamadı</h1>
            <p>
              Sitede bir hata oluştu yada olmayan bir uzantıya girmeye
              çalıştınız. Sayfayı yenileyebilir yada anasayfaya dönebilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 mx-auto">
          <Link
            className="btn btn-primary btn-block btn-lg w-100 d-flex justify-content-between align-items-center"
            href="/"
          >
            <i className="icn-left-arrow-thin"></i>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
