
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-primary">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-primary">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
