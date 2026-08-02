"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    CirclePlus,
} from "lucide-react";
const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Issues",
        href: "/issues",
        icon: FileText,
    },
    {
        title: "Create Issue",
        href: "/issues/create",
        icon: CirclePlus,
    },
];
export default function Sidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    return <>
        {isOpen && (<div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={onClose} />)}
        <aside
            className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-200 bg-white p-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
                Navigation
            </h2>
            <nav className="space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${isActive
                            ? "bg-blue-100 text-blue-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                            }`} key={item.href} href={item.href}>
                            <Icon size={20} />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    </>
    
}