import { Outlet } from "react-router";
//import Header from "./components/Header";
import React from "react";
import Header from "../ui/Header.tsx";

export default function Layout() {
  return (
    <div className="min-h-full">
      <Header />
      <Outlet/>
    </div>
  );
}