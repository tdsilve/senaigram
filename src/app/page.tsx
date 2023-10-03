"use client"
import { Login } from "../components/login/Login";
import React from "react";
export default function Home() {
  const [isAuthed, setAuthed] = React.useState(true);
  return (
    <main>
      <Login />
    </main>
  );
}