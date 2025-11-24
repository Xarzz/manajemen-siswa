'use client';

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
    const pathname = usePathname();
    const router = useRouter();
    
    // ✅ Sinkronisasi title dengan menu items di Sidebar
    const menuMap: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/dashboard/siswa": "Manajemen Siswa", // ✅ Diubah dari "/dashboard/students"
        "/dashboard/kelas": "Manajemen Kelas", 
        "/dashboard/pelanggaran": "Manajemen Pelanggaran"
    };

    // ✅ Cari title yang sesuai dengan pathname
    const getTitle = () => {
        // Cek exact match terlebih dahulu
        if (menuMap[pathname]) {
            return menuMap[pathname];
        }
        
        // Cek untuk nested routes (misal: /dashboard/siswa/[id])
        for (const [key, value] of Object.entries(menuMap)) {
            if (pathname.startsWith(key) && key !== '/dashboard') {
                return value;
            }
        }
        
        return "SMK Negeri 1 Malang";
    };

    const title = getTitle();

    const handleLogout = () => {
        router.push("/auth/login");
    }

    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-15.5 items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden"
                      onClick={onMenuClick}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center space-x-2">
                        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatar.png" alt="User Avatar" />
                                    <AvatarFallback>BH</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Bagus Hidayat
                                    </p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        bagushidayat@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                className="text-red-600 focus:text-red-600 focus:bg-red-50"
                                onClick={handleLogout}
                            >
                                <LogOut className="mr-2 h-4 w-4"/>
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}