'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HierarchicalMenuItem } from './types';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface BottomNavAccordionSubmenuProps {
  items: HierarchicalMenuItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  title?: string;
}

export function BottomNavAccordionSubmenu({
  items,
  isOpen,
  onItemClick,
  title
}: BottomNavAccordionSubmenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    console.log('Toggling item:', itemId, 'Currently expanded:', expandedItems.has(itemId));

    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      console.log('New expanded items:', Array.from(newSet));
      return newSet;
    });
  };

  const handleLeafClick = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('Navigating to:', href);
    onItemClick(href);
  };

  const renderItem = (item: HierarchicalMenuItem, level: number = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.href
      ? pathname === item.href || pathname.startsWith(item.href + '/')
      : false;
    const Icon = item.icon;

    return (
      <div key={item.id} className="w-full">
        {/* Item Header */}
        <motion.button
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (hasChildren) {
              toggleExpand(item.id, e);
            } else if (item.href) {
              handleLeafClick(item.href, e);
            }
          }}
          className={cn(
            'w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
            'hover:bg-gray-100',
            level === 0 && 'border-b border-gray-100',
            level === 1 && 'pl-8 bg-gray-50/50',
            level === 2 && 'pl-12 bg-white',
            isActive && 'bg-brand-green/10 text-brand-green font-medium'
          )}
          style={{
            paddingLeft: `${(level + 1) * 16}px`
          }}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Icon */}
            <Icon
              className={cn(
                'h-4 w-4 flex-shrink-0',
                isActive ? 'text-brand-green' : 'text-gray-500'
              )}
              strokeWidth={isActive ? 2.5 : 2}
            />

            {/* Label */}
            <span
              className={cn(
                'text-sm truncate',
                isActive ? 'font-semibold text-brand-green' : 'text-gray-700'
              )}
            >
              {item.label}
            </span>
          </div>

          {/* Arrow Indicator */}
          {hasChildren && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4',
                  isActive ? 'text-brand-green' : 'text-gray-400'
                )}
              />
            </motion.div>
          )}

          {/* Right Arrow for leaf items */}
          {!hasChildren && item.href && (
            <ChevronRight
              className={cn(
                'h-4 w-4 flex-shrink-0',
                isActive ? 'text-brand-green' : 'text-gray-400'
              )}
            />
          )}
        </motion.button>

        {/* Children (Accordion Content) */}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }}
              className="overflow-hidden"
            >
              {item.children!.map((child) => renderItem(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 },
            opacity: { duration: 0.12 }
          }}
          onClick={(e) => e.stopPropagation()}
          className="overflow-hidden border-t border-gray-200 bg-white"
        >
          {/* Header */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              {title ? `Select ${title}` : 'Select'}
            </span>
          </div>

          {/* Accordion Menu */}
          <div className="max-h-[60vh] overflow-y-auto">
            {items.map((item) => renderItem(item, 0))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
