import { SignInAnimation } from "@/components/auth/signin/SignInAnimation";
import { CenteredGridContainerWithGradient } from "@/components/container/CenteredGridContainerWithGradient";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CenteredGridContainerWithGradient>
      <div className="w-full h-full hidden md:flex items-center">
        <SignInAnimation width={500} />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </CenteredGridContainerWithGradient>
  );
}
