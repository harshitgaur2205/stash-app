    import { IndexProductItem } from './IndexProductItem';
    import productDetails from './IndexShopDetails';

function IndexShopComp() {
    return (
        <>
            <section id="selling-products" className="product-store bg-light-grey padding-large">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Best selling products</h2>
                    </div>

                    <div className="tab-content">
                        <div id="all" data-tab-content className="active">
                            <div className="row d-flex flex-wrap">
                            {productDetails.map((product, index) => (
                                    <IndexProductItem key={index} prodObj={product} /> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {IndexShopComp};