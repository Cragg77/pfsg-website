# PFSG Website - Todos

## Current Tasks
- None pending

## Completed Tasks
- [x] Replace initial logo with user-provided exact logo image
- [x] Add Tella-style financial tools section with buttons linking to calculators on Contact page
- [x] Make all buttons yellow with black text, consistent across the site
- [x] Change "Get Started" button to "Book a chat" and add "Apply Online" button next to it and in header
- [x] Expand Commercial tab from 6 to 8 boxes matching Source Funding's 8 service headers with summarized blurbs and CTAs
- [x] Replace symbols in Commercial boxes with images from Source Funding, positioned above text
- [x] Ensure all yellow buttons in Commercial boxes align horizontally and link to Source Funding services page
- [x] **Update header styling** - Made header bigger with more space for the logo, similar to Panda Mortgages design
- [x] **Update navigation font** - Changed header navigation menu font to Montserrat for clean professional style matching Panda Mortgages
- [x] **Header styling updates** - Reverted to black background, implemented uppercase navigation labels, and white text logo version
- [x] Add padding between email and "Get in touch" button in footer
- [x] Remove solid black line between hero section and "Our Services"
- [x] Update "Apply Online" and "Login to CRM" buttons to point to specific external URL
- [x] Update logo to "logo_pfsg.png"
- [x] Increase logo size in header without changing header height
- [x] Change hero overlays from white to yellow
- [x] Update button styling to complement yellow overlay theme
- [x] Adjust text contrast for readability with yellow backgrounds
- [x] Reduce logo size to fit properly within header bar
- [x] Add yellow accent colors to service cards for consistency
- [x] Add yellow accents to testimonial cards star ratings
- [x] Add yellow accent colors to Commercial cards for consistency
- [x] Test the yellow theme consistency across all website pages
- [x] Add yellow left borders to service cards on Services page
- [x] Add yellow borders to contact form and FAQ cards on Contact page
- [x] Remove 'Financial Planning' and add 'Property Finance & Development' under services
- [x] Add dropdown for 'Disclosures' and 'Join Our Team' under Contact navigation
- [x] Create separate Disclosures page and Join Our Team page with proper routing
- [x] Remove the "Complaints Handling Process" section from Disclosures page
- [x] Remove buttons and Current Opportunities section from Careers page

## In Progress
- None

## Recently Completed ✅
- [x] **Make video mobile-friendly and add it to mobile view** ✅
  - ✅ Modified mobile detection logic to only disable video on very slow connections (2G, save data enabled, <1.5 Mbps)
  - ✅ Added mobile-optimized video attributes: webkit-playsinline, preload="metadata", proper object positioning
  - ✅ Enhanced video loading timeout handling with shorter timeouts for mobile devices (3s vs 5s)
  - ✅ Improved floating elements to be responsive across all screen sizes with sm: breakpoints
  - ✅ Added mobile-specific CSS optimizations for better video performance and reduced animation complexity
  - ✅ Enhanced error handling and fallback mechanisms for unstable connections
  - ✅ Video now displays and works properly on mobile devices unless connection is very limited
- [x] Remove FAQ section from Contact page - cleaned up the page by removing the "Frequently Asked Questions" section and all four FAQ cards
- [x] Fix navigation scroll-to-top issue - ensure all buttons navigate to new pages at the top
  - Added ScrollToTop component that automatically scrolls to top on route changes
  - Converted all internal anchor tags (href='/path') to React Router Links for proper SPA navigation
  - Fixed navigation buttons to properly scroll to top of new pages
  - Added missing react-router-dom imports to all affected page components
  - Tested scroll-to-top functionality works on all navigation links and buttons
- [x] Replace background video with Vid_small for better responsiveness
  - Added Vid_small.mp4 (1.3MB) to public/images directory from uploads
  - Updated Hero component to use the smaller, more responsive video file
  - Previous video was larger and less optimized for mobile/slower connections

## Recently Completed ✅
- [x] Fix logo display issue - logo becoming small and squished on some screens
  - Removed conflicting fixed width/height attributes from PandaLogo component
  - Improved responsive classes with better breakpoints for all screen sizes
  - Added flex-shrink-0 and min-w-fit to logo container to prevent compression
  - Updated header layout to provide better spacing and prevent logo squishing
- [x] Test logo display across different browser window sizes for consistent appearance
  - Created comprehensive responsive analysis with automated testing script
  - Verified aspect ratio consistency across all breakpoints (3.20-3.27:1 ratio maintained)
  - Confirmed protection mechanisms prevent compression at all screen sizes
  - Tested stress scenarios from 320px to 1400px+ screen widths - all tests passing
  - Generated detailed test report documenting all responsive behaviors
  - ✅ Logo now scales perfectly from mobile (144×44px) to desktop (208×64px)

## Pending 📋
- [ ] Add yellow borders to calculator cards on Calculators page
- [ ] Add yellow accents to team member cards on About page
- [ ] Add more yellow accent elements to SEO page

## Notes
- Project deployed and live at latest version 13
- All buttons use consistent yellow background with black text styling
- Commercial page has 8 service boxes with Source Funding images and aligned CTAs
- Header has "Apply Online" button next to "Login to CRM"
- Header now has enhanced spacing and larger logo similar to Panda Mortgages design
- Navigation menu uses Montserrat font with medium weight and proper tracking for professional appearance
- ✅ **COMPLETED**: Client's exact PF_Logo.png now displaying properly in header

## Completed ✅
- ✅ **Updated SendGrid Email From Address**
  - ✅ Changed from email to john@fastcast.ai
  - ✅ Updated serverless function to use new sender address
  - ✅ Updated environment variables
  - ✅ **Successfully pushed to GitHub**
    - ✅ Removed hardcoded API keys for security
    - ✅ Added proper environment variable handling
    - ✅ Created .env.example file with placeholders
    - ✅ Repository live at: https://github.com/Cragg77/pfsg-website.git

## Pending 📋
- Continue development on new Next.js project (panda-finance-new)
- Add more pages and features to new project
- Deploy new project to hosting platform
- Create additional pages like About Us, Services, and Contact
- Add interactive calculators for mortgage and loan calculations
- Implement a contact form with email functionality
