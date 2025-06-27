import React from 'react';
import { Home, Search, PlusSquare, Clapperboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface BottomNavigationBarProps {
  className?: string;
}

// Using a discriminated union for type safety
type NavItemType = {
  label: 'Home' | 'Search' | 'Create' | 'Reels';
  icon: React.ElementType;
  href: string;
} | {
  label: 'Profile';
  href: string;
  icon?: never; // Explicitly disallow icon prop for profile type
};

// Dummy data defined directly in the component
const navItems: NavItemType[] = [
  { label: 'Home' as const, icon: Home, href: '/home' },
  { label: 'Search' as const, icon: Search, href: '/search' },
  { label: 'Create' as const, icon: PlusSquare, href: '/create' },
  { label: 'Reels' as const, icon: Clapperboard, href: '/reels' },
  { label: 'Profile' as const, href: '/' }, // Represents the current profile page
];

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ className }) => {
  // For demonstration, we assume the current page is the profile page.
  const activePath = '/';
  
  // Dummy data for user avatar, consistent with ProfileSummary
  const userAvatar = {
    url: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    fallback: 'YN',
  };

  return (
    <footer
      className={cn(
        'fixed bottom-0 z-10 h-16 w-full border-t bg-background',
        className
      )}
    >
      <nav className="grid h-full grid-cols-5 items-stretch">
        {navItems.map((item) => {
          const isActive = item.href === activePath;
          const buttonClasses = "h-full w-full rounded-none flex items-center justify-center focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0";

          if (item.label === 'Profile') {
            return (
              <Button key={item.label} variant="ghost" className={buttonClasses} asChild>
                <a href={item.href}>
                  <Avatar
                    className={cn(
                      'h-7 w-7',
                      isActive && 'ring-2 ring-foreground ring-offset-2 ring-offset-background'
                    )}
                  >
                    <AvatarImage src={userAvatar.url} alt="User Profile" />
                    <AvatarFallback>{userAvatar.fallback}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">{item.label}</span>
                </a>
              </Button>
            );
          }

          const IconComponent = item.icon;
          return (
            <Button key={item.label} variant="ghost" className={buttonClasses} asChild>
              <a href={item.href}>
                <IconComponent
                  className="h-7 w-7 text-foreground"
                  strokeWidth={isActive ? 2.5 : 2}
                  aria-hidden="true"
                />
                <span className="sr-only">{item.label}</span>
              </a>
            </Button>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNavigationBar;
