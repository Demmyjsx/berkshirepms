'use client';
import React from "react";
import AboutBanner from "../Components/AboutBanner";
import AboutTimeline from "../Components/AboutTimeline";
import AboutMissionVisionValues from "../Components/AboutMissionVisionValues";
// import AboutTeam from "../Components/AboutTeam";
import AboutDiversityCommunity from "../Components/AboutDiversityCommunity";
import AboutCareersCta from "../Components/AboutCareersCta";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <main>
      <AboutBanner />
      <AboutTimeline />
      <AboutMissionVisionValues />
      {/* <AboutTeam /> */}
      <AboutDiversityCommunity />
      <AboutCareersCta />
      <Footer />
    </main>
  );
}
