"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconMail,
  IconPhone,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Footer = () => {
  const footerLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rishabh26raj/",
      icon: IconBrandLinkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/rishabh26raj",
      icon: IconBrandGithub,
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/R1sha_bh/",
      icon: IconBrandLeetcode,
    },
    {
      name: "Email",
      link: "mailto:rishabh26raj9@gmail.com?subject=Hello%20Rishabh!%20I%20am%20a%20visitor%20from%20your%20portfolio",
      icon: IconMail,
    },
    {
      name: "Phone",
      link: "tel:+918433998135",
      icon: IconPhone,
    },
    {
      name: "Twitter / X",
      link: "https://x.com/Rishabh71693010",
      icon: IconBrandX,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/r1sha_bh",
      icon: IconBrandInstagram,
    },
  ];

  return (
    <div className="py-8 px-4 text-center mt-2 relative">
      <hr className="border-t border-gray-300 mb-8" />
      <div className="mb-4 flex justify-center items-center px-4">
        <motion.div
          whileHover={{ scale: 1.08, rotate: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-block"
        >
          <Image src="/rishabh_logo.svg" alt="Logo" width={120} height={33} />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mt-15 px-8 gap-8">
        <div className="md:text-left mb-4 md:mb-0">
          <p className="font-bold text-lg">Rishabh Raj</p>
          <p className="text-sm text-[#D6D2BD]/70 mt-1">Passionate learner. Innovative developer.</p>
        </div>
        <div className="z-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 w-full md:max-w-xl">
          {footerLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex justify-between items-center group gap-4 border-b border-gray-500/10 pb-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-left hover:text-[#FF611D] transition-colors duration-300 text-sm"
                >
                  <IconComponent size={18} stroke={1.5} className="text-[#D6D2BD]/70 group-hover:text-[#FF611D]" />
                  <span>{item.name}</span>
                </a>
                <ArrowUpRight
                  className="text-[#FF611D] transition-transform duration-300 group-hover:translate-x-1"
                  size={16}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;