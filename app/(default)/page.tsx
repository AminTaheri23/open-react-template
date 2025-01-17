export const metadata = {
  title: "Home",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import VisionMissionValues from "@/components/visionMissionValues";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <VisionMissionValues />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
      <Workflows />
    </>
  );
}
