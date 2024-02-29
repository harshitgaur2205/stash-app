"use client"
import { usePathname } from 'next/navigation'

const BannerShop = () => {
  const pathname = usePathname()
  return (
    <section className="site-banner jarallax min-height300 padding-large" style={{ background: "url(images/hero-image.jpg) no-repeat", backgroundPosition: "top" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">{pathname == "/Shop" ? "Shop page" : "About Us"}</h1>
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">&nbsp;{pathname == "/Shop" ? "Shop" : "About"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerShop;