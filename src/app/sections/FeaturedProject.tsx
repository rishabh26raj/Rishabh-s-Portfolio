"use client";
import React from "react";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center pt-28 lg:pt-34">
      <h1 className="font-bold text-[30px]">FEATURED PROJECTS</h1>
      <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
        EXPLORE MY WORK
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const FileKitContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        A serverless, privacy-first client-side utility suite built with Next.js and browser-native APIs.
        Engineered compression algorithms that achieve up to 60% size reduction and integrated Web Workers to offload processing, keeping UI interactions fluid at 60fps.
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="https://file-kit-gamma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FF611D] text-white py-2.5 px-6 rounded-3xl font-mono text-sm hover:bg-[#FF4500] transition duration-300"
        >
          Visit Deployed App ↗
        </a>
      </div>
    </div>
  );
};

const BudgetForecastContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Engineered during the Infosys Springboard Internship 6.0 using Python and React to visualize financial trends.
        Builds predictive models utilizing historical spending data to forecast budget requirements, with secure Firebase integrations.
      </p>
    </div>
  );
};

const AssistantContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        An AI-powered HR Dashboard designed for streamlined employee management.
        Integrates Google Gemini API to build an intelligent chatbot capable of resolving 80% of common queries, using Prisma ORM and Supabase.
      </p>
    </div>
  );
};

const ApnaStayContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        A MERN Stack hospitality platform architected for Tier 3/4 Indian cities.
        Features a dynamic MongoDB filtering system and JWT-based secure session cookies with optimized asynchronous middleware.
      </p>
    </div>
  );
};

const data = [
  {
    category: "WEB DEVELOPMENT",
    title: "FileKit",
    src: "/filekit.png",
    content: <FileKitContent />,
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Budget Forecasting Tool",
    src: "/budgetforecast.png",
    content: <BudgetForecastContent />,
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Smart Virtual Assistant",
    src: "/assistant.png",
    content: <AssistantContent />,
  },
  {
    category: "WEB DEVELOPMENT",
    title: "ApnaStay",
    src: "/apnastay.png",
    content: <ApnaStayContent />,
  },
];
