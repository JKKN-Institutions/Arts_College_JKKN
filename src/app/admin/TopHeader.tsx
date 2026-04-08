'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, PanelLeft, Sun, Moon, LogOut } from 'lucide-react';
import { useAdminPanel } from './AdminPanelContext';
import { createClient } from '@/lib/supabase/client';

interface TopHeaderProps {
  userEmail: string;
  isSuperAdmin?: boolean;
}

function getBreadcrumb(pathname: string): string {
  const segments = pathname.replace('/admin/', '').replace('/admin', '').split('/').filter(Boolean);
  if (segments.length === 0) return 'Dashboard';

  const labels: Record<string, string> = {
    dashboard: 'Dashboard',
    events: 'Events',
    blogs: 'Blog',
    gallery: 'Gallery',
    notices: 'Notices',
    faculty: 'Faculty',
    colleges: 'Colleges',
  };

  const first = labels[segments[0]] || segments[0];

  if (segments.length > 1) {
    if (segments[1] === 'new') return `${first} / New`;
    if (segments[1] === 'categories') return `${first} / Categories`;
    if (segments[1] === 'comments') return `${first} / Comments`;
    if (segments[1] === 'tags') return `${first} / Tags`;
    return `${first} / Edit`;
  }

  return first;
}

export default function TopHeader({ userEmail, isSuperAdmin }: TopHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { toggleSidebar, theme, toggleTheme } = useAdminPanel();
  const breadcrumb = getBreadcrumb(pathname);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initials = userEmail
    ? userEmail.split('@')[0].split(/[._]/).map(s => s[0]?.toUpperCase() || '').join('').slice(0, 2)
    : 'AD';
  const displayName = userEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const role = isSuperAdmin ? 'Super Admin' : 'Admin';
  const isDark = theme === 'dark';

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [profileOpen]);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut({ scope: 'local' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <header className={`sticky top-0 z-20 border-b transition-colors duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center justify-between h-14 px-4 sm:px-6">
        {/* Left — Sidebar toggle + Breadcrumb */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className={`hidden lg:flex w-9 h-9 rounded-xl items-center justify-center transition-colors ${
              isDark
                ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
            title="Toggle sidebar"
          >
            <PanelLeft className="w-[18px] h-[18px]" />
          </button>
          {/* No placeholder on mobile — bottom navbar handles navigation */}
          <nav className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
            {breadcrumb}
          </nav>
        </div>

        {/* Right — Theme + Bell + Profile */}
        <div className="flex items-center gap-1.5">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              isDark
                ? 'text-yellow-400 hover:bg-gray-700'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          {/* Notification bell */}
          <button className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            isDark
              ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
              : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
          }`}>
            <Bell className="w-[18px] h-[18px]" />
          </button>

          {/* Divider */}
          <div className={`w-px h-6 mx-1 hidden sm:block ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`} />

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(o => !o)}
              className={`flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-xl transition-colors ${
                profileOpen
                  ? isDark ? 'bg-gray-700' : 'bg-gray-50'
                  : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#0b6d41] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{initials}</span>
              </div>
              <div className="hidden sm:block text-left">
                <p className={`text-sm font-medium leading-tight ${isDark ? 'text-gray-100' : 'text-[#002309]'}`}>
                  {displayName}
                </p>
                <p className="text-[10px] text-[#0b6d41] font-medium">{role}</p>
              </div>
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className={`absolute right-0 top-full mt-2 w-56 rounded-xl shadow-xl border overflow-hidden ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                {/* User info */}
                <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-[#002309]'}`}>
                    {displayName}
                  </p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {role}
                  </p>
                  <p className={`text-xs mt-0.5 truncate ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {userEmail}
                  </p>
                </div>

                {/* Sign out */}
                <div className="p-1.5">
                  <button
                    onClick={handleLogout}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isDark
                        ? 'text-red-400 hover:bg-red-500/10'
                        : 'text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
