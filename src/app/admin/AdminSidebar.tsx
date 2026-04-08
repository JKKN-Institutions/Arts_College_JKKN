'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { siteConfig } from '@/lib/site-config';
import { useAdminPanel } from './AdminPanelContext';
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Bell,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  CalendarDays,
  Users,
  Pencil,
  FolderOpen,
  MessageSquare,
  Building2,
  ChevronsUpDown,
  Check,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Navigation config                                                  */
/* ------------------------------------------------------------------ */

const mainNavLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

const contentLinks = [
  { href: '/admin/events', label: 'Events', icon: CalendarDays },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/notices', label: 'Notices', icon: Bell },
];

const blogSubLinks = [
  { href: '/admin/blogs', label: 'All Posts', icon: Pencil },
  { href: '/admin/blogs/categories', label: 'Categories', icon: FolderOpen },
  { href: '/admin/blogs/comments', label: 'Comments', icon: MessageSquare },
];

const peopleLinks = [
  { href: '/admin/faculty', label: 'Faculty', icon: Users },
];

const staffLinks = [
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/faculty', label: 'Faculty', icon: Users },
];

interface College { id: string; name: string }

interface AdminSidebarProps {
  userEmail: string;
  isSuperAdmin?: boolean;
  isStaff?: boolean;
  canSwitchCollege?: boolean;
  colleges?: College[];
  currentCollegeId?: string;
}

