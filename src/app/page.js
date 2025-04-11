import ActionSection from "@/components/HomePage/ActionSection";
import Features from "@/components/HomePage/Feature";
import Banner from "@/components/HomePage/HomeBanner";
import TestimonialSlider from "@/components/HomePage/TestimonialSlider";
// import Image from "next/image";

export const metadata = {
  title: "Home: Work Manager"
}

export default function Home() {
  return (
      <>
      <Banner />
      <Features />
      <ActionSection/>
      <TestimonialSlider/>
      </>
  );
}
