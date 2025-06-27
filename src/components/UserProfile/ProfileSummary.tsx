import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, Camera, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// Interfaces for data structure
interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

interface UserProfileData {
  avatarUrl: string;
  avatarFallback: string;
  name: string;
  username: string;
  bio: {
    title: string;
    description: string;
    collabInfo: string;
  };
  website: string;
  stats: UserStats;
}

// Dummy data defined inside the component
const userData: UserProfileData = {
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  avatarFallback: 'YN',
  name: 'Your Name',
  username: 'YourUsername',
  bio: {
    title: 'Photographer & Digital Nomad',
    description: 'Exploring the world one click at a time.',
    collabInfo: 'DM for collaborations',
  },
  website: 'yourwebsite.com',
  stats: {
    posts: 150,
    followers: 2540,
    following: 312,
  },
};

const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="font-bold text-lg">{value.toLocaleString()}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const ProfileSummary: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('w-full p-4 space-y-4 bg-background', className)}>
      {/* Top Section: Avatar and Stats */}
      <div className="flex items-center space-x-6">
        <Avatar className="w-20 h-20 md:w-24 md:h-24">
          <AvatarImage src={userData.avatarUrl} alt={userData.name} />
          <AvatarFallback>{userData.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid grid-cols-3 gap-4">
          <StatItem value={userData.stats.posts} label="Posts" />
          <StatItem value={userData.stats.followers} label="Followers" />
          <StatItem value={userData.stats.following} label="Following" />
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-1 text-sm">
        <h1 className="font-bold text-base">{userData.name}</h1>
        <p className="text-muted-foreground flex items-center">
          {userData.bio.title}
        </p>
        <p>{userData.bio.description}</p>
        <p className="text-muted-foreground flex items-center">
          {userData.bio.collabInfo} <Mail className="w-3.5 h-3.5 ml-1.5" />
        </p>
        <a
          href={`https://${userData.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-800 hover:underline"
        >
          {userData.website}
        </a>
      </div>

      {/* Action Buttons Section */}
      <div className="flex items-center space-x-2 pt-2">
        <Button variant="secondary" className="flex-1 bg-muted font-semibold hover:bg-border">
          Edit Profile
        </Button>
        <Button variant="secondary" className="flex-1 bg-muted font-semibold hover:bg-border">
          Share Profile
        </Button>
        <Button variant="secondary" size="icon" className="bg-muted hover:bg-border">
          <UserPlus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileSummary;
