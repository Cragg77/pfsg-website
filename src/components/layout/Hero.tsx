import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = "/api/placeholder/1920/800",
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if device is mobile or has very limited bandwidth
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
      const isSlowConnection = (navigator as any).connection?.effectiveType === '2g' ||
                              (navigator as any).connection?.effectiveType === 'slow-2g';
      const hasLimitedData = (navigator as any).connection?.saveData === true;
      const isVerySlowConnection = (navigator as any).connection?.downlink < 1.5; // Less than 1.5 Mbps

      // Only disable video for very slow connections or when save data is enabled
      setIsMobile(isSlowConnection || hasLimitedData || isVerySlowConnection);
    };

    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);

    return () => window.removeEventListener('resize', checkMobileDevice);
  }, []);

  useEffect(() => {
    // Intersection Observer for lazy loading - now works on mobile too
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Enhanced video performance monitoring for mobile
    if (videoRef.current && shouldLoadVideo) {
      const video = videoRef.current;
      let timeoutId: NodeJS.Timeout;

      const handleLoadStart = () => {
        console.log('Video loading started');
        // Set a timeout for mobile devices - shorter loading time
        const isMobileDevice = window.innerWidth < 768;
        const timeoutDuration = isMobileDevice ? 3000 : 5000;

        timeoutId = setTimeout(() => {
          if (!videoLoaded) {
            console.warn('Video loading timeout - falling back to static background');
            setVideoError(true);
          }
        }, timeoutDuration);
      };

      const handleCanPlay = () => {
        console.log('Video can start playing');
        if (timeoutId) clearTimeout(timeoutId);
      };

      const handleStalled = () => {
        console.warn('Video loading stalled');
        // Immediate fallback on mobile for stalled videos
        const isMobileDevice = window.innerWidth < 768;
        const fallbackDelay = isMobileDevice ? 2000 : 3000;

        setTimeout(() => {
          if (!videoLoaded) {
            setVideoError(true);
          }
        }, fallbackDelay);
      };

      const handleWaiting = () => {
        console.log('Video waiting for more data');
      };

      const handlePlaying = () => {
        console.log('Video started playing');
        if (timeoutId) clearTimeout(timeoutId);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('stalled', handleStalled);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('stalled', handleStalled);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, [shouldLoadVideo, videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log('Video loaded successfully');
  };

  const handleVideoError = (error: any) => {
    console.error('Video loading error:', error);
    setVideoError(true);
  };

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mobile-Friendly Video Background */}
      {!isMobile && !videoError && shouldLoadVideo && (
        <>
          {/* Video Loading Placeholder */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {/* Mobile-Optimized Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            webkit-playsinline="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              filter: 'hue-rotate(30deg) saturate(1.2) brightness(1.1)',
              objectPosition: 'center center'
            }}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            poster="/images/hero-bg.jpg"
          >
            <source src="/images/Vid_small.mp4" type="video/mp4" />
          </video>
        </>
      )}

      {/* Fallback Static Background for Very Slow Connections */}
      {(isMobile || videoError || !shouldLoadVideo) && (
        <div className="absolute inset-0">
          {/* Optimized Static Background for Slow Connections */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              filter: 'hue-rotate(30deg) saturate(1.2) brightness(1.1)'
            }}
          />

          {/* Enhanced Animation for Fallback (respect reduced motion) */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-600 animate-gradient-shift"></div>
            </div>
          )}
        </div>
      )}

      {/* Video Overlay with Yellow Tint */}
      <div className="absolute inset-0 bg-yellow-400/60 mix-blend-multiply"></div>

      {/* Additional Yellow Overlay for Branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-amber-500/30"></div>

      {/* Optimized Floating Elements - Mobile Friendly */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Core elements optimized for all devices */}
          <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 rounded-full animate-float-slow" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-200/30 rounded-full animate-float-medium" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-white/15 rounded-full animate-drift-right" style={{ animationDelay: '4s' }}></div>

          {/* Additional elements for larger screens and when video is loaded */}
          {(videoLoaded || isMobile) && (
            <>
              <div className="absolute top-1/3 right-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-yellow-100/40 rounded-full animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 right-4 sm:right-10 w-20 sm:w-28 h-20 sm:h-28 bg-white/10 rounded-full animate-drift-left" style={{ animationDelay: '3s' }}></div>

              {/* Subtle Light Streaks - visible on larger screens */}
              <div className="hidden sm:block absolute top-0 left-1/6 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-12 animate-drift-left" style={{ animationDelay: '2s' }}></div>
              <div className="hidden sm:block absolute top-0 right-1/5 w-1 h-full bg-gradient-to-b from-transparent via-yellow-100/30 to-transparent transform -rotate-12 animate-drift-right" style={{ animationDelay: '4s' }}></div>

              {/* Panda-themed floating elements - responsive */}
              <div className="absolute top-32 right-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gray-200/30 rounded-full animate-drift-left relative" style={{ animationDelay: '1s' }}>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-700/50 rounded-full absolute top-1 sm:top-2 left-2 sm:left-3"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-700/50 rounded-full absolute top-1 sm:top-2 right-2 sm:right-3"></div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-lg">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <Link to={primaryButtonLink}>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg drop-shadow-xl transition-all duration-300 hover:scale-105"
              >
                {primaryButtonText}
              </Button>
            </Link>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            secondaryButtonLink.startsWith("http") ? (
              <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-3 text-lg drop-shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {secondaryButtonText}
                </Button>
              </a>
            ) : (
              <Link to={secondaryButtonLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-3 text-lg drop-shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
