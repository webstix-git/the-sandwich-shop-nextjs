import { MenuPageWhiteSurface } from "@/components/menu/MenuPageWhiteSurface";

export default function OurMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="menu-page-soft-pink">
      <MenuPageWhiteSurface />
      {children}
    </div>
  );
}
