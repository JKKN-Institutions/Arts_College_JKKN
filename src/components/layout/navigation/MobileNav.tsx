'use client';

import React from 'react';
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
  mobileMenuOpen: boolean;
  mobileAboutExpanded: boolean;
  mobileIqacExpanded: boolean;
  mobileAicteExpanded: boolean;
  mobileRtiExpanded: boolean;
  mobileIiqaExpanded: boolean;
  mobileSsrExpanded: boolean;
  mobileAqarExpanded: boolean;
  mobileBestPracticeExpanded: boolean;
  mobileCollegeCalendarExpanded: boolean;
  mobileFacilitiesExpanded: boolean;
  mobileOthersExpanded: boolean;
  mobileNirfExpanded: boolean;
  mobileNirf2025Expanded: boolean;
  mobileNirf2026Expanded: boolean;
  mobileCommitteesExpanded: boolean;
  mobileProgrammesExpanded: boolean;
  mobileAidedExpanded: boolean;
  mobileAidedUgExpanded: boolean;
  mobileAidedPgExpanded: boolean;
  mobileAidedPhdExpanded: boolean;
  mobileSelfFinanceExpanded: boolean;
  mobileSelfFinanceUgExpanded: boolean;
  mobileSelfFinancePgExpanded: boolean;
  mobileDepartmentsExpanded: boolean;
  mobileAidedDeptExpanded: boolean;
  mobileSelfFinanceDeptExpanded: boolean;

  toggleMobileMenu: () => void;
  toggleMobileAbout: () => void;
  toggleMobileIqac: () => void;
  toggleMobileAicte: () => void;
  toggleMobileRti: () => void;
  toggleMobileIiqa: () => void;
  toggleMobileSsr: () => void;
  toggleMobileAqar: () => void;
  toggleMobileBestPractice: () => void;
  toggleMobileCollegeCalendar: () => void;
  toggleMobileFacilities: () => void;
  toggleMobileOthers: () => void;
  toggleMobileNirf: () => void;
  toggleMobileNirf2025: () => void;
  toggleMobileNirf2026: () => void;
  toggleMobileCommittees: () => void;
  toggleMobileProgrammes: () => void;
  toggleMobileAided: () => void;
  toggleMobileAidedUg: () => void;
  toggleMobileAidedPg: () => void;
  toggleMobileAidedPhd: () => void;
  toggleMobileSelfFinance: () => void;
  toggleMobileSelfFinanceUg: () => void;
  toggleMobileSelfFinancePg: () => void;
  toggleMobileDepartments: () => void;
  toggleMobileAidedDept: () => void;
  toggleMobileSelfFinanceDept: () => void;
}

