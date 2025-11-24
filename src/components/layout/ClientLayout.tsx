"use client";

import { usePathname } from "next/navigation";
import AppLayout from "./AppLayout";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Pakai Layout - sesuaikan dengan path di Sidebar
    const useLayoutPaths = [
        "/dashboard",
        "/dashboard/siswa",  // ✅ Sesuaikan dengan Sidebar
        "/dashboard/kelas",
        "/dashboard/pelanggaran"
    ];

    // Path tanpa layout
    const noLayoutPaths = [
        "/auth/login",
        "/auth/register",
        "/"
    ];

    if (noLayoutPaths.includes(pathname)) {
        return <>{children}</>
    }

    const useAppLayout = useLayoutPaths.some((p) => pathname.startsWith(p));

    if (useAppLayout) {
        return <AppLayout>{children}</AppLayout>
    }    

    return <>{children}</>;
}