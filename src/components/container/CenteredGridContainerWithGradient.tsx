import React from "react";

export const CenteredGridContainerWithGradient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-gradient-to-b from-slateBlue to-primary-100">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen grid-flow-col gap-0  max-w-5xl p-8 mx-auto">
        {children}
      </div>
    </div>
  );
};
