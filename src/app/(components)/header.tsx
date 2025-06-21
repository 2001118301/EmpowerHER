
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Home,
  BookOpen,
  GitFork,
  Users,
  GalleryHorizontalEnd,
  HeartHandshake,
  LayoutDashboard,
  Menu,
  UserCircle,
  Settings,
  LogOut,
  Award, 
  Gift,
  Briefcase,  
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import BlurText from '@/components/shared/blur-text';

interface NavLinkItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/learning-paths', label: 'Learning Paths', icon: GitFork },
  { href: '/opportunities', label: 'Opportunities', icon: Briefcase },
  { href: '/mentorship', label: 'Mentorship', icon: Users },
  { href: '/showcase', label: 'Showcase', icon: GalleryHorizontalEnd },
  { href: '/community', label: 'Community', icon: HeartHandshake },
  { href: '/success-stories', label: 'Success Stories', icon: Award },
];

export function Header() {
  const pathname = usePathname();

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          className={cn(
            "justify-start text-sm font-medium h-auto py-2 px-3", 
            pathname === link.href 
              ? "text-primary border-b-2 border-primary rounded-none" 
              : "hover:text-primary/80 hover:bg-transparent", 
            isMobile ? "w-full text-base py-3 border-none hover:bg-accent/50" 
                     : "hover:border-b-2 hover:border-primary/50",
            pathname === link.href && isMobile ? "bg-accent text-accent-foreground" : ""
          )}
        >
          <Link href={link.href} className="flex items-center gap-2">
            <link.icon size={isMobile ? 20 : 18} />
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );


  const Logo = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("text-primary", className)}
    >
      <path d="M8.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 6L12 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M15.5 7.5L17.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M17.5 11L20.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M17.5 15L20.5 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M6.5 11L3.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M6.5 15L3.5 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path 
        d="M8.5 10.5 C 7.5 9.5, 7 10, 7 11 V 21 H 17 V 14 C 17 12, 16 11, 15 11 C 14.5 11, 14 11.2, 13.5 11.5 L 10.5 8 C 10 7.5, 9.5 7.5, 9 8 C 8.5 8.5, 8.5 9, 9 9.5 L 11.5 12.5 C 10.5 12, 9.5 11.5, 8.5 10.5 Z"
      />
      <path
        d="M17 14.5 C 18.5 14.5, 19.5 15.5, 19.5 16.5 C 19.5 17.5, 18.5 18.5, 17 18.5 C 16 18.5, 15.5 17.5, 16 16.5 C 16.2 16, 17 14.5, 17 14.5 Z"
      />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <BlurText text="EmpowerHER" className="text-xl font-bold text-primary font-headline" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLinksContent />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button 
            variant="default" 
            size="sm" 
            asChild 
            className="hidden sm:flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 active:scale-95"
          >
            <Link href="/donate">
              <Gift size={16} />
              Donate
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <UserCircle size={20} />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="flex items-center gap-2"><LayoutDashboard size={16}/> Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem disabled className="flex items-center gap-2"><Settings size={16}/> Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled className="flex items-center gap-2"><LogOut size={16}/> Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu size={20} />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-4 pt-8 bg-card">
                <div className="mb-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                      <Logo className="h-7 w-7" />
                      <BlurText text="EmpowerHER" className="text-lg font-bold text-primary font-headline" />
                    </Link>
                </div>
                <nav className="flex flex-col gap-2">
                  <NavLinksContent isMobile={true} />
                  <Button 
                    variant="default" 
                    size="sm" 
                    asChild 
                    className="flex items-center gap-1.5 mt-4 w-full text-base py-3 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Link href="/donate">
                      <Gift size={20} />
                      Donate Now
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
