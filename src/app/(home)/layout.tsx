import { Footer } from "@/components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
