import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollStickyTopBar } from "@/components/ScrollStickyTopBar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollStickyTopBar>
        <Header />
      </ScrollStickyTopBar>
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
