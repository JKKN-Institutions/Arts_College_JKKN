'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';

export default function Navigation() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [iqacOpen, setIqacOpen] = useState(false);
  const [aicteOpen, setAicteOpen] = useState(false);
  const [interactionMode, setInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [iqacInteractionMode, setIqacInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [aicteInteractionMode, setAicteInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileIqacExpanded, setMobileIqacExpanded] = useState(false);
  const [mobileAicteExpanded, setMobileAicteExpanded] = useState(false);
  const [rtiOpen, setRtiOpen] = useState(false);
  const [rtiInteractionMode, setRtiInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [mobileRtiExpanded, setMobileRtiExpanded] = useState(false);
  const [mobileIiqaExpanded, setMobileIiqaExpanded] = useState(false);
  const [mobileSsrExpanded, setMobileSsrExpanded] = useState(false);
  const [mobileAqarExpanded, setMobileAqarExpanded] = useState(false);
  const [mobileBestPracticeExpanded, setMobileBestPracticeExpanded] = useState(false);
  const [mobileCollegeCalendarExpanded, setMobileCollegeCalendarExpanded] = useState(false);
  const [iiiqaOpen, setIiiqaOpen] = useState(false);
  const [ssrOpen, setSsrOpen] = useState(false);
  const [aqarOpen, setAqarOpen] = useState(false);
  const [bestPracticeOpen, setBestPracticeOpen] = useState(false);
  const [collegeCalendarOpen, setCollegeCalendarOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [facilitiesInteractionMode, setFacilitiesInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [mobileFacilitiesExpanded, setMobileFacilitiesExpanded] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [othersInteractionMode, setOthersInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [nirfOpen, setNirfOpen] = useState(false);
  const [nirf2025Open, setNirf2025Open] = useState(false);
  const [nirf2026Open, setNirf2026Open] = useState(false);
  const [committeesOpen, setCommitteesOpen] = useState(false);
  const [mobileOthersExpanded, setMobileOthersExpanded] = useState(false);
  const [mobileNirfExpanded, setMobileNirfExpanded] = useState(false);
  const [mobileNirf2025Expanded, setMobileNirf2025Expanded] = useState(false);
  const [mobileNirf2026Expanded, setMobileNirf2026Expanded] = useState(false);
  const [mobileCommitteesExpanded, setMobileCommitteesExpanded] = useState(false);

  // Programmes Offered states
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [programmesInteractionMode, setProgrammesInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [aidedOpen, setAidedOpen] = useState(false);
  const [aidedUgOpen, setAidedUgOpen] = useState(false);
  const [aidedPgOpen, setAidedPgOpen] = useState(false);
  const [aidedPhdOpen, setAidedPhdOpen] = useState(false);
  const [selfFinanceOpen, setSelfFinanceOpen] = useState(false);
  const [selfFinanceUgOpen, setSelfFinanceUgOpen] = useState(false);
  const [selfFinancePgOpen, setSelfFinancePgOpen] = useState(false);
  const [mobileProgrammesExpanded, setMobileProgrammesExpanded] = useState(false);
  const [mobileAidedExpanded, setMobileAidedExpanded] = useState(false);
  const [mobileAidedUgExpanded, setMobileAidedUgExpanded] = useState(false);
  const [mobileAidedPgExpanded, setMobileAidedPgExpanded] = useState(false);
  const [mobileAidedPhdExpanded, setMobileAidedPhdExpanded] = useState(false);
  const [mobileSelfFinanceExpanded, setMobileSelfFinanceExpanded] = useState(false);
  const [mobileSelfFinanceUgExpanded, setMobileSelfFinanceUgExpanded] = useState(false);
  const [mobileSelfFinancePgExpanded, setMobileSelfFinancePgExpanded] = useState(false);

  // Department dropdown states
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [departmentsInteractionMode, setDepartmentsInteractionMode] = useState<'hover' | 'click' | 'keyboard' | null>(null);
  const [aidedDeptOpen, setAidedDeptOpen] = useState(false);
  const [selfFinanceDeptOpen, setSelfFinanceDeptOpen] = useState(false);

  // Mobile Department states
  const [mobileDepartmentsExpanded, setMobileDepartmentsExpanded] = useState(false);
  const [mobileAidedDeptExpanded, setMobileAidedDeptExpanded] = useState(false);
  const [mobileSelfFinanceDeptExpanded, setMobileSelfFinanceDeptExpanded] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iqacButtonRef = useRef<HTMLButtonElement>(null);
  const iqacDropdownRef = useRef<HTMLDivElement>(null);
  const aicteButtonRef = useRef<HTMLButtonElement>(null);
  const aicteDropdownRef = useRef<HTMLDivElement>(null);
  const facilitiesButtonRef = useRef<HTMLButtonElement>(null);
  const facilitiesDropdownRef = useRef<HTMLDivElement>(null);
  const rtiButtonRef = useRef<HTMLButtonElement>(null);
  const rtiDropdownRef = useRef<HTMLDivElement>(null);
  const othersButtonRef = useRef<HTMLButtonElement>(null);
  const othersDropdownRef = useRef<HTMLDivElement>(null);
  const programmesButtonRef = useRef<HTMLButtonElement>(null);
  const programmesDropdownRef = useRef<HTMLDivElement>(null);
  const departmentsButtonRef = useRef<HTMLButtonElement>(null);
  const departmentsDropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Track mounted state to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hover: smooth desktop experience
  const handleMouseEnter = () => {
    if (!aboutOpen) {
      setAboutOpen(true);
      setInteractionMode('hover');
    }
  };

  const handleMouseLeave = () => {
    // Only close on mouse leave if opened via hover
    if (interactionMode === 'hover') {
      setAboutOpen(false);
      setInteractionMode(null);
    }
  };

  // Click: toggle dropdown, make it "sticky"
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (aboutOpen) {
      // Clicking when open always closes
      setAboutOpen(false);
      setInteractionMode(null);
    } else {
      // Opening via click makes it sticky (won't close on hover)
      setAboutOpen(true);
      setInteractionMode('click');
    }
  };

  // Keyboard: Enter/Space to toggle, Escape to close
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!aboutOpen) {
        setAboutOpen(true);
        setInteractionMode('keyboard');
      } else {
        setAboutOpen(false);
        setInteractionMode(null);
      }
    } else if (e.key === 'Escape' && aboutOpen) {
      e.preventDefault();
      setAboutOpen(false);
      setInteractionMode(null);
      buttonRef.current?.focus();
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setAboutOpen(false);
      setInteractionMode(null);
      buttonRef.current?.focus();
    }
  };

  // AICTE Dropdown Handlers
  const handleAicteMouseEnter = () => {
    if (!aicteOpen) {
      setAicteOpen(true);
      setAicteInteractionMode('hover');
    }
  };

  const handleAicteMouseLeave = () => {
    if (aicteInteractionMode === 'hover') {
      setAicteOpen(false);
      setAicteInteractionMode(null);
    }
  };

  const handleAicteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (aicteOpen) {
      setAicteOpen(false);
      setAicteInteractionMode(null);
    } else {
      setAicteOpen(true);
      setAicteInteractionMode('click');
    }
  };

  const handleAicteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!aicteOpen) {
        setAicteOpen(true);
        setAicteInteractionMode('keyboard');
      } else {
        setAicteOpen(false);
        setAicteInteractionMode(null);
      }
    } else if (e.key === 'Escape' && aicteOpen) {
      e.preventDefault();
      setAicteOpen(false);
      setAicteInteractionMode(null);
      aicteButtonRef.current?.focus();
    }
  };

  const handleAicteDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setAicteOpen(false);
      setAicteInteractionMode(null);
      aicteButtonRef.current?.focus();
    }
  };

  // IQAC Dropdown Handlers
  const handleIqacMouseEnter = () => {
    if (!iqacOpen) {
      setIqacOpen(true);
      setIqacInteractionMode('hover');
    }
  };

  const handleIqacMouseLeave = () => {
    if (iqacInteractionMode === 'hover') {
      setIqacOpen(false);
      setIqacInteractionMode(null);
    }
  };

  const handleIqacClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (iqacOpen) {
      setIqacOpen(false);
      setIqacInteractionMode(null);
    } else {
      setIqacOpen(true);
      setIqacInteractionMode('click');
    }
  };

  const handleIqacKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!iqacOpen) {
        setIqacOpen(true);
        setIqacInteractionMode('keyboard');
      } else {
        setIqacOpen(false);
        setIqacInteractionMode(null);
      }
    } else if (e.key === 'Escape' && iqacOpen) {
      e.preventDefault();
      setIqacOpen(false);
      setIqacInteractionMode(null);
      iqacButtonRef.current?.focus();
    }
  };

  const handleIqacDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setIqacOpen(false);
      setIqacInteractionMode(null);
      iqacButtonRef.current?.focus();
    }
  };

  // Facilities Dropdown Handlers
  const handleFacilitiesMouseEnter = () => {
    if (!facilitiesOpen) {
      setFacilitiesOpen(true);
      setFacilitiesInteractionMode('hover');
    }
  };

  const handleFacilitiesMouseLeave = () => {
    if (facilitiesInteractionMode === 'hover') {
      setFacilitiesOpen(false);
      setFacilitiesInteractionMode(null);
    }
  };

  const handleFacilitiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (facilitiesOpen) {
      setFacilitiesOpen(false);
      setFacilitiesInteractionMode(null);
    } else {
      setFacilitiesOpen(true);
      setFacilitiesInteractionMode('click');
    }
  };

  const handleFacilitiesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!facilitiesOpen) {
        setFacilitiesOpen(true);
        setFacilitiesInteractionMode('keyboard');
      } else {
        setFacilitiesOpen(false);
        setFacilitiesInteractionMode(null);
      }
    } else if (e.key === 'Escape' && facilitiesOpen) {
      e.preventDefault();
      setFacilitiesOpen(false);
      setFacilitiesInteractionMode(null);
      facilitiesButtonRef.current?.focus();
    }
  };

  const handleFacilitiesDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setFacilitiesOpen(false);
      setFacilitiesInteractionMode(null);
      facilitiesButtonRef.current?.focus();
    }
  };

  // RTI Dropdown Handlers
  const handleRtiMouseEnter = () => {
    if (!rtiOpen) {
      setRtiOpen(true);
      setRtiInteractionMode('hover');
    }
  };

  const handleRtiMouseLeave = () => {
    if (rtiInteractionMode === 'hover') {
      setRtiOpen(false);
      setRtiInteractionMode(null);
    }
  };

  const handleRtiClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (rtiOpen) {
      setRtiOpen(false);
      setRtiInteractionMode(null);
    } else {
      setRtiOpen(true);
      setRtiInteractionMode('click');
    }
  };

  const handleRtiKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!rtiOpen) {
        setRtiOpen(true);
        setRtiInteractionMode('keyboard');
      } else {
        setRtiOpen(false);
        setRtiInteractionMode(null);
      }
    } else if (e.key === 'Escape' && rtiOpen) {
      e.preventDefault();
      setRtiOpen(false);
      setRtiInteractionMode(null);
      rtiButtonRef.current?.focus();
    }
  };

  const handleRtiDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setRtiOpen(false);
      setRtiInteractionMode(null);
      rtiButtonRef.current?.focus();
    }
  };

  // OTHERS Dropdown Handlers
  const handleOthersMouseEnter = () => {
    if (!othersOpen) {
      setOthersOpen(true);
      setOthersInteractionMode('hover');
    }
  };

  const handleOthersMouseLeave = () => {
    if (othersInteractionMode === 'hover') {
      setOthersOpen(false);
      setOthersInteractionMode(null);
    }
  };

  const handleOthersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (othersOpen) {
      setOthersOpen(false);
      setOthersInteractionMode(null);
    } else {
      setOthersOpen(true);
      setOthersInteractionMode('click');
    }
  };

  const handleOthersKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!othersOpen) {
        setOthersOpen(true);
        setOthersInteractionMode('keyboard');
      } else {
        setOthersOpen(false);
        setOthersInteractionMode(null);
      }
    } else if (e.key === 'Escape' && othersOpen) {
      e.preventDefault();
      setOthersOpen(false);
      setOthersInteractionMode(null);
      othersButtonRef.current?.focus();
    }
  };

  const handleOthersDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOthersOpen(false);
      setOthersInteractionMode(null);
      othersButtonRef.current?.focus();
    }
  };

  // Programmes Offered Dropdown Handlers
  const handleProgrammesMouseEnter = () => {
    if (!programmesOpen) {
      setProgrammesOpen(true);
      setProgrammesInteractionMode('hover');
    }
  };

  const handleProgrammesMouseLeave = () => {
    if (programmesInteractionMode === 'hover') {
      setProgrammesOpen(false);
      setProgrammesInteractionMode(null);
    }
  };

  const handleProgrammesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (programmesOpen) {
      setProgrammesOpen(false);
      setProgrammesInteractionMode(null);
    } else {
      setProgrammesOpen(true);
      setProgrammesInteractionMode('click');
    }
  };

  const handleProgrammesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!programmesOpen) {
        setProgrammesOpen(true);
        setProgrammesInteractionMode('keyboard');
      } else {
        setProgrammesOpen(false);
        setProgrammesInteractionMode(null);
      }
    } else if (e.key === 'Escape' && programmesOpen) {
      e.preventDefault();
      setProgrammesOpen(false);
      setProgrammesInteractionMode(null);
      programmesButtonRef.current?.focus();
    }
  };

  const handleProgrammesDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setProgrammesOpen(false);
      setProgrammesInteractionMode(null);
      programmesButtonRef.current?.focus();
    }
  };

  // Department Dropdown Handlers
  const handleDepartmentsMouseEnter = () => {
    if (!departmentsOpen) {
      setDepartmentsOpen(true);
      setDepartmentsInteractionMode('hover');
    }
  };

  const handleDepartmentsMouseLeave = () => {
    if (departmentsInteractionMode === 'hover') {
      setDepartmentsOpen(false);
      setDepartmentsInteractionMode(null);
      setAidedDeptOpen(false);
      setSelfFinanceDeptOpen(false);
    }
  };

  const handleDepartmentsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (departmentsOpen) {
      setDepartmentsOpen(false);
      setDepartmentsInteractionMode(null);
      setAidedDeptOpen(false);
      setSelfFinanceDeptOpen(false);
    } else {
      setDepartmentsOpen(true);
      setDepartmentsInteractionMode('click');
    }
  };

  const handleDepartmentsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!departmentsOpen) {
        setDepartmentsOpen(true);
        setDepartmentsInteractionMode('keyboard');
      } else {
        setDepartmentsOpen(false);
        setDepartmentsInteractionMode(null);
        setAidedDeptOpen(false);
        setSelfFinanceDeptOpen(false);
      }
    } else if (e.key === 'Escape' && departmentsOpen) {
      e.preventDefault();
      setDepartmentsOpen(false);
      setDepartmentsInteractionMode(null);
      setAidedDeptOpen(false);
      setSelfFinanceDeptOpen(false);
      departmentsButtonRef.current?.focus();
    }
  };

  const handleDepartmentsDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setDepartmentsOpen(false);
      setDepartmentsInteractionMode(null);
      setAidedDeptOpen(false);
      setSelfFinanceDeptOpen(false);
      departmentsButtonRef.current?.focus();
    }
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileAboutExpanded(false); // Reset accordion when closing
      setMobileIqacExpanded(false);
      setMobileAicteExpanded(false);
      setMobileRtiExpanded(false);
      setMobileIiqaExpanded(false);
      setMobileSsrExpanded(false);
      setMobileAqarExpanded(false);
      setMobileBestPracticeExpanded(false);
      setMobileCollegeCalendarExpanded(false);
      setMobileFacilitiesExpanded(false);
      setMobileOthersExpanded(false);
      setMobileNirfExpanded(false);
      setMobileCommitteesExpanded(false);
      setMobileProgrammesExpanded(false);
      setMobileAidedExpanded(false);
      setMobileAidedUgExpanded(false);
      setMobileAidedPgExpanded(false);
      setMobileAidedPhdExpanded(false);
      setMobileSelfFinanceExpanded(false);
      setMobileSelfFinanceUgExpanded(false);
      setMobileSelfFinancePgExpanded(false);
      setMobileDepartmentsExpanded(false);
      setMobileAidedDeptExpanded(false);
      setMobileSelfFinanceDeptExpanded(false);
    }
  };

  const toggleMobileAbout = () => {
    setMobileAboutExpanded(!mobileAboutExpanded);
  };

  const toggleMobileAicte = () => {
    setMobileAicteExpanded(!mobileAicteExpanded);
  };

  const toggleMobileIqac = () => {
    setMobileIqacExpanded(!mobileIqacExpanded);
  };

  const toggleMobileIiqa = () => {
    setMobileIiqaExpanded(!mobileIiqaExpanded);
  };

  const toggleMobileSsr = () => {
    setMobileSsrExpanded(!mobileSsrExpanded);
  };

  const toggleMobileAqar = () => {
    setMobileAqarExpanded(!mobileAqarExpanded);
  };

  const toggleMobileBestPractice = () => {
    setMobileBestPracticeExpanded(!mobileBestPracticeExpanded);
  };

  const toggleMobileCollegeCalendar = () => {
    setMobileCollegeCalendarExpanded(!mobileCollegeCalendarExpanded);
  };

  const toggleMobileFacilities = () => {
    setMobileFacilitiesExpanded(!mobileFacilitiesExpanded);
  };

  const toggleMobileRti = () => {
    setMobileRtiExpanded(!mobileRtiExpanded);
  };

  const toggleMobileOthers = () => {
    setMobileOthersExpanded(!mobileOthersExpanded);
  };

  const toggleMobileNirf = () => {
    setMobileNirfExpanded(!mobileNirfExpanded);
  };

  const toggleMobileNirf2025 = () => {
    setMobileNirf2025Expanded(!mobileNirf2025Expanded);
  };

  const toggleMobileNirf2026 = () => {
    setMobileNirf2026Expanded(!mobileNirf2026Expanded);
  };

  const toggleMobileCommittees = () => {
    setMobileCommitteesExpanded(!mobileCommitteesExpanded);
  };

  const toggleMobileProgrammes = () => {
    setMobileProgrammesExpanded(!mobileProgrammesExpanded);
  };

  const toggleMobileAided = () => {
    setMobileAidedExpanded(!mobileAidedExpanded);
  };

  const toggleMobileAidedUg = () => {
    setMobileAidedUgExpanded(!mobileAidedUgExpanded);
  };

  const toggleMobileAidedPg = () => {
    setMobileAidedPgExpanded(!mobileAidedPgExpanded);
  };

  const toggleMobileAidedPhd = () => {
    setMobileAidedPhdExpanded(!mobileAidedPhdExpanded);
  };

  const toggleMobileSelfFinance = () => {
    setMobileSelfFinanceExpanded(!mobileSelfFinanceExpanded);
  };

  const toggleMobileSelfFinanceUg = () => {
    setMobileSelfFinanceUgExpanded(!mobileSelfFinanceUgExpanded);
  };

  const toggleMobileSelfFinancePg = () => {
    setMobileSelfFinancePgExpanded(!mobileSelfFinancePgExpanded);
  };

  const toggleMobileDepartments = () => {
    setMobileDepartmentsExpanded(!mobileDepartmentsExpanded);
  };

  const toggleMobileAidedDept = () => {
    setMobileAidedDeptExpanded(!mobileAidedDeptExpanded);
  };

  const toggleMobileSelfFinanceDept = () => {
    setMobileSelfFinanceDeptExpanded(!mobileSelfFinanceDeptExpanded);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!aboutOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
        setInteractionMode(null);
      }
    };

    // Slight delay to avoid immediate trigger
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutOpen]);

  // Close AICTE dropdown when clicking outside
  useEffect(() => {
    if (!aicteOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        aicteDropdownRef.current &&
        !aicteDropdownRef.current.contains(event.target as Node) &&
        aicteButtonRef.current &&
        !aicteButtonRef.current.contains(event.target as Node)
      ) {
        setAicteOpen(false);
        setAicteInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aicteOpen]);

  // Close IQAC dropdown when clicking outside
  useEffect(() => {
    if (!iqacOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        iqacDropdownRef.current &&
        !iqacDropdownRef.current.contains(event.target as Node) &&
        iqacButtonRef.current &&
        !iqacButtonRef.current.contains(event.target as Node)
      ) {
        setIqacOpen(false);
        setIqacInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [iqacOpen]);

  // Close Facilities dropdown when clicking outside
  useEffect(() => {
    if (!facilitiesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        facilitiesDropdownRef.current &&
        !facilitiesDropdownRef.current.contains(event.target as Node) &&
        facilitiesButtonRef.current &&
        !facilitiesButtonRef.current.contains(event.target as Node)
      ) {
        setFacilitiesOpen(false);
        setFacilitiesInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [facilitiesOpen]);

  // Close RTI dropdown when clicking outside
  useEffect(() => {
    if (!rtiOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        rtiDropdownRef.current &&
        !rtiDropdownRef.current.contains(event.target as Node) &&
        rtiButtonRef.current &&
        !rtiButtonRef.current.contains(event.target as Node)
      ) {
        setRtiOpen(false);
        setRtiInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [rtiOpen]);

  // Close OTHERS dropdown when clicking outside
  useEffect(() => {
    if (!othersOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        othersDropdownRef.current &&
        !othersDropdownRef.current.contains(event.target as Node) &&
        othersButtonRef.current &&
        !othersButtonRef.current.contains(event.target as Node)
      ) {
        setOthersOpen(false);
        setOthersInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [othersOpen]);

  // Close Programmes dropdown when clicking outside
  useEffect(() => {
    if (!programmesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        programmesDropdownRef.current &&
        !programmesDropdownRef.current.contains(event.target as Node) &&
        programmesButtonRef.current &&
        !programmesButtonRef.current.contains(event.target as Node)
      ) {
        setProgrammesOpen(false);
        setProgrammesInteractionMode(null);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [programmesOpen]);

  // Close Departments dropdown when clicking outside
  useEffect(() => {
    if (!departmentsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        departmentsDropdownRef.current &&
        !departmentsDropdownRef.current.contains(event.target as Node) &&
        departmentsButtonRef.current &&
        !departmentsButtonRef.current.contains(event.target as Node)
      ) {
        setDepartmentsOpen(false);
        setDepartmentsInteractionMode(null);
        setAidedDeptOpen(false);
        setSelfFinanceDeptOpen(false);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [departmentsOpen]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (!mounted) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, mounted]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileAboutExpanded(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-between justify-center items-center py-2 md:py-4">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="JKKN College Logo"
              className="h-12 md:h-20 w-auto"
            />
          </Link>

          {/* Mobile hamburger button - HIDDEN: Using bottom navigation on mobile */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            className="hidden text-gray-700 hover:text-brand-green transition"
          >
            <Menu className="h-6 w-6" />
          </button>

          <DesktopNav
            // About
            aboutOpen={aboutOpen}
            buttonRef={buttonRef}
            dropdownRef={dropdownRef}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
            handleDropdownKeyDown={handleDropdownKeyDown}
            // Programmes
            programmesOpen={programmesOpen}
            aidedOpen={aidedOpen}
            aidedUgOpen={aidedUgOpen}
            aidedPgOpen={aidedPgOpen}
            aidedPhdOpen={aidedPhdOpen}
            selfFinanceOpen={selfFinanceOpen}
            selfFinanceUgOpen={selfFinanceUgOpen}
            selfFinancePgOpen={selfFinancePgOpen}
            programmesButtonRef={programmesButtonRef}
            programmesDropdownRef={programmesDropdownRef}
            handleProgrammesMouseEnter={handleProgrammesMouseEnter}
            handleProgrammesMouseLeave={handleProgrammesMouseLeave}
            handleProgrammesClick={handleProgrammesClick}
            handleProgrammesKeyDown={handleProgrammesKeyDown}
            handleProgrammesDropdownKeyDown={handleProgrammesDropdownKeyDown}
            setAidedOpen={setAidedOpen}
            setAidedUgOpen={setAidedUgOpen}
            setAidedPgOpen={setAidedPgOpen}
            setAidedPhdOpen={setAidedPhdOpen}
            setSelfFinanceOpen={setSelfFinanceOpen}
            setSelfFinanceUgOpen={setSelfFinanceUgOpen}
            setSelfFinancePgOpen={setSelfFinancePgOpen}
            // IQAC
            iqacOpen={iqacOpen}
            iiiqaOpen={iiiqaOpen}
            ssrOpen={ssrOpen}
            aqarOpen={aqarOpen}
            bestPracticeOpen={bestPracticeOpen}
            collegeCalendarOpen={collegeCalendarOpen}
            iqacButtonRef={iqacButtonRef}
            iqacDropdownRef={iqacDropdownRef}
            handleIqacMouseEnter={handleIqacMouseEnter}
            handleIqacMouseLeave={handleIqacMouseLeave}
            handleIqacClick={handleIqacClick}
            handleIqacKeyDown={handleIqacKeyDown}
            handleIqacDropdownKeyDown={handleIqacDropdownKeyDown}
            setIiiqaOpen={setIiiqaOpen}
            setSsrOpen={setSsrOpen}
            setAqarOpen={setAqarOpen}
            setBestPracticeOpen={setBestPracticeOpen}
            setCollegeCalendarOpen={setCollegeCalendarOpen}
            // Facilities
            facilitiesOpen={facilitiesOpen}
            facilitiesButtonRef={facilitiesButtonRef}
            facilitiesDropdownRef={facilitiesDropdownRef}
            handleFacilitiesMouseEnter={handleFacilitiesMouseEnter}
            handleFacilitiesMouseLeave={handleFacilitiesMouseLeave}
            handleFacilitiesClick={handleFacilitiesClick}
            handleFacilitiesKeyDown={handleFacilitiesKeyDown}
            handleFacilitiesDropdownKeyDown={handleFacilitiesDropdownKeyDown}
            // AICTE
            aicteOpen={aicteOpen}
            aicteButtonRef={aicteButtonRef}
            aicteDropdownRef={aicteDropdownRef}
            handleAicteMouseEnter={handleAicteMouseEnter}
            handleAicteMouseLeave={handleAicteMouseLeave}
            handleAicteClick={handleAicteClick}
            handleAicteKeyDown={handleAicteKeyDown}
            handleAicteDropdownKeyDown={handleAicteDropdownKeyDown}
            // RTI
            rtiOpen={rtiOpen}
            rtiButtonRef={rtiButtonRef}
            rtiDropdownRef={rtiDropdownRef}
            handleRtiMouseEnter={handleRtiMouseEnter}
            handleRtiMouseLeave={handleRtiMouseLeave}
            handleRtiClick={handleRtiClick}
            handleRtiKeyDown={handleRtiKeyDown}
            handleRtiDropdownKeyDown={handleRtiDropdownKeyDown}
            // Others
            othersOpen={othersOpen}
            nirfOpen={nirfOpen}
            nirf2025Open={nirf2025Open}
            nirf2026Open={nirf2026Open}
            committeesOpen={committeesOpen}
            othersButtonRef={othersButtonRef}
            othersDropdownRef={othersDropdownRef}
            handleOthersMouseEnter={handleOthersMouseEnter}
            handleOthersMouseLeave={handleOthersMouseLeave}
            handleOthersClick={handleOthersClick}
            handleOthersKeyDown={handleOthersKeyDown}
            handleOthersDropdownKeyDown={handleOthersDropdownKeyDown}
            setNirfOpen={setNirfOpen}
            setNirf2025Open={setNirf2025Open}
            setNirf2026Open={setNirf2026Open}
            setCommitteesOpen={setCommitteesOpen}
            // Departments
            departmentsOpen={departmentsOpen}
            aidedDeptOpen={aidedDeptOpen}
            selfFinanceDeptOpen={selfFinanceDeptOpen}
            departmentsButtonRef={departmentsButtonRef}
            departmentsDropdownRef={departmentsDropdownRef}
            handleDepartmentsMouseEnter={handleDepartmentsMouseEnter}
            handleDepartmentsMouseLeave={handleDepartmentsMouseLeave}
            handleDepartmentsClick={handleDepartmentsClick}
            handleDepartmentsKeyDown={handleDepartmentsKeyDown}
            handleDepartmentsDropdownKeyDown={handleDepartmentsDropdownKeyDown}
            setAidedDeptOpen={setAidedDeptOpen}
            setSelfFinanceDeptOpen={setSelfFinanceDeptOpen}
          />
        </div>
      </div>

      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        mobileAboutExpanded={mobileAboutExpanded}
        mobileIqacExpanded={mobileIqacExpanded}
        mobileAicteExpanded={mobileAicteExpanded}
        mobileRtiExpanded={mobileRtiExpanded}
        mobileIiqaExpanded={mobileIiqaExpanded}
        mobileSsrExpanded={mobileSsrExpanded}
        mobileAqarExpanded={mobileAqarExpanded}
        mobileBestPracticeExpanded={mobileBestPracticeExpanded}
        mobileCollegeCalendarExpanded={mobileCollegeCalendarExpanded}
        mobileFacilitiesExpanded={mobileFacilitiesExpanded}
        mobileOthersExpanded={mobileOthersExpanded}
        mobileNirfExpanded={mobileNirfExpanded}
        mobileNirf2025Expanded={mobileNirf2025Expanded}
        mobileNirf2026Expanded={mobileNirf2026Expanded}
        mobileCommitteesExpanded={mobileCommitteesExpanded}
        mobileProgrammesExpanded={mobileProgrammesExpanded}
        mobileAidedExpanded={mobileAidedExpanded}
        mobileAidedUgExpanded={mobileAidedUgExpanded}
        mobileAidedPgExpanded={mobileAidedPgExpanded}
        mobileAidedPhdExpanded={mobileAidedPhdExpanded}
        mobileSelfFinanceExpanded={mobileSelfFinanceExpanded}
        mobileSelfFinanceUgExpanded={mobileSelfFinanceUgExpanded}
        mobileSelfFinancePgExpanded={mobileSelfFinancePgExpanded}
        mobileDepartmentsExpanded={mobileDepartmentsExpanded}
        mobileAidedDeptExpanded={mobileAidedDeptExpanded}
        mobileSelfFinanceDeptExpanded={mobileSelfFinanceDeptExpanded}
        toggleMobileMenu={toggleMobileMenu}
        toggleMobileAbout={toggleMobileAbout}
        toggleMobileIqac={toggleMobileIqac}
        toggleMobileAicte={toggleMobileAicte}
        toggleMobileRti={toggleMobileRti}
        toggleMobileIiqa={toggleMobileIiqa}
        toggleMobileSsr={toggleMobileSsr}
        toggleMobileAqar={toggleMobileAqar}
        toggleMobileBestPractice={toggleMobileBestPractice}
        toggleMobileCollegeCalendar={toggleMobileCollegeCalendar}
        toggleMobileFacilities={toggleMobileFacilities}
        toggleMobileOthers={toggleMobileOthers}
        toggleMobileNirf={toggleMobileNirf}
        toggleMobileNirf2025={toggleMobileNirf2025}
        toggleMobileNirf2026={toggleMobileNirf2026}
        toggleMobileCommittees={toggleMobileCommittees}
        toggleMobileProgrammes={toggleMobileProgrammes}
        toggleMobileAided={toggleMobileAided}
        toggleMobileAidedUg={toggleMobileAidedUg}
        toggleMobileAidedPg={toggleMobileAidedPg}
        toggleMobileAidedPhd={toggleMobileAidedPhd}
        toggleMobileSelfFinance={toggleMobileSelfFinance}
        toggleMobileSelfFinanceUg={toggleMobileSelfFinanceUg}
        toggleMobileSelfFinancePg={toggleMobileSelfFinancePg}
        toggleMobileDepartments={toggleMobileDepartments}
        toggleMobileAidedDept={toggleMobileAidedDept}
        toggleMobileSelfFinanceDept={toggleMobileSelfFinanceDept}
      />
    </nav>
  );
}
