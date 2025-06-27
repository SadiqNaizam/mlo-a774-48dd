import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid3x3, Clapperboard, UserSquare } from 'lucide-react';
import PhotoGrid from './PhotoGrid';

const TabInterface: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Tabs defaultValue="photos" className={cn('w-full', className)}>
      <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 h-12 border-b">
        <TabsTrigger 
          value="photos" 
          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground text-muted-foreground rounded-none pb-3 relative -bottom-px"
        >
          <Grid3x3 className="h-6 w-6" />
        </TabsTrigger>
        <TabsTrigger 
          value="reels" 
          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground text-muted-foreground rounded-none pb-3 relative -bottom-px"
        >
          <Clapperboard className="h-6 w-6" />
        </TabsTrigger>
        <TabsTrigger 
          value="tagged" 
          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground text-muted-foreground rounded-none pb-3 relative -bottom-px"
        >
          <UserSquare className="h-6 w-6" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="photos" className="mt-0.5">
        <PhotoGrid />
      </TabsContent>
      <TabsContent value="reels" className="mt-4 text-center text-muted-foreground">
        <div className="flex flex-col items-center justify-center h-48 space-y-2">
            <Clapperboard className="h-12 w-12 text-foreground" strokeWidth={1}/>
            <h3 className="text-lg font-bold text-foreground">Reels</h3>
            <p className="text-sm">Videos you've created will appear here.</p>
        </div>
      </TabsContent>
      <TabsContent value="tagged" className="mt-4 text-center text-muted-foreground">
        <div className="flex flex-col items-center justify-center h-48 space-y-2">
            <UserSquare className="h-12 w-12 text-foreground" strokeWidth={1}/>
            <h3 className="text-lg font-bold text-foreground">Tagged Posts</h3>
            <p className="text-sm">When people tag you in photos, they'll appear here.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabInterface;
