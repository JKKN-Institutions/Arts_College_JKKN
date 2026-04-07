'use client';

import { useAdminPanel } from './AdminPanelContext';

export function AdminMainContent({
  hasUser,
  children,
}: {
  hasUser: boolean;
  children: React.ReactNode;
}) {
  const { sidebarCollapsed, theme } = useAdminPanel();
  const isDark = theme === 'dark';

  const marginClass = hasUser
    ? sidebarCollapsed
      ? 'lg:ml-[72px]'
      : 'lg:ml-[260px]'
    : '';

  return (
    <div
      data-theme={theme}
      className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${marginClass} ${
        isDark ? 'bg-gray-900 text-gray-100 admin-dark-mode' : 'bg-gray-50/80'
      }`}
    >
      {children}
      {/* Global admin styles: hidden scrollbar + dark mode overrides */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {isDark && (
        <style>{`
          .admin-dark-mode .bg-white {
            background-color: rgb(31 41 55) !important;
          }
          .admin-dark-mode .border-gray-100,
          .admin-dark-mode .border-gray-200 {
            border-color: rgb(55 65 81) !important;
          }
          .admin-dark-mode .text-\\[\\#002309\\] {
            color: rgb(243 244 246) !important;
          }
          .admin-dark-mode .text-gray-800 {
            color: rgb(209 213 219) !important;
          }
          .admin-dark-mode .text-gray-600 {
            color: rgb(156 163 175) !important;
          }
          .admin-dark-mode .text-gray-500 {
            color: rgb(156 163 175) !important;
          }
          .admin-dark-mode .text-gray-400 {
            color: rgb(107 114 128) !important;
          }
          .admin-dark-mode .bg-gray-50 {
            background-color: rgb(55 65 81) !important;
          }
          .admin-dark-mode .bg-gray-100 {
            background-color: rgb(55 65 81) !important;
          }
          .admin-dark-mode .hover\\:bg-gray-50:hover {
            background-color: rgb(55 65 81) !important;
          }
          .admin-dark-mode .hover\\:bg-gray-100:hover {
            background-color: rgb(55 65 81) !important;
          }
          .admin-dark-mode .bg-\\[\\#ffde59\\]\\/5 {
            background-color: rgba(255, 222, 89, 0.08) !important;
          }
          .admin-dark-mode .bg-\\[\\#0b6d41\\]\\/5 {
            background-color: rgba(11, 109, 65, 0.1) !important;
          }
        `}</style>
      )}
    </div>
  );
}
