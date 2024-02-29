import BannerShop from './Components/BannerMain';
import ProductMain from './Components/ProductMain';
import { IndexShopComp } from './Components/IndexShopComp';

function ShopPage() {
    return (
        <>
            <main>
                <BannerShop />
                <ProductMain />
                <IndexShopComp />
            </main>
        </>
    )
}

export default ShopPage;