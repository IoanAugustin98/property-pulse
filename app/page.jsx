import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

export const metadata = {
  title: "HomePage | PropertyPulse",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
