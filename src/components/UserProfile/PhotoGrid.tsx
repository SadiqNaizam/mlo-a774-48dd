import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Layers, Play } from 'lucide-react';

type PostType = 'single' | 'carousel' | 'video';

interface PhotoPost {
  id: number;
  imageUrl: string;
  type: PostType;
}

const photoGridData: PhotoPost[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1516934212962-61817c393342?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1534777367038-94f8b0532295?q=80&w=400&h=400&fit=crop', type: 'video' as const },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0e16bb7366?q=80&w=400&h=400&fit=crop', type: 'carousel' as const },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=400&h=400&fit=crop', type: 'video' as const },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&h=400&fit=crop', type: 'carousel' as const },
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 11, imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=400&h=400&fit=crop', type: 'single' as const },
  { id: 12, imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=400&h=400&fit=crop', type: 'single' as const },
];

const PostIcon: React.FC<{ type: PostType }> = ({ type }) => {
  if (type === 'single') return null;

  const iconClasses = "h-5 w-5 text-white absolute top-1.5 right-1.5";

  if (type === 'video') {
    return <Play className={iconClasses} />; // Using Play for video icon
  }
  if (type === 'carousel') {
    return <Layers className={iconClasses} />; // Using Layers for multiple images
  }
  return null;
};


const PhotoGrid: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-3 gap-0.5', className)}>
      {photoGridData.map((post) => (
        <div key={post.id} className="relative group cursor-pointer">
          <AspectRatio ratio={1 / 1}>
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <PostIcon type={post.type} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
