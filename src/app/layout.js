import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
 
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});
 
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
 
export const metadata = {
  title: "Kineduca SpA | Kinesiología Domiciliaria",
  description: "Kinesiología Domiciliaria.",
  icons: {
    icon: "/favicon.ico",
  },
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
 