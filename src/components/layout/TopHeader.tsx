import React from 'react';
import { ChevronDown, PlusSquare, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  // Dummy data as per requirements
  const username = "YourUsername";

  return (
    <header
      className={cn(
        'flex h-16 w-full items-center justify-between border-b bg-background px-4 shrink-0',
        className
      )}
    >
      <Button
        variant="ghost"
        className="flex items-center gap-1 p-0 text-xl font-bold hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:text-2xl"
      >
        {username}
        <ChevronDown className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      </Button>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <PlusSquare className="h-6 w-6" />
          <span className="sr-only">Create Post</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
