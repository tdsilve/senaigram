import { SignIn } from "@clerk/nextjs";
import { LoadingAuth } from "../../LoadingAuth";

export const SignInForm = () => {
  return (
    <LoadingAuth>
      <SignIn />
    </LoadingAuth>
  );
};
