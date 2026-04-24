// import IntroSection from "../sections/about/IntroSection";
// import JourneySection from "../sections/about/JourneySection";
// import WhatIDoSection from "../sections/about/WhatIDoSection";
// import SkillsSection from "../sections/about/SkillsSection";
// import ExperienceSection from "../sections/about/ExperienceSection";
// import PersonalSection from "../sections/about/PersonalSection";
// import CTASection from "../sections/home/CTASection";

// const AboutPage = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-6 space-y-20">

//       <IntroSection />
//       <JourneySection />
//       <WhatIDoSection />
//       <SkillsSection />
//       <ExperienceSection />
//       <PersonalSection />
//       <CTASection/>

//     </div>
//   );
// };

// export default AboutPage;



import AboutIntro from "../sections/about/AboutIntro";
import AboutProof from "../sections/about/AboutProof";
import AboutSkills from "../sections/about/AboutSkills";
import AboutJourney from "../sections/about/AboutJourney";
import AboutHire from "../sections/about/AboutHire";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      <AboutIntro />
      <AboutProof />
      <AboutSkills />
      <AboutJourney />
    
      <AboutHire />

    </div>
  );
};

export default AboutPage;