export default function AdminSidebar({
  userEmail,
  isSuperAdmin = false,
  isStaff = false,
  canSwitchCollege = false,
  colleges = [],
  currentCollegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education',
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarCollapsed, theme } = useAdminPanel();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collegeSwitcherOpen, setCollegeSwitcherOpen] = useState(false);
  const [switching, setSwitching] = useState(false);
  const isBlogActive = pathname === '/admin/blogs' || pathname.startsWith('/admin/blogs/');
  const [blogOpen, setBlogOpen] = useState(isBlogActive);

  const currentCollege = colleges.find((c) => c.id === currentCollegeId);
  const currentCollegeName = currentCollege?.name ?? currentCollegeId;
  const collapsed = sidebarCollapsed;
  const isDark = theme === 'dark';

  async function switchCollege(collegeId: string) {
    if (collegeId === currentCollegeId || switching) return;
    setSwitching(true);
    setCollegeSwitcherOpen(false);
    try {
      await fetch('/api/admin/switch-college', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ college_id: collegeId }),
      });
      router.refresh();
    } finally {
      setSwitching(false);
    }
  }

  function isActive(href: string) {
    if (href === '/admin/dashboard') return pathname === '/admin/dashboard';
    return pathname === href || pathname.startsWith(href + '/');
  }

  /* ---------------------------------------------------------------- */
  /*  Nav link                                                         */
  /* ---------------------------------------------------------------- */

  function NavLink({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
    const active = isActive(href);
    return (
      <Link
        href={href}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center gap-3 rounded-xl text-[13px] font-medium transition-all duration-200 ${
          collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2.5'
        } ${
          active
            ? 'bg-[#0b6d41] text-white'
            : isDark
              ? 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
        title={collapsed ? label : undefined}
      >
        <Icon className="w-[18px] h-[18px] flex-shrink-0" />
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Section label                                                    */
  /* ---------------------------------------------------------------- */

  function SectionLabel({ label }: { label: string }) {
    if (collapsed) {
      return <div className="my-3 mx-2 h-px bg-gray-200 dark:bg-gray-700" />;
    }
    return (
      <p className={`px-3 pt-5 pb-1.5 text-[10px] font-semibold tracking-[0.08em] uppercase ${
        isDark ? 'text-gray-500' : 'text-gray-400'
      }`}>
        {label}
      </p>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Sidebar bg/border classes                                        */
  /* ---------------------------------------------------------------- */

  const sidebarBg = isDark
    ? 'bg-gray-800 border-r border-gray-700'
    : 'bg-white border-r border-gray-200';

  /* ---------------------------------------------------------------- */
  /*  Sidebar content                                                  */
  /* ---------------------------------------------------------------- */

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => {
    const isCollapsed = isMobile ? false : collapsed;

    return (
      <div className="flex flex-col h-full">
        {/* Logo + Identity */}
        <div className={`py-5 ${isCollapsed ? 'px-3 flex justify-center' : 'px-5'}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-10 h-10 bg-[#0b6d41] rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <p className={`font-semibold text-sm leading-tight truncate ${isDark ? 'text-gray-100' : 'text-[#002309]'}`}>
                  {siteConfig.shortName}
                </p>
                <p className="text-[#0b6d41] text-[11px] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b6d41] inline-block" />
                  {isSuperAdmin ? 'Super Admin' : isStaff ? 'Staff' : 'Admin Panel'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* College Switcher — hidden when collapsed */}
        {!isCollapsed && canSwitchCollege && colleges.length > 0 && (
          <div className="px-3 pb-3 relative">
            <button
              onClick={() => setCollegeSwitcherOpen((o) => !o)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all text-sm border ${
                isDark
                  ? 'bg-gray-700/50 hover:bg-gray-700 text-gray-300 border-gray-600'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
              }`}
              disabled={switching}
            >
              <Building2 size={15} className="flex-shrink-0 text-gray-400" />
              <span className="flex-1 text-left truncate text-xs font-medium">{currentCollegeName}</span>
              <ChevronsUpDown size={14} className="flex-shrink-0 text-gray-400" />
            </button>
            {collegeSwitcherOpen && (
              <div className={`absolute left-3 right-3 top-full mt-1 border rounded-xl shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto ${
                isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                {colleges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => switchCollege(c.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs transition-all text-left ${
                      isDark
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-100'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Check size={13} className={c.id === currentCollegeId ? 'text-[#0b6d41]' : 'invisible'} />
                    <span className="truncate">{c.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <nav className={`flex-1 overflow-y-auto scrollbar-none ${isCollapsed ? 'px-2' : 'px-3'}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {isStaff ? (
            <div className="space-y-0.5">
              <NavLink href="/admin/dashboard" label="Dashboard" icon={LayoutDashboard} />
              {staffLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}

              {/* Blog expandable */}
              {isCollapsed ? (
                <NavLink href="/admin/blogs" label="Blog" icon={FileText} />
              ) : (
                <div>
                  <button
                    onClick={() => setBlogOpen((o) => !o)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                      isBlogActive
                        ? isDark ? 'bg-gray-700/50 text-gray-200' : 'bg-[#0b6d41]/10 text-[#0b6d41]'
                        : isDark ? 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <FileText size={18} className="flex-shrink-0" />
                    <span>Blog</span>
                    {blogOpen ? (
                      <ChevronDown className="ml-auto w-3.5 h-3.5 text-gray-400" />
                    ) : (
                      <ChevronRight className="ml-auto w-3.5 h-3.5 text-gray-400" />
                    )}
                  </button>
                  {blogOpen && (
                    <div className={`mt-0.5 ml-4 pl-3 border-l space-y-0.5 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      {blogSubLinks.map(({ href, label, icon: Icon }) => {
                        const active =
                          href === '/admin/blogs'
                            ? pathname === '/admin/blogs'
                            : pathname === href || pathname.startsWith(href + '/');
                        return (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                              active
                                ? 'bg-[#0b6d41] text-white'
                                : isDark
                                  ? 'text-gray-500 hover:bg-gray-700/50 hover:text-gray-200'
                                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                          >
                            <Icon size={15} className="flex-shrink-0" />
                            <span>{label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="space-y-0.5">
                {mainNavLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>

              <SectionLabel label="Content" />
              <div className="space-y-0.5">
                {contentLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}

                {/* Blog expandable */}
                {isCollapsed ? (
                  /* Collapsed: just show blog icon linking to /admin/blogs */
                  <NavLink href="/admin/blogs" label="Blog" icon={FileText} />
                ) : (
                  <div>
                    <button
                      onClick={() => setBlogOpen((o) => !o)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                        isBlogActive
                          ? isDark ? 'bg-gray-700/50 text-gray-200' : 'bg-[#0b6d41]/10 text-[#0b6d41]'
                          : isDark ? 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <FileText size={18} className="flex-shrink-0" />
                      <span>Blog</span>
                      {blogOpen ? (
                        <ChevronDown className="ml-auto w-3.5 h-3.5 text-gray-400" />
                      ) : (
                        <ChevronRight className="ml-auto w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                    {blogOpen && (
                      <div className={`mt-0.5 ml-4 pl-3 border-l space-y-0.5 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        {blogSubLinks.map(({ href, label, icon: Icon }) => {
                          const active =
                            href === '/admin/blogs'
                              ? pathname === '/admin/blogs'
                              : pathname === href || pathname.startsWith(href + '/');
                          return (
                            <Link
                              key={href}
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                                active
                                  ? 'bg-[#0b6d41] text-white'
                                  : isDark
                                    ? 'text-gray-500 hover:bg-gray-700/50 hover:text-gray-200'
                                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              <Icon size={15} className="flex-shrink-0" />
                              <span>{label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <SectionLabel label="People" />
              <div className="space-y-0.5">
                {peopleLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>

              {isSuperAdmin && (
                <>
                  <SectionLabel label="Admin" />
                  <div className="space-y-0.5">
                    <NavLink href="/admin/colleges" label="Colleges" icon={Building2} />
                  </div>
                </>
              )}
            </>
          )}
        </nav>

        {/* Footer — Version only */}
        <div className={`px-3 pb-4 pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
          {!isCollapsed && (
            <p className={`px-3 text-[10px] uppercase tracking-wider ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
              {siteConfig.shortName} · CMS v2.0
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border ${
          isDark
            ? 'bg-gray-800 border-gray-700 text-gray-300'
            : 'bg-white border-gray-200 text-gray-700'
        }`}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar — always full width, never collapsed */}
      <div
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-[260px] z-40 transition-transform duration-300 shadow-xl ${sidebarBg} ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent isMobile />
      </div>

      {/* Desktop sidebar — collapsible */}
      <div className={`hidden lg:flex fixed left-0 top-0 bottom-0 flex-col z-30 transition-all duration-300 ${sidebarBg} ${
        collapsed ? 'w-[72px]' : 'w-[260px]'
      }`}>
        <SidebarContent />
      </div>
    </>
  );
}
