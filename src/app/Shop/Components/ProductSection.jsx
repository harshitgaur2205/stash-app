import { ProductItem } from "./ProductItem"
import productDetails from './productDetails';
function ProductSection() {
    return (
        <>
            <section id="selling-products" className="col-md-9 product-store">
                <div className="container">
                    <ul className="tabs list-unstyled">
                        <li data-tab-target="#all" className="active tab">All</li>
                        <li data-tab-target="#shoes" className="tab">Sensors</li>
                        <li data-tab-target="#tshirts" className="tab">Bottles</li>
                        <li data-tab-target="#hoodie" className="tab">Baskets</li>
                        <li data-tab-target="#outer" className="tab">Closet Organisers</li>
                        <li data-tab-target="#jackets" className="tab">Accessroies</li>
                        <li data-tab-target="#accessories" className="tab">Stationaries</li>
                    </ul>

                    <div className="tab-content">
                        <div id="all" data-tab-content className="active">
                            <div className="row d-flex flex-wrap"> {/*Product Cards here - modify productDetails.js when using api/external data*/}
                                {productDetails.map((product, index) => (
                                    <ProductItem key={index} prodObj={product} /> 
                                ))}
                            </div>
                        </div>
                    </div>

                    <nav className="pagination d-flex justify-content-center flex-column align-items-center" role="navigation">
                        <a href="#" className="pagination-arrow">
                            <i className="icon icon-arrow-left"></i>
                        </a>
                        <span className="page-numbers current">1</span>
                        <a className="page-numbers" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a href="#" className="pagination-arrow">
                            <i className="icon icon-arrow-right"></i>
                        </a>
                    </nav>

                </div>
            </section>
        </>
    )
}

export { ProductSection }