export default function MobileNav(props: MobileNavProps) {
  const {
    mobileMenuOpen,
    mobileAboutExpanded,
    mobileIqacExpanded,
    mobileAicteExpanded,
    mobileRtiExpanded,
    mobileIiqaExpanded,
    mobileSsrExpanded,
    mobileAqarExpanded,
    mobileBestPracticeExpanded,
    mobileCollegeCalendarExpanded,
    mobileFacilitiesExpanded,
    mobileOthersExpanded,
    mobileNirfExpanded,
    mobileNirf2025Expanded,
    mobileNirf2026Expanded,
    mobileCommitteesExpanded,
    mobileProgrammesExpanded,
    mobileAidedExpanded,
    mobileAidedUgExpanded,
    mobileAidedPgExpanded,
    mobileAidedPhdExpanded,
    mobileSelfFinanceExpanded,
    mobileSelfFinanceUgExpanded,
    mobileSelfFinancePgExpanded,
    mobileDepartmentsExpanded,
    mobileAidedDeptExpanded,
    mobileSelfFinanceDeptExpanded,

    toggleMobileMenu,
    toggleMobileAbout,
    toggleMobileIqac,
    toggleMobileAicte,
    toggleMobileRti,
    toggleMobileIiqa,
    toggleMobileSsr,
    toggleMobileAqar,
    toggleMobileBestPractice,
    toggleMobileCollegeCalendar,
    toggleMobileFacilities,
    toggleMobileOthers,
    toggleMobileNirf,
    toggleMobileNirf2025,
    toggleMobileNirf2026,
    toggleMobileCommittees,
    toggleMobileProgrammes,
    toggleMobileAided,
    toggleMobileAidedUg,
    toggleMobileAidedPg,
    toggleMobileAidedPhd,
    toggleMobileSelfFinance,
    toggleMobileSelfFinanceUg,
    toggleMobileSelfFinancePg,
    toggleMobileDepartments,
    toggleMobileAidedDept,
    toggleMobileSelfFinanceDept,
  } = props;

  return (
    <>
      {/* Mobile menu overlay & sidebar - DISABLED: Using bottom navigation on mobile */}
      {false && mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-white z-50 shadow-xl md:hidden overflow-y-auto">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                aria-label="Close navigation menu"
                className="text-gray-700 hover:text-brand-green transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="px-4 pb-4 space-y-2">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
              >
                Home
              </Link>

              {/* About accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileAbout}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileAboutExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/about/our-institution"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Our Institution
                    </Link>
                    <Link
                      href="/about/our-trust"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Our Trust
                    </Link>
                    <Link
                      href="/about/vision-mission"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Vision and Mission
                    </Link>
                    <Link
                      href="/about/our-management"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Our Management
                    </Link>
                    <div className="border-t border-gray-100 mt-2 pt-2 mx-4">
                      <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Why Students Choose JKKN?
                      </div>
                      <Link
                        href="/erode"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Erode Students?
                      </Link>
                      <Link
                        href="/salem"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Salem Students?
                      </Link>
                      <Link
                        href="/tiruppur"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Tiruppur Students?
                      </Link>
                      <Link
                        href="/namakkal"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Namakkal Students?
                      </Link>
                      <Link
                        href="/coimbatore"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Coimbatore Students?
                      </Link>
                      <Link
                        href="/komarapalayam"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Komarapalayam Students?
                      </Link>
                      <Link
                        href="/tiruchengode"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Tiruchengode Students?
                      </Link>
                      <Link
                        href="/bhavani"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Bhavani Students?
                      </Link>
                      <Link
                        href="/sankagiri"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Sankagiri Students?
                      </Link>
                      <Link
                        href="/pallipalayam"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Pallipalayam Students?
                      </Link>
                      <Link
                        href="/rasipuram"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Rasipuram Students?
                      </Link>
                      <Link
                        href="/perundurai"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Perundurai Students?
                      </Link>
                      <Link
                        href="/gobichettipalayam"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        Why Gobichettipalayam Students?
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Programmes Offered accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileProgrammes}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>Programmes Offered</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgrammesExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileProgrammesExpanded && (
                  <div className="pb-2">
                    {/* Aided nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileAided}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Aided</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileAidedExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileAidedExpanded && (
                        <div className="pb-2">
                          {/* UG Courses nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileAidedUg}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>UG Courses</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAidedUgExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {mobileAidedUgExpanded && (
                              <div className="pb-2">
                                <Link
                                  href="/programmes/aided/ug/ba-english"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.A. English
                                </Link>
                                <Link
                                  href="/programmes/aided/ug/ba-history"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.A. History
                                </Link>
                                <Link
                                  href="/programmes/aided/ug/bsc-chemistry"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc. Chemistry
                                </Link>
                                <Link
                                  href="/programmes/aided/ug/bsc-maths"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc. Maths
                                </Link>
                                <Link
                                  href="/programmes/aided/ug/bsc-zoology"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc. Zoology
                                </Link>
                                <Link
                                  href="/programmes/aided/ug/bcom"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Com
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* PG Courses nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileAidedPg}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>PG Courses</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAidedPgExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {mobileAidedPgExpanded && (
                              <div className="pb-2">
                                <Link
                                  href="/programmes/aided/pg/mca"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.C.A
                                </Link>
                                <Link
                                  href="/programmes/aided/pg/mcom"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Com
                                </Link>
                                <Link
                                  href="/programmes/aided/pg/msc-zoology"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Zoology
                                </Link>
                                <Link
                                  href="/programmes/aided/pg/msc-chemistry"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Chemistry
                                </Link>
                                <Link
                                  href="/programmes/aided/pg/ma-history"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.A History
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Ph.D nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileAidedPhd}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>Ph.D</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAidedPhdExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {mobileAidedPhdExpanded && (
                              <div className="pb-2">
                                <Link
                                  href="/programmes/aided/phd/tamil"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Ph.D. Tamil
                                </Link>
                                <Link
                                  href="/programmes/aided/phd/chemistry"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Ph.D. Chemistry
                                </Link>
                                <Link
                                  href="/programmes/aided/phd/zoology"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Ph.D. Zoology
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Self Finance nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileSelfFinance}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Self Finance</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSelfFinanceExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileSelfFinanceExpanded && (
                        <div className="pb-2">
                          {/* UG Courses nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileSelfFinanceUg}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>UG Courses</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSelfFinanceUgExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {mobileSelfFinanceUgExpanded && (
                              <div className="pb-2">
                                <Link
                                  href="/programmes/self-finance/ug/bsc-physics"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc. Physics
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bcom-ca"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Com CA
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bcom-ai"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Com AI
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bca"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.C.A
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bba"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.B.A
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bcom-banking-insurance"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Com Banking and Insurance
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bcom-accounting-finance"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Com Accounting and Finance
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-computer-science"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Computer Science
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-ai-ds"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc AI & DS
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-cs-cyber-security"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc CS Cyber Security
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-textile-fashion-designing"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Textile and Fashion Designing
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-textile-fashion-designing-ai"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Textile and Fashion Designing (AI)
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-visual-communication"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Visual Communication
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-visual-communication-ai"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Visual Communication (AI)
                                </Link>
                                <Link
                                  href="/programmes/self-finance/ug/bsc-microbiology"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Microbiology
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* PG Courses nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileSelfFinancePg}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>PG Courses</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSelfFinancePgExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {mobileSelfFinancePgExpanded && (
                              <div className="pb-2">
                                <Link
                                  href="/programmes/self-finance/pg/mcom"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Com
                                </Link>
                                <Link
                                  href="/programmes/self-finance/pg/ma-english"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.A English
                                </Link>
                                <Link
                                  href="/programmes/self-finance/pg/msc-computer-science"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Computer Science
                                </Link>
                                <Link
                                  href="/programmes/self-finance/pg/msc-mathematics"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Mathematics
                                </Link>
                                <Link
                                  href="/programmes/self-finance/pg/msc-cs-data-analytics"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Computer Science Data Analytics
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Department accordion */}
              {/* Department - HIDDEN */}
              {/* <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileDepartments}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>Department</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDepartmentsExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileDepartmentsExpanded && (
                  <div className="pb-2">
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileAidedDept}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Aided</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileAidedDeptExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileAidedDeptExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/departments/aided/tamil"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Tamil
                          </Link>
                          <Link
                            href="/departments/aided/english"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of English
                          </Link>
                          <Link
                            href="/departments/aided/mathematics"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Mathematics
                          </Link>
                          <Link
                            href="/departments/aided/computer-science"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Computer Science
                          </Link>
                          <Link
                            href="/departments/aided/commerce"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Commerce
                          </Link>
                          <Link
                            href="/departments/aided/economics"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Economics
                          </Link>
                          <Link
                            href="/departments/aided/history"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of History
                          </Link>
                          <Link
                            href="/departments/aided/physics"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Physics
                          </Link>
                          <Link
                            href="/departments/aided/zoology"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Zoology
                          </Link>
                          <Link
                            href="/departments/aided/chemistry"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Chemistry
                          </Link>
                          <Link
                            href="/departments/aided/geography"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Geography
                          </Link>
                          <Link
                            href="/departments/aided/physical-education"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Physical Education
                          </Link>
                          <Link
                            href="/departments/aided/library"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Library
                          </Link>
                          <Link
                            href="/departments/aided/botany"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Botany
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className="ml-4">
                      <button
                        onClick={toggleMobileSelfFinanceDept}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Self Finance</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSelfFinanceDeptExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileSelfFinanceDeptExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/departments/self-finance/tamil"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Tamil (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/english"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of English (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/mathematics"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Mathematics (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/computer-science"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Computer Science (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/computer-applications"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Computer Applications (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/commerce"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Commerce (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/physics"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Physics (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/microbiology"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Microbiology (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/visual-communication"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Visual Communication (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/textile-fashion-designing"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Textile and Fashion Designing (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/business-administration"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Business Administration (BBA) (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/ai-data-science"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Artificial Intelligence and Data Science (SF)
                          </Link>
                          <Link
                            href="/departments/self-finance/cyber-security"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Department of Cyber Security (SF)
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div> */}

              <Link
                href="/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
              >
                Examination
              </Link>

              {/* IQAC accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileIqac}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>IQAC</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIqacExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileIqacExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/iqac/vision-mission"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      href="/iqac/objectives-functions"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Objectives/Functions
                    </Link>
                    <Link
                      href="/iqac/role-responsibilities"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Role / Responsibilities
                    </Link>
                    <Link
                      href="/iqac/naac"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      NAAC
                    </Link>

                    {/* IIQA nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileIiqa}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>IIQA</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileIiqaExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileIiqaExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/iqac/iiqa/cycle-1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Cycle-I
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* SSR nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileSsr}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Self-Study-Report(SSR)</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSsrExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileSsrExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/iqac/ssr/cycle-1-2013-2018.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Cycle-I-(2013-2018)
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* AQAR nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileAqar}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>AQAR</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileAqarExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileAqarExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/iqac/aqar/aqar-2022-2023.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2021-2022.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2021-2022
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2020-2021.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2020-2021
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2019-2020.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2019-2020
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2018-2019.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2018-2019
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Best Practice nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileBestPractice}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Best Practice</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileBestPracticeExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileBestPracticeExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2022-2023.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2021-2022.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2021-2022
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2020-2021.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2020-2021
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2019-2020.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2019-2020
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2018-2019.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2018-2019
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* College Magazine nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileCollegeCalendar}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>College Magazine</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileCollegeCalendarExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileCollegeCalendarExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/iqac/college-magazine/magazine-2022-2023.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/college-magazine/magazine-2020-2021.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            2020-2021
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* AICTE accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileAicte}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>AICTE</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAicteExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileAicteExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/documents/committees/28-LOA_EOA_merged_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      LOA_EOA_Report 23-24
                    </Link>
                    <Link
                      href="/documents/aicte/MANDATORY-DISCLOSURE-23-24.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      MANDATORY-DISCLOSURE
                    </Link>
                  </div>
                )}
              </div>

              {/* Facilities accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileFacilities}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>Facilities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileFacilitiesExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileFacilitiesExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/library"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Library
                    </Link>
                    <Link
                      href="/facilities/labs"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Labs
                    </Link>
                    <Link
                      href="/facilities/auditorium"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Auditorium
                    </Link>
                    <Link
                      href="/facilities/seminar-hall"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Seminar Hall
                    </Link>
                    <Link
                      href="/facilities/classroom"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Classroom
                    </Link>
                    <Link
                      href="/facilities/food-court"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Food Court
                    </Link>
                    <Link
                      href="/facilities/sports-club"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Sports Club
                    </Link>
                    <Link
                      href="/facilities/bank-post-office"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Bank & Post Office
                    </Link>
                    <Link
                      href="/facilities/transport"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Transport
                    </Link>
                    <Link
                      href="/facilities/hostel"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Hostel
                    </Link>
                  </div>
                )}
              </div>

              {/* RTI accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileRti}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>RTI</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileRtiExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileRtiExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/documents/rti/RTI-2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      RTI2024
                    </Link>
                  </div>
                )}
              </div>

              {/* OTHERS accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleMobileOthers}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                >
                  <span>OTHERS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOthersExpanded ? 'rotate-180' : ''}`} />
                </button>

                {mobileOthersExpanded && (
                  <div className="pb-2">
                    <Link
                      href="/others/privacy-policy"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Privacy Policy
                    </Link>

                    <Link
                      href="https://jobs.cvviz.com/jkkn_institutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Careers
                    </Link>

                    <Link
                      href="/events"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Events
                    </Link>

                    <Link
                      href="/faculty"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Senior Learners
                    </Link>

                    {/* NIRF nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileNirf}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>NIRF</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileNirfExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileNirfExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/nirf/J.K.K-Nataraja-College-of-Arts-Science20240313-.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            NIRF 2024
                          </Link>
                          {/* NIRF 2025 nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileNirf2025}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>NIRF 2025</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileNirf2025Expanded ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileNirf2025Expanded && (
                              <div className="pb-2">
                                <Link
                                  href="/documents/nirf/NIRF-2025-OVER-All.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Overall
                                </Link>
                                <Link
                                  href="/documents/nirf/NIRF-2025-COLLEGE.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Arts
                                </Link>
                                <Link
                                  href="/documents/nirf/NIRF-2025-SDG.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  SDG
                                </Link>
                              </div>
                            )}
                          </div>
                          {/* NIRF 2026 nested accordion */}
                          <div className="ml-4">
                            <button
                              onClick={toggleMobileNirf2026}
                              className="w-full flex items-center justify-between py-2 px-4 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                            >
                              <span>NIRF 2026</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileNirf2026Expanded ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileNirf2026Expanded && (
                              <div className="pb-2">
                                <Link
                                  href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402- Overall.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Overall
                                </Link>
                                <Link
                                  href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-college.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  Arts
                                </Link>
                                <Link
                                  href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-  Sustainable Institutions.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  SDG
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Committees nested accordion */}
                    <div className="ml-4">
                      <button
                        onClick={toggleMobileCommittees}
                        className="w-full flex items-center justify-between py-2 px-4 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                      >
                        <span>Committees</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommitteesExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileCommitteesExpanded && (
                        <div className="pb-2">
                          <Link
                            href="/documents/committees/Internal-Quality-Assurance-Cell-2024.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Internal Quality Assurance Cell
                          </Link>
                          <Link
                            href="/documents/committees/2-Anti%20Ragging%20Committee%202025.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Anti-Ragging Committee
                          </Link>
                          <Link
                            href="/documents/committees/27-institution industry cell IIC 2025.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Grievance Redressal Cell
                          </Link>
                          <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Student Grievance Form
                          </Link>
                          <Link
                            href="/documents/committees/4-ICC-Merged.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Internal Committee
                          </Link>
                          <Link
                            href="/documents/committees/27-institution industry cell IIC 2025.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Institution Industry Cell
                          </Link>
                          <Link
                            href="/documents/committees/5-SCST Cell.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            SC-ST Committee
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
              >
                Contact
              </Link>

            </div>
          </div>
        </>
      )}
    </>
  );
}
