// import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <>

      {/* <div className="preloader-wrapper">
        <div className="preloader">
        </div>
      </div> */}

      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="search-form" action="">
            <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
            <button type="submit" className="search-submit"><a href="#"><i className="icon icon-search"></i></a></button>
          </form>
          <h5 className="cat-list-title">Browse Categories</h5>
          <ul className="cat-list">
            <li className="cat-list-item">
              <a href="shop.html" title="Men Jackets">Sensors</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Fashion">Electronics</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Casual Wears">Organisers</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Women">Water Bottles</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Trending">Tiffins</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Hoodie">Steamer Boilers</a>
            </li>
            <li className="cat-list-item">
              <a href="shop.html" title="Kids">Soaps and Toileries</a>
            </li>
          </ul>
        </div>
      </div>
      <header id="header">
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact">
                  <p>Let’s talk! <strong>+91 6386189089</strong>
                  </p>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Negotiable Prices and Great Quality Products</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <a href="login.html">
                        <i className="icon icon-user"></i>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i className="icon icon-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html">
                        <i className="icon icon-heart"></i>
                      </a>
                    </li>
                    <li className="user-items search-item pe-3">
                      <a href="#" className="search-button">
                        <i className="icon icon-search"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="primary-nav padding-small">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <a href="index.html">
                      <img src="/images/main-logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                      <ul className="menu-list">
                        <li className="menu-item has-sub">
                          <a href="index.html" className="item-anchor active d-flex align-item-center" data-effect="Home">Home<i className="icon icon-chevron-down"></i></a>
                          <ul className="submenu">
                            <li><a href="index.html" className="item-anchor active">Home</a></li>
                          </ul>
                        </li>
                        <li><a href="about.html" className="item-anchor" data-effect="About">About</a></li>
                        <li className="menu-item has-sub">
                          <a href="shop.html" className="item-anchor d-flex align-item-center" data-effect="Shop">Shop<i className="icon icon-chevron-down"></i></a>
                          <ul className="submenu">
                            <li><a href="shop.html" className="item-anchor">Shop</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html" className="item-anchor" data-effect="Contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;