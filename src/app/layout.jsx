import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

/*---Nifty Css---*/
// import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/nifty.css";
import "../../public/assets/css/bootstrap.css";

/*---Bootstrap Css---*/
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />
      <Sidebar />
      <body>{children}</body>
      <script src="/resource/js/bootstrap.js"></script>
      <script src="/public/assets/js/nifty.js"></script>
    </main>
  );
}
