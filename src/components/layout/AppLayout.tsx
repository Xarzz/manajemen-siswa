"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();

    if(pathname === '/auth/register' || pathname === '/auth/login') {
        return children;
    }

    return (
        <div className="min-h-screen bg-background">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="lg:pl-64">
                <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
                    <main className="p-6">
                        {children}
                    </main>
            </div>
        </div>
    )
}
