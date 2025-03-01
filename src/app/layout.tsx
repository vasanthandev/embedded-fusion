import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const roboto = Roboto({
    variable:"--font-sans",
    subsets:["latin"],
    weight:["400"]
})

const poppins = Poppins({
    subsets:["latin"],
    weight:["400","500","600","700","800","900"],
    variable:"--font-serif",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${poppins.variable} font-sans antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "system", "blue"]}
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
