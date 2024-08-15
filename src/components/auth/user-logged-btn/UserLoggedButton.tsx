import { LoadingAuth } from "@/components/auth/LoadingAuth";
import { UserButton } from "@clerk/nextjs";

export const UserLoggedButton = () => {
  return (
    <div className="w-fit h-fit">
      <LoadingAuth>
        <UserButton />
      </LoadingAuth>
    </div>
  );
};
