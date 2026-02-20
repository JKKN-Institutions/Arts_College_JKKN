'use client';

import { useState, useEffect, useMemo, useCallback, useLayoutEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useBottomNav, useBottomNavHydration } from '@/hooks/use-bottom-nav';
import { getNavigationGroups } from '@/lib/navigationLinks';
import { BottomNavItem } from './bottom-nav-item';
import { BottomNavSubmenu } from './bottom-nav-submenu';
import { BottomNavHierarchicalSubmenu } from './bottom-nav-hierarchical-submenu';
import { BottomNavAccordionSubmenu } from './bottom-nav-accordion-submenu';
import { BottomNavMoreMenu } from './bottom-nav-more-menu';
import { ActivePageInfo } from './types';

export function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const hasInitialized = useRef(false);
  const hasHydrated = useBottomNavHydration();

  const {
    activeNavId,
    isExpanded,
    isMoreMenuOpen,
    isMinimized,
    activePage,
    setActiveNav,
    switchToNav,
    setExpanded,
    setMoreMenuOpen,
    setMinimized,
    setActivePage
  } = useBottomNav();

  // Get all navigation groups
  const allNavGroups = useMemo(() => {
    return getNavigationGroups(pathname);
  }, [pathname]);

  // Primary nav groups (first 4)
  const primaryNavGroups = useMemo(() => {
    return allNavGroups.slice(0, 4);
  }, [allNavGroups]);

  // Remaining groups for "More" menu
  const moreNavGroups = useMemo(() => {
    return allNavGroups.slice(4);
  }, [allNavGroups]);

  // Find the group that contains the current pathname
  const currentActiveGroup = useMemo(() => {
    // Helper function to recursively search hierarchical menus
    const searchHierarchicalMenus = (items: import('./types').HierarchicalMenuItem[]): boolean => {
      for (const item of items) {
        if (item.href && (pathname === item.href || pathname.startsWith(item.href + '/'))) {
          return true;
        }
        if (item.children && searchHierarchicalMenus(item.children)) {
          return true;
        }
      }
      return false;
    };

    // Search all groups for a matching menu item
    for (const group of allNavGroups) {
      // Check flat menus
      for (const menu of group.menus) {
        // Exact match or starts with (for nested routes)
        if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
          return group;
        }
      }

      // Check hierarchical menus
      if (group.hierarchicalMenus && searchHierarchicalMenus(group.hierarchicalMenus)) {
        return group;
      }
    }
    // Default to first group if no match found
    return allNavGroups[0] || null;
  }, [pathname, allNavGroups]);

  // Find the active page info based on current pathname
  const currentActivePage = useMemo((): ActivePageInfo | null => {
    if (!currentActiveGroup) return null;

    // Helper function to recursively search hierarchical menus
    const searchHierarchicalPage = (items: import('./types').HierarchicalMenuItem[]): ActivePageInfo | null => {
      for (const item of items) {
        if (item.href && (pathname === item.href || pathname.startsWith(item.href + '/'))) {
          return {
            href: item.href,
            label: item.label,
            icon: item.icon,
            groupLabel: currentActiveGroup.groupLabel
          };
        }
        if (item.children) {
          const found = searchHierarchicalPage(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    // Check flat menus first
    for (const menu of currentActiveGroup.menus) {
      if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
        return {
          href: menu.href,
          label: menu.label,
          icon: menu.icon,
          groupLabel: currentActiveGroup.groupLabel
        };
      }
    }

    // Check hierarchical menus
    if (currentActiveGroup.hierarchicalMenus) {
      const found = searchHierarchicalPage(currentActiveGroup.hierarchicalMenus);
      if (found) return found;
    }

    return null;
  }, [pathname, currentActiveGroup]);

  // Determine the effective active nav ID
  const effectiveActiveNavId = useMemo(() => {
    // When submenu is expanded, respect user's manual selection
    // This allows clicking different groups to show their submenus
    if (isExpanded && activeNavId) {
      return activeNavId;
    }
    // When collapsed (or no selection), use pathname-based detection
    if (currentActiveGroup) {
      return currentActiveGroup.id;
    }
    // Fallback to stored activeNavId
    return activeNavId;
  }, [currentActiveGroup, activeNavId, isExpanded]);

  // Current active group - based on effective active nav
  const activeGroup = useMemo(() => {
    if (effectiveActiveNavId) {
      const selectedGroup = allNavGroups.find((g) => g.id === effectiveActiveNavId);
      if (selectedGroup) {
        return selectedGroup;
      }
    }
    // Fallback to current pathname's group
    return currentActiveGroup || null;
  }, [effectiveActiveNavId, allNavGroups, currentActiveGroup]);

  // Current active submenu items - based on effective active nav
  const activeSubmenus = useMemo(() => {
    return activeGroup?.menus || [];
  }, [activeGroup]);

  // Check if current group uses hierarchical navigation
  const isHierarchicalNav = useMemo(() => {
    const isHier = activeGroup?.isHierarchical || false;
    if (isHier) {
      console.log('Active group is hierarchical:', activeGroup?.groupLabel, 'Menus count:', activeGroup?.hierarchicalMenus?.length);
    }
    return isHier;
  }, [activeGroup]);

  // Hierarchical menu items
  const hierarchicalMenus = useMemo(() => {
    const menus = activeGroup?.hierarchicalMenus || [];
    if (menus.length > 0) {
      console.log('Hierarchical menus:', menus.map(m => m.label));
    }
    return menus;
  }, [activeGroup]);

  // Update active page IMMEDIATELY when currentActivePage changes (before paint)
  useLayoutEffect(() => {
    if (currentActivePage) {
      setActivePage(currentActivePage);

      // On first initialization, ensure we're NOT minimized
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        // Always keep full navbar visible - never minimize
        setMinimized(false);
      }
    }
  }, [currentActivePage, setActivePage, setMinimized]);

  // Sync activeNavId with pathname when it changes (but not while user is browsing)
  useEffect(() => {
    // Only sync when not expanded - don't override user's manual selection while browsing
    if (!isExpanded && currentActiveGroup && currentActiveGroup.id !== activeNavId) {
      setActiveNav(currentActiveGroup.id);
    }
  }, [currentActiveGroup, activeNavId, setActiveNav, isExpanded]);

  // Handle nav item click - simplified toggle logic with atomic state update
  const handleNavClick = useCallback(
    (groupId: string) => {
      // Find the group to check if it has submenus
      const group = allNavGroups.find((g) => g.id === groupId);

      // Check if group has any menus (flat or hierarchical)
      const hasMenus = group && (
        (group.menus && group.menus.length > 0) ||
        (group.hierarchicalMenus && group.hierarchicalMenus.length > 0)
      );

      // If group has only 1 flat menu item and no hierarchical menus, navigate directly
      if (group && group.menus.length === 1 && !group.hierarchicalMenus) {
        router.push(group.menus[0].href);
        setExpanded(false);
        setMoreMenuOpen(false);
        return;
      }

      // If group has no menus at all, do nothing
      if (!hasMenus) {
        return;
      }

      // If submenu is open and showing THIS group's items, close it
      if (isExpanded && activeNavId === groupId) {
        setExpanded(false);
        setMoreMenuOpen(false);
      } else {
        // Otherwise, switch to this group's submenu (atomic update)
        switchToNav(groupId);
      }
    },
    [activeNavId, isExpanded, switchToNav, setExpanded, setMoreMenuOpen, allNavGroups, router]
  );

  // Handle submenu item click - navigate and close submenu
  const handleSubmenuClick = useCallback(
    (href: string) => {
      router.push(href);
      setExpanded(false);
      // Don't minimize - keep full navbar visible
    },
    [router, setExpanded]
  );

  // Handle "More" menu open - close submenu first
  const handleMoreClick = useCallback(() => {
    setExpanded(false); // Close any open submenu first
    setMoreMenuOpen(!isMoreMenuOpen); // Toggle More menu
  }, [setMoreMenuOpen, setExpanded, isMoreMenuOpen]);

  // Handle click on More menu item - navigate and close menu
  const handleMoreItemClick = useCallback(
    (href: string) => {
      router.push(href);
      setMoreMenuOpen(false);
      // Don't minimize - keep full navbar visible
    },
    [router, setMoreMenuOpen]
  );

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-bottom-nav]')) {
        setExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isExpanded, setExpanded]);

  // Wait for Zustand store to hydrate before rendering
  // This prevents flash of incorrect state
  if (!hasHydrated) {
    return null;
  }

  // Don't render if no groups available or not on mobile
  if (primaryNavGroups.length === 0 || !isMobile) return null;

  // Always show full navbar - never minimized
  return (
    <>
      {/* Backdrop when submenu expanded - only for submenu, not More menu */}
      <AnimatePresence>
        {isExpanded && !isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[75] xl:hidden"
            onClick={() => {
              setExpanded(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Full bottom navigation - always visible on mobile */}
      <motion.nav
        data-bottom-nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8
        }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[80]',
          // Hide on large desktop (xl+) - show on mobile, tablet, and small desktop
          'xl:hidden',
          'bg-white border-t border-gray-200',
          'shadow-[0_-4px_20px_rgba(0,0,0,0.1)]'
        )}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Expanded submenu - accordion or flat */}
        {isHierarchicalNav ? (
          <BottomNavAccordionSubmenu
            items={hierarchicalMenus}
            isOpen={isExpanded}
            onItemClick={handleSubmenuClick}
            title={activeGroup?.groupLabel}
          />
        ) : (
          <BottomNavSubmenu
            items={activeSubmenus}
            isOpen={isExpanded}
            onItemClick={handleSubmenuClick}
          />
        )}

        {/* Nav items */}
        <div className="flex items-center justify-around">
          {primaryNavGroups.map((group) => {
            const hasSubmenu = Boolean(
              (group.menus && group.menus.length > 1) ||
              (group.hierarchicalMenus && group.hierarchicalMenus.length > 0)
            );

            return (
              <BottomNavItem
                key={group.id}
                id={group.id}
                icon={group.icon}
                label={group.groupLabel}
                isActive={effectiveActiveNavId === group.id}
                hasSubmenu={hasSubmenu}
                onClick={() => handleNavClick(group.id)}
              />
            );
          })}

          {/* More button if there are additional groups */}
          {moreNavGroups.length > 0 && (
            <BottomNavItem
              id="more"
              icon={MoreHorizontal}
              label="More"
              isActive={isMoreMenuOpen}
              hasSubmenu={true}
              badgeCount={moreNavGroups.length}
              onClick={handleMoreClick}
            />
          )}
        </div>
      </motion.nav>

      {/* More menu sheet */}
      <BottomNavMoreMenu
        groups={moreNavGroups}
        isOpen={isMoreMenuOpen}
        onClose={() => setMoreMenuOpen(false)}
        onItemClick={handleMoreItemClick}
      />
    </>
  );
}
