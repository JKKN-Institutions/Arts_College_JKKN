'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

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
  const [committeesOpen, setCommitteesOpen] = useState(false);
  const [mobileOthersExpanded, setMobileOthersExpanded] = useState(false);
  const [mobileNirfExpanded, setMobileNirfExpanded] = useState(false);
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
              className="h-12 md:h-20 w-12 md:w-20"
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
                  className="absolute top-full left-0 pt-2 w-48 z-[100]"
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
                                      href="/programmes/aided/pg/msc-physics"
                                      role="menuitem"
                                      tabIndex={0}
                                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                                    >
                                      M.Sc Physics
                                    </Link>
                                    <Link
                                      href="/programmes/aided/pg/ma-english"
                                      role="menuitem"
                                      tabIndex={0}
                                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                                    >
                                      M.A English
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Tamil
                            </Link>
                            <Link
                              href="/departments/aided/english"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of English
                            </Link>
                            <Link
                              href="/departments/aided/mathematics"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Mathematics
                            </Link>
                            <Link
                              href="/departments/aided/computer-science"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Computer Science
                            </Link>
                            <Link
                              href="/departments/aided/commerce"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Commerce
                            </Link>
                            <Link
                              href="/departments/aided/economics"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Economics
                            </Link>
                            <Link
                              href="/departments/aided/history"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of History
                            </Link>
                            <Link
                              href="/departments/aided/physics"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Physics
                            </Link>
                            <Link
                              href="/departments/aided/zoology"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Zoology
                            </Link>
                            <Link
                              href="/departments/aided/chemistry"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Chemistry
                            </Link>
                            <Link
                              href="/departments/aided/geography"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Geography
                            </Link>
                            <Link
                              href="/departments/aided/physical-education"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Physical Education
                            </Link>
                            <Link
                              href="/departments/aided/library"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Library
                            </Link>
                            <Link
                              href="/departments/aided/botany"
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Tamil (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/english"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of English (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/mathematics"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Mathematics (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/computer-science"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Computer Science (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/computer-applications"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Computer Applications (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/commerce"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Commerce (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/physics"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Physics (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/microbiology"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Microbiology (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/visual-communication"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Visual Communication (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/textile-fashion-designing"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Textile and Fashion Designing (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/business-administration"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Business Administration (BBA) (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/ai-data-science"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Department of Artificial Intelligence and Data Science (SF)
                            </Link>
                            <Link
                              href="/departments/self-finance/cyber-security"
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              AQAR 2022-2023
                            </Link>
                            <Link
                              href="/documents/iqac/aqar/aqar-2021-2022.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              AQAR 2021-2022
                            </Link>
                            <Link
                              href="/documents/iqac/aqar/aqar-2020-2021.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              AQAR 2020-2021
                            </Link>
                            <Link
                              href="/documents/iqac/aqar/aqar-2019-2020.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              AQAR 2019-2020
                            </Link>
                            <Link
                              href="/documents/iqac/aqar/aqar-2018-2019.pdf"
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                            >
                              Best Practice-2022-2023
                            </Link>
                            <Link
                              href="/documents/iqac/best-practices/best-practice-2021-2022.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                            >
                              Best Practice-2021-2022
                            </Link>
                            <Link
                              href="/documents/iqac/best-practices/best-practice-2020-2021.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                            >
                              Best Practice-2020-2021
                            </Link>
                            <Link
                              href="/documents/iqac/best-practices/best-practice-2019-2020.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-cream hover:text-brand-green transition whitespace-nowrap"
                            >
                              Best Practice-2019-2020
                            </Link>
                            <Link
                              href="/documents/iqac/best-practices/best-practice-2018-2019.pdf"
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              2022-2023
                            </Link>
                            <Link
                              href="/documents/iqac/college-magazine/magazine-2020-2021.pdf"
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

            <Link href="/documents/examinations/Autonomous_Semester-Timetable_AprilMay-_2025.pdf" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
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
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      LOA_EOA_Report 23-24
                    </Link>
                    <Link
                      href="/documents/aicte/MANDATORY-DISCLOSURE-23-24.pdf"
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
                      href="/others/academic-calendar"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Academic Calendar
                    </Link>
                    <Link
                      href="/others/privacy-policy"
                      role="menuitem"
                      tabIndex={0}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                    >
                      Privacy Policy
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              NIRF 2024
                            </Link>
                            <Link
                              href="/documents/nirf/NIRF-2025-COLLEGE.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              NIRF 2025
                            </Link>
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
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Internal Quality Assurance Cell
                            </Link>
                            <Link
                              href="/documents/committees/Anti_Ragging-committee-2024.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Anti-Ragging Committee
                            </Link>
                            <Link
                              href="/documents/committees/Grievance-Redressal-Cell-2024.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Grievance Redressal Cell
                            </Link>
                            <Link
                              href="https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Student Grievance Form
                            </Link>
                            <Link
                              href="/documents/committees/Internal-committee-2024.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Internal Committee
                            </Link>
                            <Link
                              href="/documents/committees/Institution-Industry-Cell-2024.pdf"
                              role="menuitem"
                              tabIndex={0}
                              className="block px-4 py-2 text-gray-700 hover:bg-brand-green hover:text-white transition text-sm"
                            >
                              Institution Industry Cell
                            </Link>
                            <Link
                              href="/documents/committees/SC-ST-Committee-2024.pdf"
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

            <Link href="#" className="text-gray-700 hover:text-brand-green transition font-bold uppercase hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>

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
                                  href="/programmes/aided/pg/msc-physics"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.Sc Physics
                                </Link>
                                <Link
                                  href="/programmes/aided/pg/ma-english"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  M.A English
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
                                  href="/programmes/self-finance/ug/bsc-visual-communication"
                                  onClick={toggleMobileMenu}
                                  className="block py-2 px-12 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                                >
                                  B.Sc Visual Communication
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
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2021-2022.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2021-2022
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2020-2021.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2020-2021
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2019-2020.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            AQAR 2019-2020
                          </Link>
                          <Link
                            href="/documents/iqac/aqar/aqar-2018-2019.pdf"
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
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2021-2022.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2021-2022
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2020-2021.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2020-2021
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2019-2020.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition whitespace-nowrap"
                          >
                            Best Practice-2019-2020
                          </Link>
                          <Link
                            href="/documents/iqac/best-practices/best-practice-2018-2019.pdf"
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
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            2022-2023
                          </Link>
                          <Link
                            href="/documents/iqac/college-magazine/magazine-2020-2021.pdf"
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
                      href="/documents/aicte/LOA_EOA_Report_23-24.pdf"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      LOA_EOA_Report 23-24
                    </Link>
                    <Link
                      href="/documents/aicte/MANDATORY-DISCLOSURE-23-24.pdf"
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
                      href="/others/academic-calendar"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Academic Calendar
                    </Link>
                    <Link
                      href="/others/privacy-policy"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-8 text-gray-600 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                    >
                      Privacy Policy
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
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            NIRF 2024
                          </Link>
                          <Link
                            href="/documents/nirf/NIRF-2025-COLLEGE.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            NIRF 2025
                          </Link>
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
                            href="/documents/committees/2-Anti Ragging Committee 2025.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Anti-Ragging Committee
                          </Link>
                          <Link
                            href="/documents/committees/Grievance-Redressal-Cell-2024.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Grievance Redressal Cell
                          </Link>
                          <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Student Grievance Form
                          </Link>
                          <Link
                            href="/documents/committees/Internal-committee-2024.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Internal Committee
                          </Link>
                          <Link
                            href="/documents/committees/Institution-Industry-Cell-2024.pdf"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-8 text-gray-500 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
                          >
                            Institution Industry Cell
                          </Link>
                          <Link
                            href="/documents/committees/SC-ST-Committee-2024.pdf"
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
                href="#"
                onClick={toggleMobileMenu}
                className="block py-3 px-4 text-gray-700 hover:bg-brand-cream hover:text-brand-green rounded-lg transition"
              >
                Contact
              </Link>

            </div>
          </div>
        </>
      )}
    </nav>
  );
}
