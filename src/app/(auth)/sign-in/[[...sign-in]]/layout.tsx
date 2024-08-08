import { SigninAnimation } from "@/components/auth/signin/SigninAnimation";
import { Logo } from "@/components/logo/Logo";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen grid-flow-col gap-0">
      <div className="hidden md:block">
        <SigninAnimation />
      </div>


      {children}

    </div>
  );
}
