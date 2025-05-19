import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FarahGPT",
  description: "Islamic Mentorship Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={"font-notosans antialiased"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
