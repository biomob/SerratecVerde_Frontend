import "./globals.css";
import type { Metadata } from "next";
import CombinedHeader from "@/components/header/CombinedHeader";
import Providers from "@/components/layout/providers";
import { Footer } from "@/components/footer/footer";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";

const APP_NAME = "Serratec Verde";
const APP_DEFAULT_TITLE = "Serratec Verde - Coleta Seletiva, Sustentabilidade e Gincana T2M";
const APP_TITLE_TEMPLATE = "%s | Serratec Verde";
const APP_DESCRIPTION =
  "Engaje sua empresa e colaboradores na coleta seletiva, sustentabilidade e gincana T2M no polo Serratec. Juntos por um futuro mais verde!";
const APP_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
const APP_LOGO = "/img/LOGO_INSTITUTO_BRANCA.png";
const APP_LOGO_OG = `${APP_URL}/img/LOGO_INSTITUTO_BRANCA.png`;

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: APP_LOGO },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: APP_URL,
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [
      {
        url: APP_LOGO_OG,
        width: 800,
        height: 800,
        alt: "Logo Serratec Verde",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@serratecverde",
    creator: "@serratecverde",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [APP_LOGO_OG],
  },
  alternates: {
    canonical: APP_URL,
    languages: {
      "pt-BR": `${APP_URL}/pt`,
      en: `${APP_URL}/en`,
    },
  },
  other: {
    "theme-color": "#0b8947",
    "msapplication-TileColor": "#0b8947",
    "og:image": APP_LOGO_OG,
    "og:image:width": "800",
    "og:image:height": "800",
    "og:image:type": "image/png",
    "og:image:alt": "Logo Serratec Verde",
    "whatsapp:image": APP_LOGO_OG,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const resolvedParams = await params;
  const messages = await getMessages(resolvedParams.locale as any);

  return (
    <html className={`${GeistSans.variable}`} suppressHydrationWarning lang="pt-BR">
      {/* <Script defer data-domain="biomob.org" src="https://plausible.biomob.app/js/script.js" /> */}
      <body className={""}>
        <Providers messages={messages} locale={resolvedParams.locale}>
          <CombinedHeader locale={resolvedParams.locale} />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
