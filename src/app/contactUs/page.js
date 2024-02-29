import Image from "next/image";
import { Main, Map, Information, Footer } from './Sections/index.js'
import Header from "../Shop/Components/Header.jsx";
import BannerShop from "../Shop/Components/BannerMain.jsx";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <BannerShop />
      <Main />
      <Map />
      <Information />
      <Footer />
    </div>
  );
}
