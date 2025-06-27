import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface StoryHighlightData {
  id: number;
  imageUrl: string;
  fallback: string;
  caption: string;
}

const storyHighlightsData: StoryHighlightData[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/travel/200', fallback: 'TR', caption: 'Travel' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/food/200', fallback: 'FO', caption: 'Food' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/projects/200', fallback: 'PR', caption: 'Projects' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/friends/200', fallback: 'FR', caption: 'Friends' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/newyork/200', fallback: 'NY', caption: 'NYC' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/nature/200', fallback: 'NA', caption: 'Nature' },
  { id: 7, imageUrl: 'https://picsum.photos/seed/work/200', fallback: 'WO', caption: 'Work' },
  { id: 8, imageUrl: 'https://picsum.photos/seed/art/200', fallback: 'AR', caption: 'Art' },
];

const StoryHighlight: React.FC<{ highlight: StoryHighlightData }> = ({ highlight }) => (
  <div className="flex flex-col items-center space-y-1.5 flex-shrink-0 w-20">
    <Avatar className="h-16 w-16 border-2 border-gray-300 p-0.5">
      <AvatarImage src={highlight.imageUrl} alt={highlight.caption} className="rounded-full"/>
      <AvatarFallback>{highlight.fallback}</AvatarFallback>
    </Avatar>
    <p className="text-xs font-medium truncate w-full text-center">{highlight.caption}</p>
  </div>
);

const StoryHighlightRow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("w-full py-3", className)}>
      <div className="flex space-x-3 overflow-x-auto px-4 -mx-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {storyHighlightsData.map((highlight) => (
          <StoryHighlight key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default StoryHighlightRow;
