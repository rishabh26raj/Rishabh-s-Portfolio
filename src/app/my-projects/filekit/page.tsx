"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

export default function FileKitPage() {
  const content = [
    {
      title: "WHAT IS FILEKIT?",
      description: (
        <div>
          <p className="mb-4">
            FileKit is a serverless, privacy-first file-processing suite built in Next.js. By leveraging browser-native APIs, FileKit ensures that all file manipulation occurs 100% client-side, guaranteeing complete user data privacy.
          </p>
          <p className="mb-4">
            It is designed to perform heavy file manipulation tasks without sending files to any backend servers, making it fast, secure, and immune to server-side resource exhaustion.
          </p>
        </div>
      ),
    },
    {
      title: "CORE CAPABILITIES",
      description: (
        <div>
          <p className="mb-4">
            The application includes high-efficiency file utilities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Privacy-First Compression:</span> Engineered algorithms that achieve up to 60% file size reduction without noticeable quality loss.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Multithreaded Processing:</span> Integrated **Web Workers** to offload file operations from the main thread, ensuring a smooth, responsive 60fps UI experience even during intensive batch jobs.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Format Conversion:</span> Utilizes Next.js API routes and client-side processing for format conversion between PDF, JPEG, and PNG extensions.
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
            FileKit is built on modern web paradigms:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Next.js & React:</span> Optimized server-side rendering and client routing.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Web Workers API:</span> Parallel execution of batch file manipulations.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Tailwind CSS:</span> Responsive, modern dashboard layouts.
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
            src="/filekit.png"
            alt="FileKit Mockup Dashboard"
            height={600}
            width={1000}
            className="object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-5 md:px-15 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="font-sans font-semibold text-[43px]">
              FILEKIT
            </h1>
            <a
              href="https://file-kit-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF611D] text-white font-mono text-sm py-2.5 px-6 rounded-3xl hover:bg-[#FF4500] hover:scale-105 transition duration-300"
            >
              Launch Deployed App ↗
            </a>
          </div>
          <p className="font-mono text-[18px] mb-8">
            A <span className="text-[#FF611D]">privacy-first client-side utility suite</span> built with Next.js, leveraging Web Workers and browser-native APIs for secure, 100% local file operations.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "Next.js • React • Web Workers • Tailwind CSS • Vercel • ",
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
