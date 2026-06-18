"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

export default function BudgetForecastingToolPage() {
  const content = [
    {
      title: "PROJECT OVERVIEW",
      description: (
        <div>
          <p className="mb-4">
            The Budget Forecasting Tool is a smart predictive web utility developed during the Infosys Springboard Internship 6.0. It acts as a financial advisory app, helping users log spending patterns and generate automated prognosis forecasts of their future budget bounds.
          </p>
          <p className="mb-4">
            By analyzing historical balance charts, the tool helps reduce cash-flow surprises and assists users in planning savings allocations systematically.
          </p>
        </div>
      ),
    },
    {
      title: "INTERNSHIP MILESTONES",
      description: (
        <div>
          <p className="mb-4">
            Built as part of a remote internship, the tool integrates modern development and data practices:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Predictive Forecasting:</span> Engineered algorithms utilizing Python and statistical models to analyze historical transaction records and project spending bounds.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Firebase Integration:</span> Configured secure client authentication (Firebase Auth) and real-time database listener bindings (Firestore) for instant state syncing.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Frontend Optimization:</span> Utilized React hooks (`useMemo`, `useCallback`) to minimize redundant renders of interactive SVG graphs by 25%.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "TECHNICAL ARCHITECTURE",
      description: (
        <div>
          <p className="mb-4">
            The technical stack comprises:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Frontend:</span> React.js and Tailwind CSS for dashboard grids.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Data Processing:</span> Python scripts for trend analysis and modeling.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Cloud Infrastructure:</span> Firebase Suite hosting backend services serverlessly.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center p-4">
          <Image
            src="/budgetforecast.png"
            alt="Budget Forecasting Dashboard"
            height={600}
            width={1000}
            className="object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-5 md:px-15 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-sans font-semibold text-[43px] mb-6">
            BUDGET FORECASTING TOOL
          </h1>
          <p className="font-mono text-[18px] mb-8">
            A <span className="text-[#FF611D]">predictive financial tracker</span> built with Python, React, and Firebase to forecast future budget caps and visualize spend patterns securely in real time.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "React • Python • Firebase • Data Science • Chart.js • Infosys • ",
              ]}
              velocity={20}
              className="font-mono text-[18px] text-[#FF611D]"
              numCopies={4}
              velocityMapping={{ input: [0, 1000], output: [2, 2] }}
              parallaxClassName="h-16"
              scrollerClassName="items-center"
            />
          </div>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
