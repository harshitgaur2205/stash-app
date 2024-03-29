import Script from "next/script";
import "./globals.css";
import '../shop/CSS/normalize.css';
import '../shop/CSS/icomoon.css';
import '../shop/CSS/vendor.css';
import '../shop/CSS/globals.css';
import '../shop/CSS/styleMain.css';
import '../shop/CSS/searchPopup.css';
import '../shop/CSS/styleBootstrap.css';
import '../shop/CSS/header.css';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <Script src="/js/jquery-1.11.0.min.js" />
        <Script src="/js/plugins.js" />
        <Script src="/js/script.js" />
      </body>

    </html>
  );
}
