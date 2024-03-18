import { LoginForm } from "./LoginForm";
import { LoginAnimation } from "./LoginAnimation";
import { Logo } from "../Logo";
import { Anchor } from "../navigation/Link";
{
  /* TODO apply path */
}
export const LoginUI = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex items-strech  w-[80vw]">
        <div className="md:block hidden">
          <LoginAnimation />
        </div>
        <div className="grid place-items-center gap-2 w-full py-3 px-8 border max-w-[700px]">
          <Logo width={200} />
          <LoginForm />

          <Anchor href="/" className="text-sm font-semibold">
            Forgot password?
          </Anchor>

          <p>
            Don&apos;t have an account?
            <Anchor href="/" className="font-semibold ml-1">
              Sign up
            </Anchor>
          </p>
        </div>
      </div>
    </div>
  );
};
