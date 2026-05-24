import "./globals.css";
import "../styles/home.css";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "BuildWithDenis",
  description: "Modern web development agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}