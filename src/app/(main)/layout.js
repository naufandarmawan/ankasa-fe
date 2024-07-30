import Navbar from "@/components/module/Navbar";
import "../globals.css";
import Footer from "@/components/module/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
