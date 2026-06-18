"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";

export default function SmartVirtualAssistantPage() {
  const content = [
    {
      title: "PROJECT OVERVIEW",
      description: (
        <div>
          <p className="mb-4">
            The Smart Virtual Assistant is an AI-powered HR Dashboard designed to streamline employee management. Built with Next.js and Tailwind CSS, the platform provides HR departments with a centralized, responsive interface for operations and analytics.
          </p>
          <p className="mb-4">
            At its core, the application integrates state-of-the-art LLMs to answer inquiries and automate database operations, reducing administrative overhead and increasing organizational productivity.
          </p>
        </div>
      ),
    },
    {
      title: "AI CHATBOT CAPABILITIES",
      description: (
        <div>
          <p className="mb-4">
            The portal features a built-in conversational AI layer:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Google Gemini API:</span> Integrated the Gemini models to construct an intelligent HR chatbot.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Query Resolution:</span> Capable of instantly answering and resolving over 80% of common employee and administrative HR queries.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Action Automation:</span> Chat triggers that can search records, queue notifications, or update data columns on voice or text instruction.
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
            The stack is chosen for performance, robustness, and real-time capability:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="text-[#FF611D] font-bold">Next.js & Tailwind CSS:</span> Modular UI components and fast styling rendering.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Prisma ORM:</span> Elegant, type-safe database schemas and queries.
            </li>
            <li>
              <span className="text-[#FF611D] font-bold">Supabase:</span> PostgreSQL database hosting and subscription channels for real-time employee analytics updates.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "ROBUSTNESS & UPTIME",
      description: (
        <div>
          <p className="mb-4">
            To make the dashboard production-ready:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Deployed strict React error-handling boundary shields to isolate broken component render pipelines.</li>
            <li>Implemented extensive logging frameworks to debug API latencies.</li>
            <li>Maintained a documented 99.9% application uptime during mock load trials.</li>
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
            src="/assistant.png"
            alt="Smart Virtual Assistant HR Dashboard"
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
            SMART VIRTUAL ASSISTANT
          </h1>
          <p className="font-mono text-[18px] mb-8">
            An <span className="text-[#FF611D]">AI-powered HR Dashboard</span> designed to automate employee operations, featuring Google Gemini chat integration, Prisma ORM, and Supabase database.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "Next.js • Tailwind CSS • Gemini API • Prisma ORM • Supabase • PostgreSQL • ",
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
