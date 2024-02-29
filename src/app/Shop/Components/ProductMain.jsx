import { ProductSection } from './ProductSection';
import { AsideShop } from './AsideShop';

function ProductMain() {
    return (
        <>
            <div className="shopify-grid padding-large">
                <div className="container">
                    <div className="row">
                        <ProductSection />
                        <AsideShop />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductMain;