import "@/styles/globals.css";

/*---Nifty Css---*/
import "../public/assets/css/nifty.css";

/*---Bootstrap Css---*/
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/bootstrap.css";

import RootLayout from "@/app/layout";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
