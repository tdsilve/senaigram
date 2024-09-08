import { Header } from "@/components/main//header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex block">
      <Header />
      <div className="mx-auto w-[700px]">{children}</div>
    </div>
  );
}
