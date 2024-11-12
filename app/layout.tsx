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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags for social media sharing */}
        <meta property="og:title" content="Avadh Desi Gud - Natural Jaggery" />
        <meta property="og:description" content="Pure and authentic jaggery with a rich flavor, made with traditional wood-fired methods in Sasan Gir." />
        <meta property="og:image" content="/images/Logo/avadh-desi-gud-logo.png" />
        <meta property="og:url" content="https://avadhdesigud.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avadh Desi Gud - Premium Natural Jaggery" />
        <meta name="twitter:description" content="Pure and authentic jaggery with a rich flavor, made with traditional wood-fired methods in Sasan Gir." />
        <meta name="twitter:image" content="/path/to/your-image.jpg" />

        {/* Structured Data (JSON-LD) for Business Information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Avadh Desi Gud",
              url: "https://avadhdesigud.com",
              logo: "/images/Logo/avadh-desi-gud-logo.png",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
