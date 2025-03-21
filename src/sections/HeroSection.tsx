// src/components/sections/HeroSection.tsx

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Imported components
import BackgroundElements from '../components/hero/BackgroundElements';
import CodeSnippets from '../components/hero/CodeSnippets';
import ProfileImage from '../components/hero/ProfileImage';
import ProfileInfo from '../components/hero/ProfileInfo';
import ScrollIndicator from '../components/hero/ScrollIndicator';

interface HeroSectionProps {
  personalInfo: {
    name: string;
    subtitle: string;
    location: string;
  };
  typingText: string;
}

const HeroSection = ({ personalInfo, typingText }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false });

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="
        min-h-screen flex items-center relative overflow-hidden 
        bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800
      "
    >
      {/* Background Elements */}
      <BackgroundElements />
      <CodeSnippets />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Content - Profile Info */}
          <ProfileInfo 
            name={personalInfo.name}
            subtitle={personalInfo.subtitle}
            typingText={typingText}
            inView={heroInView}
          />
          
          {/* Right Content - Profile Image */}
          <ProfileImage 
            name={personalInfo.name}
            location={personalInfo.location}
            inView={heroInView}
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator inView={heroInView} />
    </section>
  );
};

export default HeroSection; 
