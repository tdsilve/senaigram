import { SigninForm } from "@/components/auth/signin/form/SigninForm";
import { Logo } from "@/components/logo/Logo";

export default function Signin() {
  return <div className="flex justify-center flex-col">

    <Logo width={200} height={200} className="mx-auto" />


    <SigninForm />
  </div>;
}
