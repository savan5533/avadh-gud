import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/Whatsapp";

export const metadata = {
  title: "Avadh Desi Gud - 100% Natural Jaggery from Sasan Gir",
  description: "Discover premium-quality, 100% natural jaggery made using traditional methods. Avadh Desi Gud has been trusted since 1990 for authentic, chemical-free jaggery.",
  keywords: "jaggery, natural jaggery, chemical-free jaggery, Sasan Gir, Avadh Desi Gud",
  author: "Avadh Desi Gud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href="https://avadhdesigud.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://avadhdesigud.com/images/Logo/avadh-desi-gud-logo.png"
        />
        <meta property="og:url" content="https://avadhdesigud.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://avadhdesigud.com/images/Logo/avadh-desi-gud-logo.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Avadh Desi Gud",
              url: "https://avadhdesigud.com",
              logo: "https://avadhdesigud.com/images/Logo/avadh-desi-gud-logo.png",
              description: "High-quality jaggery made using traditional methods since 1990.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9099947166",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppButton />
        {children || <p>Loading content...</p>}
        <Footer />
      </body>
    </html>
  );
}
