import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin-ext", "latin"]
});

export const metadata: Metadata = {
  title: "Wikilala",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "0027ff",
  description: ""
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#0027ff"
        />
        <meta name="msapplication-TileColor" content="#0027ff" />
        <meta name="theme-color" content="#0027ff" />
      </head>

      <body className={poppins.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer className="footer mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
