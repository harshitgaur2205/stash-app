function IndexProductItem({ index, prodObj }) {
    return (
        <div key={index} class="product-item col-lg-3 col-md-6 col-sm-6">
            <div class="image-holder">
                <img src={prodObj.imageURL} alt="Books" class="product-image" />
            </div>
            <div class="cart-concern">
                <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                        <i class="icon icon-screen-full"></i>
                        <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                        <i class="icon icon-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-detail">
                <h3 class="product-title">
                    <a href="single-product.html">{prodObj.productName}</a>
                </h3>
                <div class="item-price text-primary">{prodObj.price}</div>
            </div>
        </div>
    );
}

export { IndexProductItem };