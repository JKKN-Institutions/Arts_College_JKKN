'use client';

import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface DesktopNavProps {
  // About
  aboutOpen: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: (e: React.MouseEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleDropdownKeyDown: (e: React.KeyboardEvent) => void;

  // Programmes
  programmesOpen: boolean;
  aidedOpen: boolean;
  aidedUgOpen: boolean;
  aidedPgOpen: boolean;
  aidedPhdOpen: boolean;
  selfFinanceOpen: boolean;
  selfFinanceUgOpen: boolean;
  selfFinancePgOpen: boolean;
  programmesButtonRef: React.RefObject<HTMLButtonElement | null>;
  programmesDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleProgrammesMouseEnter: () => void;
  handleProgrammesMouseLeave: () => void;
  handleProgrammesClick: (e: React.MouseEvent) => void;
  handleProgrammesKeyDown: (e: React.KeyboardEvent) => void;
  handleProgrammesDropdownKeyDown: (e: React.KeyboardEvent) => void;
  setAidedOpen: (v: boolean) => void;
  setAidedUgOpen: (v: boolean) => void;
  setAidedPgOpen: (v: boolean) => void;
  setAidedPhdOpen: (v: boolean) => void;
  setSelfFinanceOpen: (v: boolean) => void;
  setSelfFinanceUgOpen: (v: boolean) => void;
  setSelfFinancePgOpen: (v: boolean) => void;

  // IQAC
  iqacOpen: boolean;
  iiiqaOpen: boolean;
  ssrOpen: boolean;
  aqarOpen: boolean;
  bestPracticeOpen: boolean;
  collegeCalendarOpen: boolean;
  iqacButtonRef: React.RefObject<HTMLButtonElement | null>;
  iqacDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleIqacMouseEnter: () => void;
  handleIqacMouseLeave: () => void;
  handleIqacClick: (e: React.MouseEvent) => void;
  handleIqacKeyDown: (e: React.KeyboardEvent) => void;
  handleIqacDropdownKeyDown: (e: React.KeyboardEvent) => void;
  setIiiqaOpen: (v: boolean) => void;
  setSsrOpen: (v: boolean) => void;
  setAqarOpen: (v: boolean) => void;
  setBestPracticeOpen: (v: boolean) => void;
  setCollegeCalendarOpen: (v: boolean) => void;

  // Facilities
  facilitiesOpen: boolean;
  facilitiesButtonRef: React.RefObject<HTMLButtonElement | null>;
  facilitiesDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleFacilitiesMouseEnter: () => void;
  handleFacilitiesMouseLeave: () => void;
  handleFacilitiesClick: (e: React.MouseEvent) => void;
  handleFacilitiesKeyDown: (e: React.KeyboardEvent) => void;
  handleFacilitiesDropdownKeyDown: (e: React.KeyboardEvent) => void;

  // AICTE
  aicteOpen: boolean;
  aicteButtonRef: React.RefObject<HTMLButtonElement | null>;
  aicteDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleAicteMouseEnter: () => void;
  handleAicteMouseLeave: () => void;
  handleAicteClick: (e: React.MouseEvent) => void;
  handleAicteKeyDown: (e: React.KeyboardEvent) => void;
  handleAicteDropdownKeyDown: (e: React.KeyboardEvent) => void;

  // RTI
  rtiOpen: boolean;
  rtiButtonRef: React.RefObject<HTMLButtonElement | null>;
  rtiDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleRtiMouseEnter: () => void;
  handleRtiMouseLeave: () => void;
  handleRtiClick: (e: React.MouseEvent) => void;
  handleRtiKeyDown: (e: React.KeyboardEvent) => void;
  handleRtiDropdownKeyDown: (e: React.KeyboardEvent) => void;

  // Others
  othersOpen: boolean;
  nirfOpen: boolean;
  nirf2025Open: boolean;
  nirf2026Open: boolean;
  committeesOpen: boolean;
  othersButtonRef: React.RefObject<HTMLButtonElement | null>;
  othersDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleOthersMouseEnter: () => void;
  handleOthersMouseLeave: () => void;
  handleOthersClick: (e: React.MouseEvent) => void;
  handleOthersKeyDown: (e: React.KeyboardEvent) => void;
  handleOthersDropdownKeyDown: (e: React.KeyboardEvent) => void;
  setNirfOpen: (v: boolean) => void;
  setNirf2025Open: (v: boolean) => void;
  setNirf2026Open: (v: boolean) => void;
  setCommitteesOpen: (v: boolean) => void;

  // Departments (used by commented-out section, kept for completeness)
  departmentsOpen: boolean;
  aidedDeptOpen: boolean;
  selfFinanceDeptOpen: boolean;
  departmentsButtonRef: React.RefObject<HTMLButtonElement | null>;
  departmentsDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleDepartmentsMouseEnter: () => void;
  handleDepartmentsMouseLeave: () => void;
  handleDepartmentsClick: (e: React.MouseEvent) => void;
  handleDepartmentsKeyDown: (e: React.KeyboardEvent) => void;
  handleDepartmentsDropdownKeyDown: (e: React.KeyboardEvent) => void;
  setAidedDeptOpen: (v: boolean) => void;
  setSelfFinanceDeptOpen: (v: boolean) => void;
}

export default function DesktopNav(props: DesktopNavProps) {
  const {
    aboutOpen, buttonRef, dropdownRef,
    handleMouseEnter, handleMouseLeave, handleClick, handleKeyDown, handleDropdownKeyDown,

    programmesOpen, aidedOpen, aidedUgOpen, aidedPgOpen, aidedPhdOpen,
    selfFinanceOpen, selfFinanceUgOpen, selfFinancePgOpen,
    programmesButtonRef, programmesDropdownRef,
    handleProgrammesMouseEnter, handleProgrammesMouseLeave,
    handleProgrammesClick, handleProgrammesKeyDown, handleProgrammesDropdownKeyDown,
    setAidedOpen, setAidedUgOpen, setAidedPgOpen, setAidedPhdOpen,
    setSelfFinanceOpen, setSelfFinanceUgOpen, setSelfFinancePgOpen,

    iqacOpen, iiiqaOpen, ssrOpen, aqarOpen, bestPracticeOpen, collegeCalendarOpen,
    iqacButtonRef, iqacDropdownRef,
    handleIqacMouseEnter, handleIqacMouseLeave,
    handleIqacClick, handleIqacKeyDown, handleIqacDropdownKeyDown,
    setIiiqaOpen, setSsrOpen, setAqarOpen, setBestPracticeOpen, setCollegeCalendarOpen,

    facilitiesOpen, facilitiesButtonRef, facilitiesDropdownRef,
    handleFacilitiesMouseEnter, handleFacilitiesMouseLeave,
    handleFacilitiesClick, handleFacilitiesKeyDown, handleFacilitiesDropdownKeyDown,

    aicteOpen, aicteButtonRef, aicteDropdownRef,
    handleAicteMouseEnter, handleAicteMouseLeave,
    handleAicteClick, handleAicteKeyDown, handleAicteDropdownKeyDown,

    rtiOpen, rtiButtonRef, rtiDropdownRef,
    handleRtiMouseEnter, handleRtiMouseLeave,
    handleRtiClick, handleRtiKeyDown, handleRtiDropdownKeyDown,

    othersOpen, nirfOpen, nirf2025Open, nirf2026Open, committeesOpen,
    othersButtonRef, othersDropdownRef,
    handleOthersMouseEnter, handleOthersMouseLeave,
    handleOthersClick, handleOthersKeyDown, handleOthersDropdownKeyDown,
    setNirfOpen, setNirf2025Open, setNirf2026Open, setCommitteesOpen,

    departmentsOpen, aidedDeptOpen, selfFinanceDeptOpen,
    departmentsButtonRef, departmentsDropdownRef,
    handleDepartmentsMouseEnter, handleDepartmentsMouseLeave,
    handleDepartmentsClick, handleDepartmentsKeyDown, handleDepartmentsDropdownKeyDown,
    setAidedDeptOpen, setSelfFinanceDeptOpen,
  } = props;

  return (
    <div className="hidden md:flex flex-wrap gap-x-6 gap-y-3 items-center max-w-4xl">
      <Link href="/" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
        Home
      </Link>

      {/* About Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          ref={buttonRef}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-expanded={aboutOpen}
          aria-haspopup="true"
          aria-controls="about-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          About
          <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
        </button>

        {aboutOpen && (
          <div
            ref={dropdownRef}
            id="about-dropdown-menu"
            role="menu"
            aria-label="About submenu"
            onKeyDown={handleDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-64 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/about/our-institution"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Our Institution
              </Link>
              <Link
                href="/about/our-trust"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Our Trust
              </Link>
              <Link
                href="/about/vision-mission"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Vision and Mission
              </Link>
              <Link
                href="/about/our-management"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Our Management
              </Link>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <div className="relative group/why">
                  <button className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm">
                    Why Students Choose JKKN?
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 hidden group-hover/why:block z-[200]">
                    <Link
                      href="/erode"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Why Erode Students?
                    </Link>
                    <Link
                      href="/salem"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Why Salem Students?
                    </Link>
                    <Link
                      href="/tiruppur"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Why Tiruppur Students?
                    </Link>
                    <Link
                      href="/namakkal"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Why Namakkal Students?
                    </Link>
                    <Link
                      href="/coimbatore"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Why Coimbatore Students?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Programmes Offered Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleProgrammesMouseEnter}
        onMouseLeave={handleProgrammesMouseLeave}
      >
        <button
          ref={programmesButtonRef}
          onClick={handleProgrammesClick}
          onKeyDown={handleProgrammesKeyDown}
          aria-expanded={programmesOpen}
          aria-haspopup="true"
          aria-controls="programmes-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          Programmes Offered
          <ChevronDown className={`w-4 h-4 transition-transform ${programmesOpen ? 'rotate-180' : ''}`} />
        </button>

        {programmesOpen && (
          <div
            ref={programmesDropdownRef}
            id="programmes-dropdown-menu"
            role="menu"
            aria-label="Programmes Offered submenu"
            onKeyDown={handleProgrammesDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-56"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {/* Aided Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setAidedOpen(true)}
                onMouseLeave={() => setAidedOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Aided</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {aidedOpen && (
                  <div className="absolute left-full top-0 pl-1 w-56 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {/* UG Courses Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setAidedUgOpen(true)}
                        onMouseLeave={() => setAidedUgOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>UG Courses</span>
                          <ChevronDown className={`w-3 h-3 -rotate-90`} />
                        </div>

                        {aidedUgOpen && (
                          <div className="absolute left-full top-0 pl-1 w-48 z-[120]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/programmes/aided/ug/ba-english"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.A. English
                              </Link>
                              <Link
                                href="/programmes/aided/ug/ba-history"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.A. History
                              </Link>
                              <Link
                                href="/programmes/aided/ug/bsc-chemistry"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc. Chemistry
                              </Link>
                              <Link
                                href="/programmes/aided/ug/bsc-maths"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc. Maths
                              </Link>
                              <Link
                                href="/programmes/aided/ug/bsc-zoology"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc. Zoology
                              </Link>
                              <Link
                                href="/programmes/aided/ug/bcom"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Com
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* PG Courses Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setAidedPgOpen(true)}
                        onMouseLeave={() => setAidedPgOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>PG Courses</span>
                          <ChevronDown className={`w-3 h-3 -rotate-90`} />
                        </div>

                        {aidedPgOpen && (
                          <div className="absolute left-full top-0 pl-1 w-56 z-[110]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/programmes/aided/pg/mca"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.C.A
                              </Link>
                              <Link
                                href="/programmes/aided/pg/mcom"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Com
                              </Link>
                              <Link
                                href="/programmes/aided/pg/msc-zoology"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Sc Zoology
                              </Link>
                              <Link
                                href="/programmes/aided/pg/msc-chemistry"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Sc Chemistry
                              </Link>
                              <Link
                                href="/programmes/aided/pg/ma-history"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.A History
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Ph.D Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setAidedPhdOpen(true)}
                        onMouseLeave={() => setAidedPhdOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>Ph.D</span>
                          <ChevronDown className={`w-3 h-3 -rotate-90`} />
                        </div>

                        {aidedPhdOpen && (
                          <div className="absolute left-full top-0 pl-1 w-48 z-[110]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/programmes/aided/phd/tamil"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Ph.D. Tamil
                              </Link>
                              <Link
                                href="/programmes/aided/phd/chemistry"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Ph.D. Chemistry
                              </Link>
                              <Link
                                href="/programmes/aided/phd/zoology"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Ph.D. Zoology
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Self Finance Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setSelfFinanceOpen(true)}
                onMouseLeave={() => setSelfFinanceOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Self Finance</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {selfFinanceOpen && (
                  <div className="absolute left-full top-0 pl-1 w-56 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {/* UG Courses Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setSelfFinanceUgOpen(true)}
                        onMouseLeave={() => setSelfFinanceUgOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>UG Courses</span>
                          <ChevronDown className={`w-3 h-3 -rotate-90`} />
                        </div>

                        {selfFinanceUgOpen && (
                          <div className="absolute left-full top-0 pl-1 w-72 z-[110]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/programmes/self-finance/ug/bsc-physics"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc. Physics
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bcom-ca"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Com CA
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bca"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.C.A
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bba"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.B.A
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bcom-banking-insurance"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Com Banking and Insurance
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bcom-accounting-finance"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Com Accounting and Finance
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-computer-science"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc Computer Science
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-ai-ds"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc AI & DS
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-cs-cyber-security"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc CS Cyber Security
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-textile-fashion-designing"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc Textile and Fashion Designing
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-visual-communication"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc Visual Communication
                              </Link>
                              <Link
                                href="/programmes/self-finance/ug/bsc-microbiology"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                B.Sc Microbiology
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* PG Courses Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setSelfFinancePgOpen(true)}
                        onMouseLeave={() => setSelfFinancePgOpen(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>PG Courses</span>
                          <ChevronDown className={`w-3 h-3 -rotate-90`} />
                        </div>

                        {selfFinancePgOpen && (
                          <div className="absolute left-full top-0 pl-1 w-80 z-[110]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/programmes/self-finance/pg/mcom"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Com
                              </Link>
                              <Link
                                href="/programmes/self-finance/pg/ma-english"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.A English
                              </Link>
                              <Link
                                href="/programmes/self-finance/pg/msc-computer-science"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Sc Computer Science
                              </Link>
                              <Link
                                href="/programmes/self-finance/pg/msc-mathematics"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Sc Mathematics
                              </Link>
                              <Link
                                href="/programmes/self-finance/pg/msc-cs-data-analytics"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                M.Sc Computer Science Data Analytics
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Department Dropdown - HIDDEN */}
      {/* <div
        className="relative"
        onMouseEnter={handleDepartmentsMouseEnter}
        onMouseLeave={handleDepartmentsMouseLeave}
      >
        <button
          ref={departmentsButtonRef}
          onClick={handleDepartmentsClick}
          onKeyDown={handleDepartmentsKeyDown}
          aria-expanded={departmentsOpen}
          aria-haspopup="true"
          aria-controls="departments-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          Department
          <ChevronDown className={`w-4 h-4 transition-transform ${departmentsOpen ? 'rotate-180' : ''}`} />
        </button>

        {departmentsOpen && (
          <div
            ref={departmentsDropdownRef}
            id="departments-dropdown-menu"
            role="menu"
            aria-label="Department submenu"
            onKeyDown={handleDepartmentsDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-56"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <div
                className="relative"
                onMouseEnter={() => setAidedDeptOpen(true)}
                onMouseLeave={() => setAidedDeptOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Aided</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {aidedDeptOpen && (
                  <div className="absolute left-full top-0 pl-1 w-72 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/departments/aided/tamil"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Tamil
                      </Link>
                      <Link
                        href="/departments/aided/english"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of English
                      </Link>
                      <Link
                        href="/departments/aided/mathematics"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Mathematics
                      </Link>
                      <Link
                        href="/departments/aided/computer-science"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Computer Science
                      </Link>
                      <Link
                        href="/departments/aided/commerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Commerce
                      </Link>
                      <Link
                        href="/departments/aided/economics"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Economics
                      </Link>
                      <Link
                        href="/departments/aided/history"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of History
                      </Link>
                      <Link
                        href="/departments/aided/physics"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Physics
                      </Link>
                      <Link
                        href="/departments/aided/zoology"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Zoology
                      </Link>
                      <Link
                        href="/departments/aided/chemistry"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Chemistry
                      </Link>
                      <Link
                        href="/departments/aided/geography"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Geography
                      </Link>
                      <Link
                        href="/departments/aided/physical-education"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Physical Education
                      </Link>
                      <Link
                        href="/departments/aided/library"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Library
                      </Link>
                      <Link
                        href="/departments/aided/botany"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Botany
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setSelfFinanceDeptOpen(true)}
                onMouseLeave={() => setSelfFinanceDeptOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Self Finance</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {selfFinanceDeptOpen && (
                  <div className="absolute left-full top-0 pl-1 w-80 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/departments/self-finance/tamil"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Tamil (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/english"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of English (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/mathematics"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Mathematics (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/computer-science"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Computer Science (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/computer-applications"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Computer Applications (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/commerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Commerce (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/physics"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Physics (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/microbiology"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Microbiology (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/visual-communication"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Visual Communication (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/textile-fashion-designing"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Textile and Fashion Designing (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/business-administration"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Business Administration (BBA) (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/ai-data-science"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Artificial Intelligence and Data Science (SF)
                      </Link>
                      <Link
                        href="/departments/self-finance/cyber-security"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Department of Cyber Security (SF)
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div> */}

      {/* IQAC Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleIqacMouseEnter}
        onMouseLeave={handleIqacMouseLeave}
      >
        <button
          ref={iqacButtonRef}
          onClick={handleIqacClick}
          onKeyDown={handleIqacKeyDown}
          aria-expanded={iqacOpen}
          aria-haspopup="true"
          aria-controls="iqac-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          IQAC
          <ChevronDown className={`w-4 h-4 transition-transform ${iqacOpen ? 'rotate-180' : ''}`} />
        </button>

        {iqacOpen && (
          <div
            ref={iqacDropdownRef}
            id="iqac-dropdown-menu"
            role="menu"
            aria-label="IQAC submenu"
            onKeyDown={handleIqacDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-48 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/iqac/vision-mission"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Vision & Mission
              </Link>
              <Link
                href="/iqac/objectives-functions"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Objectives/Functions
              </Link>
              <Link
                href="/iqac/role-responsibilities"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Role / Responsibilities
              </Link>
              <Link
                href="/iqac/minutes-of-meeting"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Minutes of IQAC Meeting
              </Link>
              <Link
                href="/iqac/naac"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                NAAC
              </Link>

              {/* IIQA Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setIiiqaOpen(true)}
                onMouseLeave={() => setIiiqaOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>IIQA</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {iiiqaOpen && (
                  <div className="absolute left-full top-0 pl-1 w-48 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/iqac/iiqa/cycle-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Cycle-I
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* SSR Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setSsrOpen(true)}
                onMouseLeave={() => setSsrOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Self-Study-Report(SSR)</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {ssrOpen && (
                  <div className="absolute left-full top-0 pl-1 w-56 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/iqac/ssr/cycle-1-2013-2018.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Cycle-I-(2013-2018)
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* AQAR Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setAqarOpen(true)}
                onMouseLeave={() => setAqarOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>AQAR</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {aqarOpen && (
                  <div className="absolute left-full top-0 pl-1 w-56 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/iqac/aqar/aqar-2022-2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        AQAR 2022-2023
                      </Link>
                      <Link
                        href="/documents/iqac/aqar/aqar-2021-2022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        AQAR 2021-2022
                      </Link>
                      <Link
                        href="/documents/iqac/aqar/aqar-2020-2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        AQAR 2020-2021
                      </Link>
                      <Link
                        href="/documents/iqac/aqar/aqar-2019-2020.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        AQAR 2019-2020
                      </Link>
                      <Link
                        href="/documents/iqac/aqar/aqar-2018-2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        AQAR 2018-2019
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Best Practice Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setBestPracticeOpen(true)}
                onMouseLeave={() => setBestPracticeOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Best Practice</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {bestPracticeOpen && (
                  <div className="absolute left-full top-0 pl-1 w-64 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/iqac/best-practices/best-practice-2022-2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                      >
                        Best Practice-2022-2023
                      </Link>
                      <Link
                        href="/documents/iqac/best-practices/best-practice-2021-2022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                      >
                        Best Practice-2021-2022
                      </Link>
                      <Link
                        href="/documents/iqac/best-practices/best-practice-2020-2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                      >
                        Best Practice-2020-2021
                      </Link>
                      <Link
                        href="/documents/iqac/best-practices/best-practice-2019-2020.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                      >
                        Best Practice-2019-2020
                      </Link>
                      <Link
                        href="/documents/iqac/best-practices/best-practice-2018-2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                      >
                        Best Practice-2018-2019
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* College Magazine Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setCollegeCalendarOpen(true)}
                onMouseLeave={() => setCollegeCalendarOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>College Magazine</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {collegeCalendarOpen && (
                  <div className="absolute left-full top-0 pl-1 w-48 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/iqac/college-magazine/magazine-2022-2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        2022-2023
                      </Link>
                      <Link
                        href="/documents/iqac/college-magazine/magazine-2020-2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        2020-2021
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Facilities Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleFacilitiesMouseEnter}
        onMouseLeave={handleFacilitiesMouseLeave}
      >
        <button
          ref={facilitiesButtonRef}
          onClick={handleFacilitiesClick}
          onKeyDown={handleFacilitiesKeyDown}
          aria-expanded={facilitiesOpen}
          aria-haspopup="true"
          aria-controls="facilities-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          Facilities
          <ChevronDown className={`w-4 h-4 transition-transform ${facilitiesOpen ? 'rotate-180' : ''}`} />
        </button>

        {facilitiesOpen && (
          <div
            ref={facilitiesDropdownRef}
            id="facilities-dropdown-menu"
            role="menu"
            aria-label="Facilities submenu"
            onKeyDown={handleFacilitiesDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-48 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/library"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Library
              </Link>
              <Link
                href="/facilities/labs"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Labs
              </Link>
              <Link
                href="/facilities/auditorium"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Auditorium
              </Link>
              <Link
                href="/facilities/seminar-hall"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Seminar Hall
              </Link>
              <Link
                href="/facilities/classroom"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Classroom
              </Link>
              <Link
                href="/facilities/food-court"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Food Court
              </Link>
              <Link
                href="/facilities/sports-club"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Sports Club
              </Link>
              <Link
                href="/facilities/bank-post-office"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Bank & Post Office
              </Link>
              <Link
                href="/facilities/transport"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Transport
              </Link>
              <Link
                href="/facilities/hostel"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Hostel
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link href="/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
        Examination
      </Link>

      {/* AICTE Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleAicteMouseEnter}
        onMouseLeave={handleAicteMouseLeave}
      >
        <button
          ref={aicteButtonRef}
          onClick={handleAicteClick}
          onKeyDown={handleAicteKeyDown}
          aria-expanded={aicteOpen}
          aria-haspopup="true"
          aria-controls="aicte-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          AICTE
          <ChevronDown className={`w-4 h-4 transition-transform ${aicteOpen ? 'rotate-180' : ''}`} />
        </button>

        {aicteOpen && (
          <div
            ref={aicteDropdownRef}
            id="aicte-dropdown-menu"
            role="menu"
            aria-label="AICTE submenu"
            onKeyDown={handleAicteDropdownKeyDown}
            className="absolute top-full right-0 pt-2 w-56 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/documents/aicte/LOA_EOA_Report_23-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                LOA_EOA_Report 23-24
              </Link>
              <Link
                href="/documents/aicte/MANDATORY-DISCLOSURE-23-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                MANDATORY-DISCLOSURE
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* RTI Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleRtiMouseEnter}
        onMouseLeave={handleRtiMouseLeave}
      >
        <button
          ref={rtiButtonRef}
          onClick={handleRtiClick}
          onKeyDown={handleRtiKeyDown}
          aria-expanded={rtiOpen}
          aria-haspopup="true"
          aria-controls="rti-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          RTI
          <ChevronDown className={`w-4 h-4 transition-transform ${rtiOpen ? 'rotate-180' : ''}`} />
        </button>

        {rtiOpen && (
          <div
            ref={rtiDropdownRef}
            id="rti-dropdown-menu"
            role="menu"
            aria-label="RTI submenu"
            onKeyDown={handleRtiDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-48 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/documents/rti/RTI-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                RTI2024
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* OTHERS Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleOthersMouseEnter}
        onMouseLeave={handleOthersMouseLeave}
      >
        <button
          ref={othersButtonRef}
          onClick={handleOthersClick}
          onKeyDown={handleOthersKeyDown}
          aria-expanded={othersOpen}
          aria-haspopup="true"
          aria-controls="others-dropdown-menu"
          className="text-gray-700 hover:text-brand-green transition flex items-center gap-1 font-bold uppercase hover:underline text-sm"
        >
          OTHERS
          <ChevronDown className={`w-4 h-4 transition-transform ${othersOpen ? 'rotate-180' : ''}`} />
        </button>

        {othersOpen && (
          <div
            ref={othersDropdownRef}
            id="others-dropdown-menu"
            role="menu"
            aria-label="OTHERS submenu"
            onKeyDown={handleOthersDropdownKeyDown}
            className="absolute top-full left-0 pt-2 w-48 z-[100]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <Link
                href="/others/privacy-policy"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                href="/gallery"
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
              >
                Gallery
              </Link>

              {/* NIRF Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setNirfOpen(true)}
                onMouseLeave={() => setNirfOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>NIRF</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {nirfOpen && (
                  <div className="absolute left-full top-0 pl-1 w-48 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/nirf/J.K.K-Nataraja-College-of-Arts-Science20240313-.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        NIRF 2024
                      </Link>
                      {/* NIRF 2025 Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setNirf2025Open(true)}
                        onMouseLeave={() => setNirf2025Open(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>NIRF 2025</span>
                          <ChevronDown className="w-3 h-3 -rotate-90" />
                        </div>
                        {nirf2025Open && (
                          <div className="absolute left-full top-0 pl-1 w-48 z-[120]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/documents/nirf/NIRF-2025-OVER-All.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Overall
                              </Link>
                              <Link
                                href="/documents/nirf/NIRF-2025-COLLEGE.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Arts
                              </Link>
                              <Link
                                href="/documents/nirf/NIRF-2025-SDG.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                SDG
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* NIRF 2026 Nested Submenu */}
                      <div
                        className="relative"
                        onMouseEnter={() => setNirf2026Open(true)}
                        onMouseLeave={() => setNirf2026Open(false)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                          <span>NIRF 2026</span>
                          <ChevronDown className="w-3 h-3 -rotate-90" />
                        </div>
                        {nirf2026Open && (
                          <div className="absolute left-full top-0 pl-1 w-48 z-[120]">
                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                              <Link
                                href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402- Overall.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Overall
                              </Link>
                              <Link
                                href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-college.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                Arts
                              </Link>
                              <Link
                                href="/documents/nirf/J.K.K Nataraja College of Arts & Science20260402-  Sustainable Institutions.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                tabIndex={0}
                                className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                              >
                                SDG
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Committees Nested Submenu */}
              <div
                className="relative"
                onMouseEnter={() => setCommitteesOpen(true)}
                onMouseLeave={() => setCommitteesOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition cursor-pointer text-sm">
                  <span>Committees</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90`} />
                </div>

                {committeesOpen && (
                  <div className="absolute left-full top-0 pl-1 w-72 z-[110]">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/documents/committees/Internal-Quality-Assurance-Cell-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Internal Quality Assurance Cell
                      </Link>
                      <Link
                        href="/documents/committees/2-Anti%20Ragging%20Committee%202025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Anti-Ragging Committee
                      </Link>
                      <Link
                        href="/documents/committees/3-Grievance-Redressal%20cell.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Grievance Redressal Cell
                      </Link>
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Student Grievance Form
                      </Link>
                      <Link
                        href="/documents/committees/4-ICC-Merged.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Internal Committee
                      </Link>
                      <Link
                        href="/documents/committees/27-institution industry cell IIC 2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        Institution Industry Cell
                      </Link>
                      <Link
                        href="/documents/committees/5-SCST Cell.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        tabIndex={0}
                        className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                      >
                        SC-ST Committee
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link href="/admissions" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
        Admission
      </Link>

      <Link href="/blog" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
        Blog
      </Link>

      <Link href="/contact" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
        Contact
      </Link>
    </div>
  );
}
