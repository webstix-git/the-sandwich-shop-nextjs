import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AnnouncementBar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
