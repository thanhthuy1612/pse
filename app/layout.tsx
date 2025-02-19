import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import StoreProvider from "@/components/redux/StoreProvider";
import "./globals.css";
import { baseOpenGraph } from "@/app/shared-metadata";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PSE INPHOTO CO., LTD",
    default: "PSE INPHOTO CO., LTD",
  },
  description: "",
  openGraph: baseOpenGraph,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
