"use client";
import { useState } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="flex flex-1 flex-col lg:ml-64">
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
            <main className=" flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}