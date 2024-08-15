import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { CircularProgress } from "@mui/material";
export const LoadingAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkLoaded>{children}</ClerkLoaded>
      <ClerkLoading>
        <div className="grid place-items-center h-full">
          <CircularProgress />
        </div>
      </ClerkLoading>
    </>
  );
};
