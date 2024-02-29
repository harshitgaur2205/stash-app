function ProductItem({ index, prodObj }) {
    return (
        <>
            <div key={index} className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                    <img src={prodObj.imageURL} alt="Books" className="product-image" />
                </div>

                <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" className="view-btn tooltip d-flex">
                            <i className="icon icon-screen-full"></i>
                            <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                            <i className="icon icon-heart"></i>
                        </button>
                    </div>
                </div>

                <div className="product-detail">
                    <h3 className="product-title">
                        <a href="single-product.html">{prodObj.productName}</a>
                    </h3>
                    <div className="item-price text-primary">{prodObj.price}</div>
                </div>
            </div>
        </>
    )
}

export { ProductItem };