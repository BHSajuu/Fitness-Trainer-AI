"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, Menu, UserIcon, X, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

    // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen) {
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.contains(e.target as Node)) {
          closeMobileMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const renderAuthButtons = () => {
    if (isSignedIn) {
      return (
        <>
          <div className=" flex flex-col gap-4 md:hidden">
            <Link href="/" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors" onClick={closeMobileMenu}>
              <HomeIcon size={16} />
              <span>Home</span>
            </Link>
            <Link href="/generate-program" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors" onClick={closeMobileMenu}>
              <DumbbellIcon size={16} />
              <span>Generate</span>
            </Link>
            <Link href="/profile" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors" onClick={closeMobileMenu}>
              <UserIcon size={16} />
              <span>Profile</span>
            </Link>
            
            <div className="flex justify-center mt-4">
              <UserButton />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            <Link href="/" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
              <HomeIcon size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link href="/generate-program" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
              <DumbbellIcon size={16} />
              <span className="hidden sm:inline">Generate</span>
            </Link>
            <Link href="/profile" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
              <UserIcon size={16} />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            <Button asChild variant="outline" className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10 hidden lg:block">
              <Link href="/generate-program">Get Started</Link>
            </Button>
            <UserButton />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col gap-4 w-full md:hidden">
            <SignInButton>
              <Button variant="outline" className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10" onClick={closeMobileMenu}>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={closeMobileMenu}>
                Sign Up
              </Button>
            </SignUpButton>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <SignInButton>
              <Button variant="outline" className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-background/60 backdrop-blur-md border-b border-border py-3 px-4 sm:px-6 md:px-15">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            code<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-background/95  md:hidden"
            onClick={closeMobileMenu}
          >
            <div 
              className="w-[150px] absolute top-16 right-4  bg-background border rounded-lg p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {renderAuthButtons()}
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          {renderAuthButtons()}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;