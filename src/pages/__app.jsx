import RootLayout from "@/components/layout/layout";
import "@/styles/globals.css";

/*---Nifty Css---*/
// import "../public/assets/css/nifty.css";
// import "../../public/assets/js/nifty.js";

/*---Bootstrap Css---*/
// import "bootstrap/dist/css/bootstrap.css";
// import "../public/assets/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
