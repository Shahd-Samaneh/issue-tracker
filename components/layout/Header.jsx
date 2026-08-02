import { Bell, Menu, User } from "lucide-react";

export default function Header({ onMenuClick }) {
    
    return (
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
            <div className="flex items-center gap-3">
                <button  onClick={onMenuClick} className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden">
                    <Menu size={22} />
                </button>

                <div>
                    <h1 className="text-lg font-bold text-gray-900">
                        Issue Tracker
                    </h1>

                    <p className="text-sm text-gray-500">
                        Manage your project issues
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    <User size={20} />
                </div>
                <div className="hidden sm:block">
                    <p className="text-sm font-semibold">Shahd</p>
                    <p className="text-xs text-gray-500">Developer</p>
                </div>
            </div>
        </header>
    );
}