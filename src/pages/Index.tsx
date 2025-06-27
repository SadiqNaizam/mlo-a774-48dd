import React from 'react';

// Layout components
import BottomNavigationBar from '../components/layout/BottomNavigationBar';
import TopHeader from '../components/layout/TopHeader';

// Feature-specific organism components
import ProfileSummary from '../components/UserProfile/ProfileSummary';
import StoryHighlightRow from '../components/UserProfile/StoryHighlightRow';
import TabInterface from '../components/UserProfile/TabInterface';

/**
 * The main page for the Social Media Profile Screen application.
 * This component assembles the entire user profile view by composing various
 * organism-level components into a cohesive, mobile-first layout.
 *
 * The structure follows a standard mobile app pattern:
 * - A sticky header that stays at the top.
 * - A scrollable main content area.
 * - A fixed navigation bar at the bottom.
 */
const Index: React.FC = () => {
  return (
    // This container simulates the mobile viewport on larger screens by constraining the width.
    // `min-h-screen` ensures the layout takes at least the full viewport height.
    <div className="relative mx-auto min-h-screen max-w-sm bg-background font-sans">
      {/* 
        The TopHeader is made sticky to remain visible at the top during scrolling.
        The z-index ensures it stays above the content scrolling underneath. 
        Its own background color prevents content from showing through.
      */}
      <TopHeader className="sticky top-0 z-20" />

      {/* 
        The main content area contains all the profile sections. 
        `pb-16` adds padding to the bottom to create space and prevent the final content
        from being obscured by the fixed BottomNavigationBar.
      */}
      <main className="pb-16">
        <ProfileSummary />
        <StoryHighlightRow />
        <TabInterface />
      </main>

      {/* 
        The BottomNavigationBar is positioned with `fixed` in its own component file.
        It will anchor to the bottom of the browser viewport. On a mobile device, this
        is the desired behavior. The `main` element's padding-bottom ensures
        no content is hidden.
      */}
      <BottomNavigationBar />
    </div>
  );
};

export default Index;
