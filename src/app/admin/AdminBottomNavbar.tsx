'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  CalendarDays,
  ImageIcon,
  Bell,
  FileText,
  Pencil,
  FolderOpen,
  MessageSquare,
  Users,
  Building2,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react';

/* ─── Types ────────────────────────────────────────────────────────── */

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface NavGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  items: NavItem[];
}

/* ─── Navigation Config ────────────────────────────────────────────── */

function getAdminNavGroups(isStaff: boolean, isSuperAdmin: boolean): NavGroup[] {
  if (isStaff) {
    return [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        items: [{ href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        icon: ImageIcon,
        items: [{ href: '/admin/gallery', label: 'Gallery', icon: ImageIcon }],
      },
      {
        id: 'faculty',
        label: 'Senior Learners',
        icon: Users,
        items: [{ href: '/admin/faculty', label: 'Senior Learners', icon: Users }],
      },
      {
        id: 'blog',
        label: 'Blog',
        icon: FileText,
        items: [
          { href: '/admin/blogs', label: 'All Posts', icon: Pencil },
          { href: '/admin/blogs/categories', label: 'Categories', icon: FolderOpen },
          { href: '/admin/blogs/comments', label: 'Comments', icon: MessageSquare },
        ],
      },
    ];
  }

  // Admin / Super Admin
  const groups: NavGroup[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      items: [{ href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
    },
    {
      id: 'content',
      label: 'Content',
      icon: CalendarDays,
      items: [
        { href: '/admin/events', label: 'Events', icon: CalendarDays },
        { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
        { href: '/admin/notices', label: 'Notices', icon: Bell },
      ],
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: FileText,
      items: [
        { href: '/admin/blogs', label: 'All Posts', icon: Pencil },
        { href: '/admin/blogs/categories', label: 'Categories', icon: FolderOpen },
        { href: '/admin/blogs/comments', label: 'Comments', icon: MessageSquare },
      ],
    },
    {
      id: 'people',
      label: 'People',
      icon: Users,
      items: [{ href: '/admin/faculty', label: 'Faculty', icon: Users }],
    },
  ];

  if (isSuperAdmin) {
    groups.push({
      id: 'admin',
      label: 'Admin',
      icon: Building2,
      items: [{ href: '/admin/colleges', label: 'Colleges', icon: Building2 }],
    });
  }

  return groups;
}

/* ─── Sub-components ───────────────────────────────────────────────── */

function AdminNavItem({
  icon: Icon,
  label,
  isActive,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative flex flex-col items-center justify-center px-2 py-2 min-w-[56px] flex-1',
        'transition-colors duration-150',
        isActive ? 'text-[#0b6d41]' : 'text-gray-500'
      )}
      whileTap={{ scale: 0.92 }}
    >
      <motion.div
        animate={{ scale: isActive ? 1.15 : 1, y: isActive ? -2 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 1.8} />
      </motion.div>
      <span
        className={cn(
          'text-[10px] mt-0.5 truncate max-w-full',
          isActive ? 'font-semibold' : 'font-medium opacity-70'
        )}
      >
        {label}
      </span>
      {isActive && (
        <motion.div
          layoutId="adminBottomNavIndicator"
          className="absolute bottom-0 h-0.5 w-8 rounded-full bg-[#0b6d41]"
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

function AdminSubmenu({
  items,
  isOpen,
  onItemClick,
}: {
  items: NavItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: 'spring', stiffness: 500, damping: 35 },
            opacity: { duration: 0.12 },
          }}
          className="overflow-hidden border-t border-gray-200 bg-white"
        >
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              {items.map((item, i) => {
                const isActive =
                  item.href === '/admin/blogs'
                    ? pathname === '/admin/blogs'
                    : pathname === item.href || pathname.startsWith(item.href + '/');
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25, delay: i * 0.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onItemClick(item.href)}
                    className={cn(
                      'flex flex-col items-center justify-center p-3 rounded-xl transition-colors',
                      isActive
                        ? 'bg-[#0b6d41]/10 text-[#0b6d41]'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                  >
                    <Icon className="h-5 w-5 mb-1" strokeWidth={isActive ? 2.5 : 2} />
                    <span
                      className={cn(
                        'text-[10px] text-center leading-tight line-clamp-2',
                        isActive && 'font-semibold'
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Component ───────────────────────────────────────────────── */

export default function AdminBottomNavbar({
  isStaff = false,
  isSuperAdmin = false,
}: {
  isStaff?: boolean;
  isSuperAdmin?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Skip on login page
  const isLoginPage = pathname === '/admin/login';

  const allGroups = useMemo(
    () => getAdminNavGroups(isStaff, isSuperAdmin),
    [isStaff, isSuperAdmin]
  );

  // Primary groups (first 4) + More if needed
  const primaryGroups = useMemo(() => allGroups.slice(0, 4), [allGroups]);
  const moreGroups = useMemo(() => allGroups.slice(4), [allGroups]);

  // Find which group the current path belongs to
  const currentGroupId = useMemo(() => {
    for (const group of allGroups) {
      for (const item of group.items) {
        if (pathname === item.href || pathname.startsWith(item.href + '/')) {
          return group.id;
        }
      }
    }
    return 'dashboard';
  }, [pathname, allGroups]);

  // Close submenu on route change
  useEffect(() => {
    setSubmenuOpen(false);
  }, [pathname]);

  // Close submenu on outside click
  useEffect(() => {
    if (!submenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-admin-bottom-nav]')) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [submenuOpen]);

  const handleNavClick = useCallback(
    (group: NavGroup) => {
      // Single-item group: navigate directly
      if (group.items.length === 1) {
        router.push(group.items[0].href);
        setSubmenuOpen(false);
        return;
      }

      // Multi-item group: toggle submenu
      if (submenuOpen && activeGroupId === group.id) {
        setSubmenuOpen(false);
      } else {
        setActiveGroupId(group.id);
        setSubmenuOpen(true);
      }
    },
    [submenuOpen, activeGroupId, router]
  );

  const handleSubmenuClick = useCallback(
    (href: string) => {
      router.push(href);
      setSubmenuOpen(false);
    },
    [router]
  );

  // Don't render on login page
  if (isLoginPage) return null;

  const activeGroup = allGroups.find((g) => g.id === activeGroupId);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {submenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[75] lg:hidden"
            onClick={() => setSubmenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Bottom Navbar */}
      <nav
        data-admin-bottom-nav
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[80] lg:hidden',
          'bg-white border-t border-gray-200',
          'shadow-[0_-4px_20px_rgba(0,0,0,0.08)]'
        )}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Submenu */}
        {activeGroup && activeGroup.items.length > 1 && (
          <AdminSubmenu
            items={activeGroup.items}
            isOpen={submenuOpen}
            onItemClick={handleSubmenuClick}
          />
        )}

        {/* Nav items */}
        <div className="flex items-center justify-around">
          {primaryGroups.map((group) => (
            <AdminNavItem
              key={group.id}
              icon={group.icon}
              label={group.label}
              isActive={currentGroupId === group.id && !submenuOpen || (submenuOpen && activeGroupId === group.id)}
              onClick={() => handleNavClick(group)}
            />
          ))}

          {moreGroups.length > 0 && (
            <AdminNavItem
              icon={MoreHorizontal}
              label="More"
              isActive={moreGroups.some((g) =>
                g.items.some((item) => pathname === item.href || pathname.startsWith(item.href + '/'))
              )}
              onClick={() => {
                // For now, navigate to the first item in the more group
                if (moreGroups.length === 1 && moreGroups[0].items.length === 1) {
                  router.push(moreGroups[0].items[0].href);
                }
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
}
