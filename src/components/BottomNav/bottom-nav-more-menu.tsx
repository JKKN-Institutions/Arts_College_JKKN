'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BottomNavMoreMenuProps, HierarchicalMenuItem } from './types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

// Recursive component to render hierarchical menus inside the More sheet
function HierarchicalMoreItem({
  item,
  level = 0,
  pathname,
  onItemClick
}: {
  item: HierarchicalMenuItem;
  level?: number;
  pathname: string;
  onItemClick: (href: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + '/')
    : false;
  const Icon = item.icon;

  return (
    <div className="w-full">
      <button
        onClick={() => {
          if (hasChildren) {
            setExpanded((v) => !v);
          } else if (item.href) {
            onItemClick(item.href);
          }
        }}
        className={cn(
          'w-full flex items-center justify-between py-2.5 text-left transition-colors',
          'hover:bg-gray-50 rounded-lg px-2',
          isActive && 'text-brand-green font-medium'
        )}
        style={{ paddingLeft: `${(level + 1) * 12}px` }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Icon
            className={cn('h-4 w-4 flex-shrink-0', isActive ? 'text-brand-green' : 'text-gray-500')}
            strokeWidth={isActive ? 2.5 : 2}
          />
          <span className={cn('text-sm truncate', isActive ? 'text-brand-green' : 'text-gray-700')}>
            {item.label}
          </span>
        </div>
        {hasChildren && (
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mr-1">
            <ChevronDown className={cn('h-4 w-4', isActive ? 'text-brand-green' : 'text-gray-400')} />
          </motion.div>
        )}
        {!hasChildren && item.href && (
          <ChevronRight className={cn('h-4 w-4 flex-shrink-0 mr-1', isActive ? 'text-brand-green' : 'text-gray-400')} />
        )}
      </button>

      <AnimatePresence>
        {hasChildren && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.25 }, opacity: { duration: 0.15 } }}
            className="overflow-hidden"
          >
            {item.children!.map((child) => (
              <HierarchicalMoreItem
                key={child.id}
                item={child}
                level={level + 1}
                pathname={pathname}
                onItemClick={onItemClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BottomNavMoreMenu({
  groups,
  isOpen,
  onClose,
  onItemClick
}: BottomNavMoreMenuProps) {
  const pathname = usePathname();

  const handleItemClick = (href: string) => {
    onItemClick(href);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="h-[80vh] rounded-t-3xl flex flex-col z-[90]"
      >
        <SheetHeader className="pb-2 flex-shrink-0">
          <SheetTitle className="text-lg font-semibold">All Menus</SheetTitle>
        </SheetHeader>

        {/* Custom scrollable area with hidden scrollbar */}
        <div
          className="flex-1 overflow-y-auto pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <Accordion type="multiple" className="w-full" defaultValue={groups.map(g => g.id)}>
            {groups.map((group) => {
              const GroupIcon = group.icon;

              // Check active state for both flat and hierarchical menus
              const hasActiveItem = group.isHierarchical
                ? false // hierarchical active state is handled per-item
                : group.menus.some(
                    (item) => pathname === item.href || pathname.startsWith(item.href + '/')
                  );

              const itemCount = group.isHierarchical
                ? (group.hierarchicalMenus?.length ?? 0)
                : group.menus.length;

              return (
                <AccordionItem
                  key={group.id}
                  value={group.id}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger
                    className={cn(
                      'py-3 hover:no-underline',
                      hasActiveItem && 'text-brand-green'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'p-2 rounded-lg',
                          hasActiveItem ? 'bg-brand-green/10' : 'bg-gray-100'
                        )}
                      >
                        <GroupIcon
                          className="h-4 w-4"
                          strokeWidth={hasActiveItem ? 2.5 : 2}
                        />
                      </div>
                      <span className="font-medium text-sm">{group.groupLabel}</span>
                      <span className="text-xs text-gray-500 ml-auto mr-2">{itemCount}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    {group.isHierarchical && group.hierarchicalMenus && group.hierarchicalMenus.length > 0 ? (
                      // Hierarchical groups (e.g. Departments) — nested expand/collapse list
                      <div className="pt-1 pb-2">
                        {group.hierarchicalMenus.map((item) => (
                          <HierarchicalMoreItem
                            key={item.id}
                            item={item}
                            level={0}
                            pathname={pathname}
                            onItemClick={handleItemClick}
                          />
                        ))}
                      </div>
                    ) : (
                      // Flat groups — 3-column icon grid
                      <div className="grid grid-cols-3 gap-2 pt-2 pb-3">
                        {group.menus.map((item, index) => {
                          const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + '/');
                          const Icon = item.icon;

                          return (
                            <motion.button
                              key={item.href}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { delay: index * 0.02 }
                              }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleItemClick(item.href)}
                              className={cn(
                                'flex flex-col items-center justify-center p-3 rounded-lg',
                                'transition-colors duration-200',
                                'active:bg-gray-100',
                                isActive
                                  ? 'bg-brand-green/10 text-brand-green ring-1 ring-brand-green/20'
                                  : 'text-gray-600 bg-gray-50'
                              )}
                            >
                              <Icon
                                className="h-5 w-5 mb-1"
                                strokeWidth={isActive ? 2.5 : 2}
                              />
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
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
