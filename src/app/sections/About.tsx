
import { Timeline } from "../components/timeline";

export const About = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Pursuing B.E. in Information Science and Engineering at CMR Institute of Technology, Bangalore (CGPA: 8.75, Expected Graduation: 2027)
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Key Focus & Achievements:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🚀 Building ApnaStay, FileKit, and Smart Virtual Assistant portals
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🏆 Participated in Adobe India Hackathon (2025)
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📜 Certified Elite in Programming & DSA (Python) by NPTEL
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2025 - Dec 2025",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Virtual Intern at Infosys Springboard Internship 6.0
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Key Experiences:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📉 Engineered a Budget Forecasting Tool using Python and React to visualize financial trends
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🔐 Implemented secure authentication and real-time syncing via Firebase Integration
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              ⚡ Optimized frontend components using React Hooks, reducing re-renders by 25%
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Acquired strong foundational concepts in data structures, algorithms, and software development
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Milestones:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🎓 Graduated CBSE Class XII Science from Raghubir Singh Modern School, New Delhi (73%)
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              💻 Began open-source contributions and command-line scripting utilities
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          CODE.EAT.SLEEP.REPEAT
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
