import { CenteredGridContainerWithGradient } from "@/components/container/CenteredGridContainerWithGradient";
import { SignUpAnimation } from "@/components/auth/signup/SignUpAnimation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CenteredGridContainerWithGradient>
      <div className="w-full h-full hidden md:flex items-center">
        <SignUpAnimation />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </CenteredGridContainerWithGradient>
  );
}
