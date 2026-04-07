'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface AdminPanelState {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AdminPanelContext = createContext<AdminPanelState>({
  sidebarCollapsed: false,
  toggleSidebar: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

export function useAdminPanel() {
  return useContext(AdminPanelContext);
}

export function AdminPanelProvider({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  // Load persisted state on mount
  useEffect(() => {
    const savedCollapsed = localStorage.getItem('admin-sidebar-collapsed');
    const savedTheme = localStorage.getItem('admin-theme') as Theme | null;
    if (savedCollapsed === 'true') setSidebarCollapsed(true);
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
  }, []);

  // Apply theme class to the admin wrapper
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('admin-dark');
    } else {
      root.classList.remove('admin-dark');
    }
  }, [theme]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('admin-sidebar-collapsed', String(next));
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('admin-theme', next);
      return next;
    });
  }, []);

  return (
    <AdminPanelContext.Provider value={{ sidebarCollapsed, toggleSidebar, theme, toggleTheme }}>
      {children}
    </AdminPanelContext.Provider>
  );
}
