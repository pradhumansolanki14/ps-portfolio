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