import React from "react";
import { MainMenu } from "../../components/MainMenu";
export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen lg:flex-row-reverse">
      <div className="w-full h-full">{children}</div>
      <MainMenu />
    </div>
  );
}
