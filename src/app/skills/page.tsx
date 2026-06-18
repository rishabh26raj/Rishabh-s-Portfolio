"use client";
import React from "react";
import AnimatedContent from "../components/animatedcontent";
import {
  IconBrandTypescript,
  IconBrandJavascript,
  IconCoffee,
  IconBrandPython,
  IconDatabase,
  IconBrandHtml5,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandGit,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandRedux,
  IconBrandVscode,
  IconBrandFirebase,
  IconBrandMongodb,
  IconCode,
  IconServer,
  IconChartBar,
} from "@tabler/icons-react";

const SkillsPage = () => {
  const categories = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "Java", icon: IconCoffee, desc: "OOP, backend development, and algorithms" },
        { name: "Python", icon: IconBrandPython, desc: "Data analysis, machine learning, and scripting" },
        { name: "C", icon: IconCode, desc: "Systems programming and computer science foundations" },
        { name: "MySQL", icon: IconDatabase, desc: "Relational database design and queries" },
        { name: "JavaScript", icon: IconBrandJavascript, desc: "Dynamic web interaction and frontend logic" },
        { name: "TypeScript", icon: IconBrandTypescript, desc: "Type-safe programming for scalable web apps" },
        { name: "HTML/CSS", icon: IconBrandHtml5, desc: "Responsive layout design and semantic markup" },
      ],
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      skills: [
        { name: "Next.js", icon: IconBrandNextjs, desc: "Modern SSR/SSG fullstack React applications" },
        { name: "React.js", icon: IconBrandReact, desc: "Component-driven user interfaces and hooks" },
        { name: "Node.js", icon: IconBrandNodejs, desc: "Scalable server-side javascript runtime" },
        { name: "Express.js", icon: IconServer, desc: "Minimalist web API frameworks for Node.js" },
        { name: "Prisma ORM", icon: IconDatabase, desc: "Type-safe database mapping and transactions" },
        { name: "Tailwind CSS", icon: IconBrandTailwind, desc: "Utility-first rapid styling and responsive layout" },
        { name: "Redux Toolkit", icon: IconBrandRedux, desc: "Predictable global application state management" },
        { name: "Pandas & NumPy", icon: IconChartBar, desc: "Data analysis and array manipulation" },
      ],
    },
    {
      title: "DEVELOPER TOOLS & CLOUD",
      skills: [
        { name: "Git", icon: IconBrandGit, desc: "Distributed version control and branch workflows" },
        { name: "VS Code", icon: IconBrandVscode, desc: "Primary code editor for web and scripts" },
        { name: "IntelliJ IDEA", icon: IconCoffee, desc: "Advanced IDE for enterprise Java development" },
        { name: "Firebase", icon: IconBrandFirebase, desc: "Backend-as-a-Service, Auth, and Real-time database" },
        { name: "Supabase", icon: IconDatabase, desc: "Open-source Firebase alternative and PostgreSQL" },
        { name: "MongoDB", icon: IconBrandMongodb, desc: "NoSQL document store for high-volume data" },
        { name: "Postman", icon: IconServer, desc: "API development, simulation, and testing suite" },
        { name: "Vercel", icon: IconBrandNextjs, desc: "Cloud deployment and serverless hosting" },
      ],
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-6 md:px-12 pt-28 lg:pt-40 pb-20 font-mono">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          config={{ tension: 70, friction: 13 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
        >
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-[#D6D2BD]">TECHNICAL SKILLS</h1>
            <h2 className="font-semibold text-lg text-[#FF611D] tracking-widest uppercase">
              My Tech Stack & Expertise
            </h2>
          </div>
        </AnimatedContent>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <div key={catIdx}>
              <AnimatedContent
                distance={40}
                direction="vertical"
                reverse={false}
                config={{ tension: 70, friction: 13 }}
                initialOpacity={0}
                animateOpacity
                scale={1.05}
                threshold={0.1}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#FF611D] border-b border-[#FF611D]/30 pb-2">
                  {"// "}{category.title}
                </h3>
              </AnimatedContent>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = skill.icon;
                  return (
                    <AnimatedContent
                      key={skillIdx}
                      distance={60}
                      direction="vertical"
                      reverse={false}
                      config={{ tension: 70, friction: 13 }}
                      initialOpacity={0}
                      animateOpacity
                      scale={1.1}
                      threshold={0.05}
                      delay={skillIdx * 50}
                    >
                      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-[#FF611D] hover:shadow-[0_0_15px_rgba(255,97,29,0.15)] transition-all duration-300 group flex flex-col items-center text-center h-full justify-between">
                        <div className="text-[#D6D2BD]/70 group-hover:text-[#FF611D] transition-colors duration-300 mb-4">
                          <IconComponent size={48} stroke={1.5} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#D6D2BD] group-hover:text-[#FF611D] transition-colors duration-300 mb-2">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-[#D6D2BD]/55 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    </AnimatedContent>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
