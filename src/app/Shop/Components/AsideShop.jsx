function AsideShop() {
    return (
        <>
            <aside className="col-md-3">
                <div className="sidebar">
                    <div className="widgets widget-menu">
                        <div className="widget-search-bar">
                            <form role="search" method="get" className="d-flex">
                                <input className="search-field" placeholder="Search" type="text" />
                                <button className="btn btn-dark"><i className="icon icon-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="widgets widget-product-tags">
                        <h5 className="widget-title">Tags</h5>
                        <ul className="product-tags sidebar-list list-unstyled">
                            <li className="tags-item">
                                <a href="">White</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Cheap</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Branded</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Modern</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Simple</a>
                            </li>
                        </ul>
                    </div>
                    <div className="widgets widget-product-brands">
                        <h5 className="widget-title">Brands</h5>
                        <ul className="product-tags sidebar-list list-unstyled">
                            <li className="tags-item">
                                <a href="">Nike</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Adidas</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Puma</a>
                            </li>
                            <li className="tags-item">
                                <a href="">Spike</a>
                            </li>
                        </ul>
                    </div>
                    <div className="widgets widget-price-filter">
                        <h5 className="widget-title">Filter By Price</h5>
                        <ul className="product-tags sidebar-list list-unstyled">
                            <li className="tags-item">
                                <a href="">Less than $10</a>
                            </li>
                            <li className="tags-item">
                                <a href="">$10- $20</a>
                            </li>
                            <li className="tags-item">
                                <a href="">$20- $30</a>
                            </li>
                            <li className="tags-item">
                                <a href="">$30- $40</a>
                            </li>
                            <li className="tags-item">
                                <a href="">$40- $50</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export { AsideShop }