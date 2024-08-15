import { SignUp } from "@clerk/nextjs";
import { LoadingAuth } from "../../LoadingAuth";

export const SignUpForm = () => {
  return (
    <LoadingAuth>
      <SignUp />
    </LoadingAuth>
  );
};
