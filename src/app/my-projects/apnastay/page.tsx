"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

export default function ApnaStayPage() {
  const content = [
    {
      title: "PROJECT OVERVIEW",
      description: (
        <div>
          <p className="mb-4">
            ApnaStay is a full-featured MERN stack hospitality platform tailored for booking homestays and hotels in Tier 3 and 4 Indian cities. By targeting under-served regions, ApnaStay aims to digitize local hospitality and make cozy lodgings easily accessible to travelers.
          </p>
          <p className="mb-4">
            The platform includes image hosting integrations, detailed location listings, and a dynamic user experience tailored for rapid browsing and booking.
          </p>
        </div>
      ),
    },
    {
      title: "CORE CAPABILITIES",
      description: (
        <div>
          <p className="mb-4">
            ApnaStay provides a robust feature set for both guests and property hosts:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Dynamic Search & Filter:</span> Developed a custom backend filtering system using Express and MongoDB that allows users to seamlessly sort homestay listings by price boundaries, geographical locations, and reviews.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Secure Session Management:</span> Implemented JSON Web Token (JWT) credentials coupled with secure, HttpOnly session cookies to manage multi-level roles (guest vs. host) safely.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Cloud Image Hosting:</span> Integrates Cloudinary API directly inside the listing upload form to store and optimize high-resolution property pictures.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "BACKEND OPTIMIZATION",
      description: (
        <div>
          <p className="mb-4">
            To handle higher visitor counts and minimize server latencies:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Redesigned the Node.js API layer to leverage asynchronous event-driven middleware.</li>
            <li>Improved concurrent request processing limits by 40% under mock loading conditions.</li>
            <li>Structured indexed MongoDB schemas to ensure fast query responses during geo-queries.</li>
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
            src="/apnastay.png"
            alt="ApnaStay Platform Dashboard"
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
            APNASTAY
          </h1>
          <p className="font-mono text-[18px] mb-8">
            A <span className="text-[#FF611D]">MERN Stack hospitality platform</span> designed for Tier 3 & 4 Indian cities, incorporating dynamic MongoDB queries, JWT auth, and optimized asynchronous API layers.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "MongoDB • Express.js • React • Node.js • Cloudinary • JWT • ",
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
