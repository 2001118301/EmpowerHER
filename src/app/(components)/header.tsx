
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


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <defs>
              <linearGradient id="logoGradientDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
            <path d="M22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.0147 6.47715 13 12 13C17.5228 13 22 15.0147 22 17.5Z" stroke="url(#logoGradientDesktop)" strokeWidth="1.5"/>
            <path d="M12 13V11C12 8.23858 14.2386 6 17 6H17.5C18.8807 6 20 4.88071 20 3.5V3" stroke="url(#logoGradientDesktop)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 13V11C12 8.23858 9.76142 6 7 6H6.5C5.11929 6 4 4.88071 4 3.5V3" stroke="url(#logoGradientDesktop)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17.5 8C17.5 9.10457 16.6046 10 15.5 10C14.3954 10 13.5 9.10457 13.5 8C13.5 6.89543 14.3954 6 15.5 6C16.6046 6 17.5 6.89543 17.5 8Z" fill="url(#logoGradientDesktop)"/>
            <path d="M8.5 8C8.5 9.10457 7.60457 10 6.5 10C5.39543 10 4.5 9.10457 4.5 8C4.5 6.89543 5.39543 6 6.5 6C7.60457 6 8.5 6.89543 8.5 8Z" fill="url(#logoGradientDesktop)"/>
            <path d="M12.5 5C12.5 5.82843 11.8284 6.5 11 6.5C10.1716 6.5 9.5 5.82843 9.5 5C9.5 4.17157 10.1716 3.5 11 3.5C11.8284 3.5 12.5 4.17157 12.5 5Z" fill="url(#logoGradientDesktop)"/>
          </svg>
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
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                        >
                          <defs>
                            <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--accent))" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" />
                            </linearGradient>
                          </defs>
                          <path d="M22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.0147 6.47715 13 12 13C17.5228 13 22 15.0147 22 17.5Z" stroke="url(#logoGradientMobile)" strokeWidth="1.5"/>
                          <path d="M12 13V11C12 8.23858 14.2386 6 17 6H17.5C18.8807 6 20 4.88071 20 3.5V3" stroke="url(#logoGradientMobile)" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M12 13V11C12 8.23858 9.76142 6 7 6H6.5C5.11929 6 4 4.88071 4 3.5V3" stroke="url(#logoGradientMobile)" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M17.5 8C17.5 9.10457 16.6046 10 15.5 10C14.3954 10 13.5 9.10457 13.5 8C13.5 6.89543 14.3954 6 15.5 6C16.6046 6 17.5 6.89543 17.5 8Z" fill="url(#logoGradientMobile)"/>
                          <path d="M8.5 8C8.5 9.10457 7.60457 10 6.5 10C5.39543 10 4.5 9.10457 4.5 8C4.5 6.89543 5.39543 6 6.5 6C7.60457 6 8.5 6.89543 8.5 8Z" fill="url(#logoGradientMobile)"/>
                          <path d="M12.5 5C12.5 5.82843 11.8284 6.5 11 6.5C10.1716 6.5 9.5 5.82843 9.5 5C9.5 4.17157 10.1716 3.5 11 3.5C11.8284 3.5 12.5 4.17157 12.5 5Z" fill="url(#logoGradientMobile)"/>
                        </svg>
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
